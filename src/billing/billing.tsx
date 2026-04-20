import { useState, useEffect } from "react";
import { MdDelete, MdPrint, MdDownload } from "react-icons/md";

interface MenuItem {
    id: string;
    name: string;
    price: number;
    category: string;
}

interface BillItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

interface Bill {
    billId: string;
    items: BillItem[];
    total: number;
    date: string;
    customerName: string;
}

const MENU_ITEMS: MenuItem[] = [
    { id: "1", name: "Espresso", price: 50, category: "Coffee" },
    { id: "2", name: "Cappuccino", price: 80, category: "Coffee" },
    { id: "3", name: "Latte", price: 90, category: "Coffee" },
    { id: "4", name: "Americano", price: 60, category: "Coffee" },
    { id: "5", name: "Croissant", price: 100, category: "Bakery" },
    { id: "6", name: "Sandwich", price: 150, category: "Food" },
    { id: "7", name: "Salad", price: 120, category: "Food" },
    { id: "8", name: "Pastry", price: 80, category: "Bakery" },
    { id: "9", name: "Iced Tea", price: 70, category: "Beverages" },
    { id: "10", name: "Cold Coffee", price: 100, category: "Beverages" },
];

function Billing() {
    const [currentItems, setCurrentItems] = useState<BillItem[]>([]);
    const [customerName, setCustomerName] = useState("");
    const [bills, setBills] = useState<Bill[]>(() => {
        const saved = localStorage.getItem("café-bills");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("café-bills", JSON.stringify(bills));
    }, [bills]);

    const addItem = (menuItem: MenuItem) => {
        const existing = currentItems.find(item => item.id === menuItem.id);
        if (existing) {
            setCurrentItems(currentItems.map(item =>
                item.id === menuItem.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCurrentItems([...currentItems, { ...menuItem, quantity: 1 }]);
        }
    };

    const removeItem = (id: string) => {
        setCurrentItems(currentItems.filter(item => item.id !== id));
    };

    const updateQuantity = (id: string, quantity: number) => {
        if (quantity <= 0) {
            removeItem(id);
        } else {
            setCurrentItems(currentItems.map(item =>
                item.id === id ? { ...item, quantity } : item
            ));
        }
    };

    const calculateTotal = () => {
        return currentItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    };

    const generateBillId = () => {
        return `BILL-${Date.now()}`;
    };

    const saveBill = () => {
        if (currentItems.length === 0) {
            alert("Please add items to the bill!");
            return;
        }
        const total = calculateTotal();
        const newBill: Bill = {
            billId: generateBillId(),
            items: currentItems,
            total,
            date: new Date().toLocaleString(),
            customerName: customerName || "Walk-in Customer",
        };
        setBills([...bills, newBill]);
        printReceipt(newBill);
        setCurrentItems([]);
        setCustomerName("");
    };

    const printReceipt = (bill: Bill) => {
        const receiptContent = `
        ╔══════════════════════════════════╗
        ║     CAFÉ BILLING RECEIPT          ║
        ╚══════════════════════════════════╝
        
        Bill ID: ${bill.billId}
        Date: ${bill.date}
        Customer: ${bill.customerName}
        
        ──────────────────────────────────
        ITEMS:
        ──────────────────────────────────
        ${bill.items.map(item => `${item.name.padEnd(15)} x${item.quantity.toString().padStart(2)} = ₹${(item.price * item.quantity).toString().padStart(6)}`).join('\n')}
        ──────────────────────────────────
        TOTAL: ₹${bill.total.toString().padStart(30)}
        ──────────────────────────────────
        
        Thank You for your purchase!
        `;
        const printWindow = window.open("", "", "height=600,width=500");
        if (printWindow) {
            printWindow.document.write(`<pre>${receiptContent}</pre>`);
            printWindow.document.close();
            printWindow.print();
        }
    };

    const deleteBill = (billId: string) => {
        setBills(bills.filter(bill => bill.billId !== billId));
    };

    const downloadDailySales = () => {
        const today = new Date().toDateString();
        const todayBills = bills.filter(b => b.date.includes(today));
        const totalSales = todayBills.reduce((sum, bill) => sum + bill.total, 0);

        const report = `
DAILY SALES REPORT - ${today}

Total Bills: ${todayBills.length}
Total Sales: ₹${totalSales}

DETAILED BILLS:
${todayBills.map(bill => `
Bill ID: ${bill.billId}
Customer: ${bill.customerName}
Time: ${bill.date}
Amount: ₹${bill.total}
Items: ${bill.items.map(item => `${item.name} (x${item.quantity})`).join(', ')}
`).join('\n')}
        `;

        const element = document.createElement("a");
        element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(report));
        element.setAttribute("download", `sales-report-${today}.txt`);
        element.style.display = "none";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    const categories = [...new Set(MENU_ITEMS.map(item => item.category))];
    const total = calculateTotal();

    return (
        <div className="cafe-theme cafe-fade-in">
            <div className="max-w-7xl mx-auto p-6">
                <div className="cafe-header mb-8">
                    <h1 className="text-4xl font-bold text-center">☕ Café Billing System</h1>
                    <p className="text-center mt-2 opacity-90">Professional Point of Sale</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Menu Section */}
                    <div className="lg:col-span-2">
                        <div className="cafe-card p-6">
                            <h2 className="text-2xl font-bold text-center mb-6" style={{ color: 'var(--cafe-text-primary)' }}>🍽️ Menu Items</h2>
                            {categories.map(category => (
                                <div key={category} className="mb-6">
                                    <h3 className="text-lg font-semibold mb-3 pb-2 border-b-2" style={{ color: 'var(--cafe-primary)', borderColor: 'var(--cafe-border-medium)' }}>
                                        {category}
                                    </h3>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                        {MENU_ITEMS.filter(item => item.category === category).map(item => (
                                            <button
                                                key={item.id}
                                                onClick={() => addItem(item)}
                                                className="cafe-menu-item text-center"
                                            >
                                                <div className="font-semibold mb-1" style={{ color: 'var(--cafe-text-primary)' }}>{item.name}</div>
                                                <div className="font-bold text-lg" style={{ color: 'var(--cafe-primary)' }}>₹{item.price}</div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bill Section */}
                    <div className="lg:col-span-1">
                        <div className="cafe-card p-6 sticky top-6">
                            <h2 className="text-2xl font-bold text-center mb-4" style={{ color: 'var(--cafe-text-primary)' }}>🧾 Current Bill</h2>

                            {/* Customer Name */}
                            <input
                                type="text"
                                placeholder="Customer Name (Optional)"
                                value={customerName}
                                onChange={(e) => setCustomerName(e.target.value)}
                                className="cafe-input w-full mb-4"
                            />

                            {/* Bill Items */}
                            <div className="max-h-96 overflow-y-auto cafe-scrollbar bg-gray-50 rounded-lg p-4 mb-4">
                                {currentItems.length === 0 ? (
                                    <p className="text-gray-500 text-center py-8">No items added</p>
                                ) : (
                                    <div className="space-y-3">
                                        {currentItems.map(item => (
                                            <div key={item.id} className="bg-white p-3 rounded-lg border" style={{ borderColor: 'var(--cafe-border-light)' }}>
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="font-semibold" style={{ color: 'var(--cafe-text-primary)' }}>{item.name}</span>
                                                    <button
                                                        onClick={() => removeItem(item.id)}
                                                        className="text-red-500 hover:text-red-700 transition-all"
                                                    >
                                                        <MdDelete size={18} />
                                                    </button>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            className="cafe-button-secondary px-2 py-1 text-xs"
                                                        >
                                                            -
                                                        </button>
                                                        <span className="w-6 text-center font-bold" style={{ color: 'var(--cafe-text-primary)' }}>{item.quantity}</span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            className="cafe-button-secondary px-2 py-1 text-xs"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                    <span className="font-bold" style={{ color: 'var(--cafe-primary)' }}>₹{item.price * item.quantity}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Total */}
                            <div className="rounded-lg p-4 mb-4" style={{ background: 'linear-gradient(135deg, var(--cafe-secondary-light) 0%, var(--cafe-secondary) 100%)' }}>
                                <div className="flex justify-between items-center mb-2">
                                    <span style={{ color: 'var(--cafe-text-secondary)' }}>Subtotal:</span>
                                    <span className="font-semibold" style={{ color: 'var(--cafe-text-primary)' }}>₹{total}</span>
                                </div>
                                <div className="border-t-2 pt-2" style={{ borderColor: 'var(--cafe-border-medium)' }}>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xl font-bold" style={{ color: 'var(--cafe-text-primary)' }}>Total:</span>
                                        <span className="text-2xl font-bold" style={{ color: 'var(--cafe-primary)' }}>₹{total}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-2">
                                <button
                                    onClick={saveBill}
                                    className="cafe-button-primary w-full flex items-center justify-center gap-2"
                                >
                                    <MdPrint /> Generate Bill
                                </button>
                                <button
                                    onClick={() => setCurrentItems([])}
                                    className="cafe-button-secondary w-full"
                                >
                                    Clear Bill
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Daily Sales Section */}
                <div className="mt-8 cafe-card p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold" style={{ color: 'var(--cafe-text-primary)' }}>📊 Daily Sales Record</h2>
                        <button
                            onClick={downloadDailySales}
                            className="cafe-button-accent flex items-center gap-2"
                        >
                            <MdDownload /> Download Report
                        </button>
                    </div>

                    {bills.length === 0 ? (
                        <p className="text-gray-500 text-center py-8">No bills generated yet</p>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="cafe-table w-full">
                                <thead>
                                    <tr>
                                        <th>Bill ID</th>
                                        <th>Customer</th>
                                        <th>Date</th>
                                        <th>Items</th>
                                        <th className="text-right">Amount</th>
                                        <th className="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bills.map(bill => (
                                        <tr key={bill.billId} className="hover:bg-gray-50">
                                            <td className="font-mono" style={{ color: 'var(--cafe-text-secondary)' }}>{bill.billId}</td>
                                            <td style={{ color: 'var(--cafe-text-primary)' }}>{bill.customerName}</td>
                                            <td style={{ color: 'var(--cafe-text-secondary)' }}>{bill.date}</td>
                                            <td style={{ color: 'var(--cafe-text-secondary)' }}>{bill.items.length} items</td>
                                            <td className="font-bold text-right" style={{ color: 'var(--cafe-primary)' }}>₹{bill.total}</td>
                                            <td className="text-center">
                                                <button
                                                    onClick={() => deleteBill(bill.billId)}
                                                    className="text-red-500 hover:text-red-700 transition-all"
                                                >
                                                    <MdDelete size={20} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Billing;

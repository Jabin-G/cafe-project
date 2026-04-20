import { useState } from "react";
import type { BuyOrder } from "./Types";

const BuyOrderTable = () => {
    const [orders] = useState<BuyOrder[]>([
        {
            id: 1,
            orderId: "BO001",
            customerName: "John Doe",
            items: "Espresso, Croissant",
            quantity: 2,
            totalPrice: 15.99,
            status: "completed",
        },
        {
            id: 2,
            orderId: "BO002",
            customerName: "Jane Smith",
            items: "Latte, Sandwich",
            quantity: 2,
            totalPrice: 18.50,
            status: "pending",
        },
        {
            id: 3,
            orderId: "BO003",
            customerName: "Mike Johnson",
            items: "Cappuccino, Muffin",
            quantity: 2,
            totalPrice: 12.75,
            status: "completed",
        },
    ]);

    const handleOrderClick = (order: BuyOrder) => {
        alert(`Order ${order.orderId} - Status: ${order.status}`);
    };

    return (
        <div className="cafe-card p-6">
            <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: 'var(--cafe-text-primary)' }}>🛒 Buy Orders</h2>
            <div className="overflow-x-auto cafe-scrollbar">
                <table className="cafe-table w-full">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer Name</th>
                            <th>Items</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id} className="hover:bg-gray-50">
                                <td className="font-mono" style={{ color: 'var(--cafe-text-secondary)' }}>{order.orderId}</td>
                                <td style={{ color: 'var(--cafe-text-primary)' }}>{order.customerName}</td>
                                <td style={{ color: 'var(--cafe-text-secondary)' }}>{order.items}</td>
                                <td className="text-center font-bold" style={{ color: 'var(--cafe-text-primary)' }}>{order.quantity}</td>
                                <td className="font-bold text-right" style={{ color: 'var(--cafe-primary)' }}>${order.totalPrice}</td>
                                <td className="text-center">
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${order.status === "completed" ? "cafe-status-completed" :
                                            order.status === "pending" ? "cafe-status-pending" :
                                                "cafe-status-cancelled"
                                        }`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="text-center">
                                    <button
                                        onClick={() => handleOrderClick(order)}
                                        className="cafe-button-primary px-3 py-1 text-sm"
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BuyOrderTable;

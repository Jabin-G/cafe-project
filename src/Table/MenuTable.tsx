import { useState } from "react";
import type { MenuItem } from "./Types";

const MenuTable = () => {
    const [menuItems] = useState<MenuItem[]>([
        {
            id: 1,
            itemId: "MN001",
            itemName: "Espresso",
            category: "Coffee",
            price: 3.99,
            availability: "available",
        },
        {
            id: 2,
            itemId: "MN002",
            itemName: "Cappuccino",
            category: "Coffee",
            price: 4.99,
            availability: "available",
        },
        {
            id: 3,
            itemId: "MN003",
            itemName: "Croissant",
            category: "Pastry",
            price: 3.50,
            availability: "out of stock",
        },
        {
            id: 4,
            itemId: "MN004",
            itemName: "Sandwich",
            category: "Food",
            price: 8.99,
            availability: "available",
        },
        {
            id: 5,
            itemId: "MN005",
            itemName: "Muffin",
            category: "Pastry",
            price: 2.99,
            availability: "available",
        },
    ]);

    const handleMenuItemClick = (item: MenuItem) => {
        alert(`${item.itemName} - $${item.price}`);
    };

    return (
        <div className="cafe-card p-6">
            <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: 'var(--cafe-text-primary)' }}>🍽️ Add Menu Items</h2>
            <div className="overflow-x-auto cafe-scrollbar">
                <table className="cafe-table w-full">
                    <thead>
                        <tr>
                            <th>Item ID</th>
                            <th>Item Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Availability</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {menuItems.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50">
                                <td className="font-mono" style={{ color: 'var(--cafe-text-secondary)' }}>{item.itemId}</td>
                                <td className="font-semibold" style={{ color: 'var(--cafe-text-primary)' }}>{item.itemName}</td>
                                <td style={{ color: 'var(--cafe-text-secondary)' }}>{item.category}</td>
                                <td className="font-bold text-right" style={{ color: 'var(--cafe-primary)' }}>${item.price}</td>
                                <td className="text-center">
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${item.availability === "available" ? "cafe-status-completed" : "cafe-status-cancelled"
                                        }`}>
                                        {item.availability}
                                    </span>
                                </td>
                                <td className="text-center">
                                    <button
                                        onClick={() => handleMenuItemClick(item)}
                                        className="cafe-button-accent px-3 py-1 text-sm"
                                    >
                                        Add
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

export default MenuTable;

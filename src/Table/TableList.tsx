import { useState } from "react";
import TableCard from "./TableCard";
import type { Table } from "./Types";
import BuyOrderTable from "./BuyOrderTable";

const TableList = () => {
    const [tables] = useState<Table[]>([
        { id: 1, number: "Table 1", seats: 4, status: "available" },
        { id: 2, number: "Table 2", seats: 2, status: "occupied" },
        { id: 3, number: "Table 3", seats: 6, status: "reserved" },
    ]);

    const handleClick = (table: Table) => {
        alert(`Clicked: ${table.number}`);
    };

    return (
        <div className="cafe-theme cafe-fade-in">
            <div className="max-w-7xl mx-auto p-6">
                <div className="cafe-header mb-8">
                    <h1 className="text-4xl font-bold text-center">🍽️ Table Management</h1>
                    <p className="text-center mt-2 opacity-90">Manage your café tables</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tables.map((table) => (
                        <div key={table.id}>
                            {table.id === 3 ? (
                                <BuyOrderTable />
                            ) : (
                                <TableCard
                                    table={table}
                                    onClick={() => handleClick(table)}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TableList;

import type { Table } from "./Types";

interface Props {
    table: Table;
    onClick: () => void;
}

const TableCard = ({ table, onClick }: Props) => {
    const getStatusClass = (status: string) => {
        switch (status) {
            case 'available':
                return 'cafe-status-available';
            case 'occupied':
                return 'cafe-status-occupied';
            case 'reserved':
                return 'cafe-status-reserved';
            default:
                return 'cafe-status-available';
        }
    };

    return (
        <div
            onClick={onClick}
            className="cafe-card cursor-pointer p-6 text-center"
        >
            <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--cafe-text-primary)' }}>{table.number}</h3>
            <p className="text-lg mb-4" style={{ color: 'var(--cafe-text-secondary)' }}>👥 {table.seats} Seats</p>

            <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${getStatusClass(table.status)}`}>
                {table.status.charAt(0).toUpperCase() + table.status.slice(1)}
            </span>
        </div>
    );
};

export default TableCard;

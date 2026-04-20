import { useState } from "react";
import type { BookingOption } from "./Types";

const BookingTable = () => {
    const [bookings] = useState<BookingOption[]>([
        {
            id: 1,
            bookingId: "BK001",
            customerName: "Alice Brown",
            date: "2026-04-25",
            time: "18:00",
            seats: 4,
            tableNumber: "Table 5",
            status: "confirmed",
        },
        {
            id: 2,
            bookingId: "BK002",
            customerName: "Bob Wilson",
            date: "2026-04-26",
            time: "19:30",
            seats: 2,
            tableNumber: "Table 2",
            status: "pending",
        },
        {
            id: 3,
            bookingId: "BK003",
            customerName: "Carol Davis",
            date: "2026-04-27",
            time: "20:00",
            seats: 6,
            status: "confirmed",
        },
    ]);

    const handleBookingClick = (booking: BookingOption) => {
        alert(
            `Booking ${booking.bookingId} - ${booking.customerName} on ${booking.date} at ${booking.time}`
        );
    };

    return (
        <div className="cafe-card p-6">
            <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: 'var(--cafe-text-primary)' }}>📅 Booking Options</h2>
            <div className="overflow-x-auto cafe-scrollbar">
                <table className="cafe-table w-full">
                    <thead>
                        <tr>
                            <th>Booking ID</th>
                            <th>Customer Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Seats</th>
                            <th>Table</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking) => (
                            <tr key={booking.id} className="hover:bg-gray-50">
                                <td className="font-mono" style={{ color: 'var(--cafe-text-secondary)' }}>{booking.bookingId}</td>
                                <td style={{ color: 'var(--cafe-text-primary)' }}>{booking.customerName}</td>
                                <td style={{ color: 'var(--cafe-text-secondary)' }}>{booking.date}</td>
                                <td style={{ color: 'var(--cafe-text-secondary)' }}>{booking.time}</td>
                                <td className="text-center font-bold" style={{ color: 'var(--cafe-text-primary)' }}>{booking.seats}</td>
                                <td style={{ color: 'var(--cafe-text-secondary)' }}>{booking.tableNumber || "-"}</td>
                                <td className="text-center">
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${booking.status === "confirmed" ? "cafe-status-completed" :
                                            booking.status === "pending" ? "cafe-status-pending" :
                                                "cafe-status-cancelled"
                                        }`}>
                                        {booking.status}
                                    </span>
                                </td>
                                <td className="text-center">
                                    <button
                                        onClick={() => handleBookingClick(booking)}
                                        className="cafe-button-secondary px-3 py-1 text-sm"
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

export default BookingTable;

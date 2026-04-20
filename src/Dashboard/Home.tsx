import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import LineChart, { DashboardCharts, RevenueDoughnut } from './LineChart';
import { LuClock11 } from "react-icons/lu";
import { Ri24HoursFill } from "react-icons/ri";
import { LiaCalendarWeekSolid } from "react-icons/lia";

function Home() {
    const overviewCards = [
        { title: 'Hours', value: 20, icon: LuClock11, color: 'text-blue-500', percent: '+5.2%' },
        { title: 'Daily', value: 240, icon: Ri24HoursFill, color: 'text-green-500', percent: '+2.1%' },
        { title: 'Weekly', value: 1680, icon: LiaCalendarWeekSolid, color: 'text-purple-500', percent: '+8.5%' },
        { title: 'Monthly', value: 11760, icon: BsFillGrid3X3GapFill, color: 'text-red-500', percent: '+12.3%' },
    ];

    const statsCards = [
        { title: 'Daily', value: 300, icon: BsFillArchiveFill, color: 'text-blue-500' },
        { title: 'Weekly', value: 12, icon: BsFillGrid3X3GapFill, color: 'text-green-500' },
        { title: 'Monthly', value: 33, icon: BsPeopleFill, color: 'text-purple-500' },
        { title: 'Alerts', value: 42, icon: BsFillBellFill, color: 'text-red-500' },
    ];

    const recentOrders = [
        { name: "Espresso", date: "Oct 20, 2025", amount: "₹120", status: "Pending" },
        { name: "Latte", date: "Oct 20, 2025", amount: "₹150", status: "Paid" },
        { name: "Cappuccino", date: "Oct 21, 2025", amount: "₹160", status: "Paid" },
        { name: "Americano", date: "Oct 21, 2025", amount: "₹130", status: "Paid" },
        { name: "Mocha", date: "Oct 22, 2025", amount: "₹170", status: "Paid" },
        { name: "Café au lait", date: "Oct 22, 2025", amount: "₹155", status: "Pending" },
        { name: "Cortado", date: "Oct 23, 2025", amount: "₹140", status: "Paid" },
        { name: "Flat White", date: "Oct 23, 2025", amount: "₹165", status: "Paid" },
        { name: "Macchiato", date: "Oct 24, 2025", amount: "₹150", status: "Paid" },
        { name: "Affogato", date: "Oct 24, 2025", amount: "₹200", status: "Paid" },
        { name: "Cold Brew", date: "Oct 25, 2025", amount: "₹180", status: "Pending" },
        { name: "Nitro Cold Brew", date: "Oct 25, 2025", amount: "₹210", status: "Paid" },
        { name: "Irish Coffee", date: "Oct 26, 2025", amount: "₹250", status: "Paid" },
        { name: "Turkish Coffee", date: "Oct 26, 2025", amount: "₹190", status: "Paid" },
        { name: "Vienna Coffee", date: "Oct 27, 2025", amount: "₹220", status: "Pending" },
        { name: "Ristretto", date: "Oct 27, 2025", amount: "₹135", status: "Paid" },
        { name: "Doppio", date: "Oct 28, 2025", amount: "₹160", status: "Paid" },
        { name: "Red Eye", date: "Oct 28, 2025", amount: "₹170", status: "Paid" },
        { name: "Café Bombón", date: "Oct 29, 2025", amount: "₹185", status: "Paid" },
        { name: "Frappuccino", date: "Oct 29, 2025", amount: "₹210", status: "Pending" },
        { name: "Iced Latte", date: "Oct 30, 2025", amount: "₹175", status: "Paid" },
        { name: "Caramel Macchiato", date: "Oct 30, 2025", amount: "₹195", status: "Paid" },
        { name: "Cinnamon Mocha", date: "Oct 31, 2025", amount: "₹185", status: "Paid" },
        { name: "Pumpkin Spice Latte", date: "Oct 31, 2025", amount: "₹205", status: "Pending" },
    ];


    return (
        <main className="cafe-theme space-y-6 p-6">
            <div className="cafe-header mb-8">
                <h1 className="text-3xl font-bold text-center">📊 Real-time Overview</h1>
                <p className="text-center mt-2 opacity-90">Your café performance at a glance</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {overviewCards.map((card, i) => {
                    const Icon = card.icon;
                    return (
                        <div key={i} className="cafe-card p-6 flex flex-col hover:scale-105 transition-all duration-300">
                            <div className="flex justify-between items-center">
                                <h3 className="font-medium" style={{ color: 'var(--cafe-text-secondary)' }}>{card.title}</h3>
                                <Icon className="text-2xl" style={{ color: 'var(--cafe-primary)' }} />
                            </div>
                            <h1 className="text-4xl font-bold mt-3" style={{ color: 'var(--cafe-text-primary)' }}>{card.value}</h1>
                            <span className="mt-1 text-sm" style={{ color: 'var(--cafe-success)' }}>{card.percent}</span>
                        </div>
                    )
                })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="cafe-card p-6 flex items-center justify-center">
                    <LineChart />
                </div>
                <div className="cafe-card p-6 flex items-center justify-center">
                    <DashboardCharts />
                </div>
                <div className="cafe-card p-6 flex items-center justify-center">
                    <RevenueDoughnut />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {statsCards.map((card, i) => {
                    const Icon = card.icon;
                    return (
                        <div key={i} className="cafe-card p-6 flex flex-col hover:scale-105 transition-all duration-300">
                            <div className="flex justify-between items-center">
                                <h3 className="font-medium" style={{ color: 'var(--cafe-text-secondary)' }}>{card.title}</h3>
                                <Icon className="text-2xl" style={{ color: 'var(--cafe-primary)' }} />
                            </div>
                            <h1 className="text-3xl font-bold mt-3" style={{ color: 'var(--cafe-text-primary)' }}>{card.value}</h1>
                        </div>
                    )
                })}
            </div>

            <div className="cafe-card p-6">
                <h2 className="text-xl font-bold mb-6 text-center" style={{ color: 'var(--cafe-text-primary)' }}>📋 Recent Orders</h2>
                <div className="max-h-96 overflow-y-auto cafe-scrollbar border rounded-xl" style={{ borderColor: 'var(--cafe-border-light)' }}>
                    <table className="cafe-table w-full">
                        <thead className="sticky top-0 bg-white z-10">
                            <tr>
                                <th>Product</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentOrders.map((order, i) => (
                                <tr key={i} className="border-b hover:bg-gray-50 transition-colors" style={{ borderColor: 'var(--cafe-border-light)' }}>
                                    <td style={{ color: 'var(--cafe-text-primary)' }}>{order.name}</td>
                                    <td style={{ color: 'var(--cafe-text-secondary)' }}>{order.date}</td>
                                    <td className="font-bold" style={{ color: 'var(--cafe-primary)' }}>{order.amount}</td>
                                    <td>
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${order.status === 'Paid' ? 'cafe-status-completed' : 'cafe-status-pending'
                                            }`}>
                                            {order.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <footer className="cafe-card py-6 mt-6">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-sm opacity-80">&copy; {new Date().getFullYear()} Café Manager. All rights reserved.</p>
                    <div className="flex space-x-6 mt-3 md:mt-0">
                        <a href="#" className="opacity-80 hover:opacity-100 text-sm transition-all" style={{ color: 'var(--cafe-text-secondary)' }}>Support</a>
                        <a href="#" className="opacity-80 hover:opacity-100 text-sm transition-all" style={{ color: 'var(--cafe-text-secondary)' }}>Help Center</a>
                        <a href="#" className="opacity-80 hover:opacity-100 text-sm transition-all" style={{ color: 'var(--cafe-text-secondary)' }}>Privacy</a>
                        <a href="#" className="opacity-80 hover:opacity-100 text-sm transition-all" style={{ color: 'var(--cafe-text-secondary)' }}>Terms</a>
                    </div>
                </div>
            </footer>
        </main>
    );
}

export default Home;

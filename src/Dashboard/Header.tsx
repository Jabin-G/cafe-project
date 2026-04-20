import { BsFillBellFill, BsPersonCircle, BsSearch, BsCalendarEventFill } from 'react-icons/bs';
import { FaCartPlus } from "react-icons/fa";

function Header() {
    return (
        <header className="sticky top-0 z-20 cafe-header px-4 py-2 flex items-center justify-between shadow-sm">

            <div className="flex flex-col leading-tight">
                <h1 className="text-xl font-bold">☕ Café Dashboard</h1>
                <p className="text-xs opacity-90">Welcome back!</p>
            </div>

            <div className="flex-1 mx-4">
                <div className="relative max-w-xs">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="cafe-input w-full py-1.5 pl-8 pr-3 text-sm"
                    />
                    <BsSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                </div>
            </div>

            <div className="flex items-center justify-between space-x-3">
                <BsFillBellFill className="text-lg opacity-80 hover:opacity-100 cursor-pointer transition-all" />
                <BsCalendarEventFill className="text-lg opacity-80 hover:opacity-100 cursor-pointer transition-all" />
                <FaCartPlus className="text-lg opacity-80 hover:opacity-100 cursor-pointer transition-all" />

                <div className="text-right leading-tight">
                    <p className="text-sm font-semibold">Jabin</p>
                    <p className="text-xs opacity-80">Admin</p>
                </div>

                <BsPersonCircle className="text-2xl opacity-80 hover:opacity-100 cursor-pointer transition-all" />
            </div>
        </header>
    );
}

export default Header;

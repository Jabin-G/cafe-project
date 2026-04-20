import { useState, type SetStateAction } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsGrid1X2Fill, BsFillArchiveFill } from 'react-icons/bs';
import { BsPeopleFill, BsFillGearFill } from 'react-icons/bs';
import { CgAbstract } from "react-icons/cg";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { GiWallet } from "react-icons/gi";
import { RiShoppingBag4Fill, RiBarChartBoxAiFill } from "react-icons/ri";
import { IoIosPeople, IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { MdReportProblem } from "react-icons/md";
import { FaBoxes } from "react-icons/fa";
import { MdOutlineTableRestaurant } from "react-icons/md";

function Sidebar() {
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const location = useLocation();

    const toggleMenu = (label: string | SetStateAction<null>) => {
        setOpenMenu(openMenu === label ? null : label);
    };

    const menuItems = [
        { icon: <BsGrid1X2Fill />, label: 'Dashboard', path: '/dashboard' },
        { icon: <BsFillArchiveFill />, label: 'Menu', path: '/menu' },
        { icon: <BsPeopleFill />, label: 'Billing', path: '/billing' },

        // FIXED: Unique table paths
        {
            icon: <MdOutlineTableRestaurant />,
            label: 'Table',
            path: '/table',
            children: [
                { label: 'Table 1', path: '/table/1' },
                { label: 'Table 2', path: '/table/2' },
                { label: 'Table 3', path: '/table/3' },
            ]
        },

        { icon: <FaBoxes />, label: 'Inventory', path: '/inventory' },
        { icon: <BiSolidPurchaseTag />, label: 'Purchase & Vendor', path: '/purchase-vendor' },
        { icon: <GiWallet />, label: 'Expense', path: '/expense' },
        { icon: <RiShoppingBag4Fill />, label: 'Customer', path: '/customer' },
        { icon: <IoIosPeople />, label: 'Employee', path: '/employees' },
        { icon: <MdReportProblem />, label: 'Reports', path: '/reports' },
        { icon: <RiBarChartBoxAiFill />, label: 'Advanced Options', path: '/advanced-options' },
    ];

    return (
        <aside className="h-screen flex flex-col justify-between cafe-sidebar">

            {/* Logo */}
            <div className="flex items-center justify-center h-16 border-b" style={{ borderColor: 'var(--cafe-border-medium)' }}>
                <CgAbstract className="text-2xl mr-2" style={{ color: 'var(--cafe-accent)' }} />
                <span className="text-lg font-semibold" style={{ color: 'var(--cafe-text-primary)' }}>☕ Café Manager</span>
            </div>

            {/* Menu */}
            <ul className="flex-1 mt-4 space-y-1 overflow-y-auto cafe-scrollbar">

                {menuItems.map((item, index) => {
                    const isActive = location.pathname === item.path;
                    const isChildActive = item.children?.some(child =>
                        location.pathname.startsWith(child.path)
                    );

                    return (
                        <li key={index}>
                            {item.children ? (
                                <>
                                    {/* Parent item */}
                                    <button
                                        onClick={() => toggleMenu(item.label)}
                                        className={`w-full flex items-center justify-between px-5 py-2.5 rounded-md transition-all
                                            ${(isActive || isChildActive)
                                                ? 'bg-white font-medium shadow-md'
                                                : 'text-gray-700 hover:bg-white hover:shadow-sm'
                                            }`}
                                        style={{
                                            color: (isActive || isChildActive) ? 'var(--cafe-primary)' : 'var(--cafe-text-secondary)',
                                            backgroundColor: (isActive || isChildActive) ? 'white' : 'transparent'
                                        }}
                                    >
                                        <div className="flex items-center">
                                            <span className="text-lg mr-3" style={{ color: (isActive || isChildActive) ? 'var(--cafe-primary)' : 'var(--cafe-text-secondary)' }}>{item.icon}</span>
                                            {item.label}
                                        </div>

                                        {openMenu === item.label ? (
                                            <IoIosArrowDown className="text-lg" style={{ color: 'var(--cafe-primary)' }} />
                                        ) : (
                                            <IoIosArrowForward className="text-lg" style={{ color: 'var(--cafe-text-secondary)' }} />
                                        )}
                                    </button>

                                    {/* Child menu */}
                                    {openMenu === item.label && (
                                        <ul className="ml-10 mt-1 space-y-1">
                                            {item.children.map((child, i) => {
                                                const isChild = location.pathname === child.path;
                                                return (
                                                    <li key={i}>
                                                        <Link
                                                            to={child.path}
                                                            className={`block px-3 py-2 rounded-md text-sm transition-all ${isChild
                                                                    ? 'font-medium shadow-sm'
                                                                    : 'hover:shadow-sm'
                                                                }`}
                                                            style={{
                                                                color: isChild ? 'var(--cafe-primary)' : 'var(--cafe-text-secondary)',
                                                                backgroundColor: isChild ? 'white' : 'transparent'
                                                            }}
                                                        >
                                                            {child.label}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    )}
                                </>
                            ) : (
                                // Normal single item
                                <Link
                                    to={item.path}
                                    className={`flex items-center px-5 py-2.5 rounded-md transition-all ${isActive
                                            ? 'bg-white font-medium shadow-md'
                                            : 'text-gray-700 hover:bg-white hover:shadow-sm'
                                        }`}
                                    style={{
                                        color: isActive ? 'var(--cafe-primary)' : 'var(--cafe-text-secondary)',
                                        backgroundColor: isActive ? 'white' : 'transparent'
                                    }}
                                >
                                    <span className="text-lg mr-3" style={{ color: isActive ? 'var(--cafe-primary)' : 'var(--cafe-text-secondary)' }}>{item.icon}</span>
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    );
                })}

            </ul>

            {/* Footer */}
            <div className="p-4 border-t" style={{ borderColor: 'var(--cafe-border-medium)' }}>
                <Link
                    to="/settings"
                    className="flex items-center px-4 py-2 rounded-md transition-all hover:bg-white hover:shadow-sm"
                    style={{ color: 'var(--cafe-text-secondary)' }}
                >
                    <BsFillGearFill className="text-lg mr-3" /> Settings
                </Link>
            </div>

        </aside>
    );
}

export default Sidebar;

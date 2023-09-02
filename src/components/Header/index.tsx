import { useState } from "react";
import { MdOutlineSettings, MdOutlineNotificationsNone, MdSegment, MdClear } from "react-icons/md";


export default function Index() {
    const [menuOpen, setMenuOpen] = useState(false)
    const handleClick = () => setMenuOpen(!menuOpen)
    return (
        <header>
            <nav className="bg-base_white border-b border-secondary_grey px-4 lg:px-6 py-4 ">

                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <h3 className="text-2xl font-semibold">ToDo</h3>
                    <div className="hidden lg:flex flex-wrap justify-between items-center gap-x-4">
                        <MdOutlineSettings />
                        <MdOutlineNotificationsNone />
                        <img className="w-10 h-10 rounded-full" src="https://bit.ly/sage-adebayo" alt="Rounded avatar" />

                    </div>
                    <button type="button"
                        className="inline-flex items-center p-2 ml-1 lg:hidden hover:bg-gray-100 "
                        onClick={handleClick}
                    >
                        {menuOpen ? <MdClear /> : <MdSegment />}
                    </button>
                </div>
                {menuOpen && (
                    <div className="p-4 flex flex-col items-center justify-center space-y-3 lg:hidden">
                        <ul className="flex flex-col  mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li className="text-lg font-medium cursor-pointer py-2 px-6 hover:underline">Settings</li>
                            <li className="text-lg font-medium cursor-pointer py-2 px-6 hover:underline">Notifications</li>
                            <li className="text-lg font-medium cursor-pointer py-2 px-6 hover:underline">Profile</li>

                        </ul>
                    </div>
                )}
            </nav>
        </header>
    )
}

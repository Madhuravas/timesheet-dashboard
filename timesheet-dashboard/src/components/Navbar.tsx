import { SlArrowDown } from "react-icons/sl";
import { useUser } from "../context/UserContext";
import Model from "../utils/Model";
import { useState } from "react";

function Navbar() {
    const { user } = useUser();
    const [showModel, setShowModel] = useState(false);
    const handleLogout = () => {
        sessionStorage.removeItem("isAuthenticated");
        sessionStorage.removeItem("id");
        window.location.href = "/"; // Redirect to login page
    }
    return (
        <nav className="sticky w-full top-0 left-0 h-[68px] bg-[#ffffff] p-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
                <h1 className="text-[24px]  font-[600] text-[hsl(219,40%,11%)]">ticktock</h1>
                <a href="/timesheet" className="text-[#111928] text-[16px]">Timesheets</a>
            </div>
            <div className="flex items-center gap-2">
                {user ? (
                    <>
                        <button onClick={() => setShowModel(prev => !prev)} className="flex items-center gap-2 rounded-lg px-3 h-[42px]">
                            <span>{user.name}</span>
                            <SlArrowDown />
                        </button>
                        {showModel && <div className="mt-3"><Model options={["Logout"]} onClose={() => setShowModel(prev => !prev)} selectedItem={handleLogout}/></div>}
                    </>
                ) : (
                    <button className="flex items-center gap-2 rounded-lg px-3 h-[42px]">
                        Login
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
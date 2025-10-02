import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function Main() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="bg-[#f0f7fb] px-24 py-10 flex-1">
                <Outlet />
            </div>

        </div>
    )
};

export default Main;
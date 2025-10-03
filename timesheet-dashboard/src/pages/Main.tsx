import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function Main() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="bg-[#f0f7fb] px-30 py-10 flex-1">
                <Outlet />
                <div className="mt-6">
                    <Footer />
                </div>

            </div>

        </div>
    )
};

export default Main;
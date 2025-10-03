import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useUser } from "../context/UserContext";

function Main() {
    const { setUser } = useUser();

    useEffect(() => {
        let isLoggedIn = sessionStorage.getItem("isAuthenticated") === "true";
        if (isLoggedIn) {
            fetchUserData();
        };
    }, []);

    const fetchUserData = async () => {
        let userId = sessionStorage.getItem("id");
        try {
            const response = await fetch(`http://localhost:5000/users?id=${userId}`);
            const users = await response.json();
            setUser(users[0]); // <-- set true in sessionStorage
            sessionStorage.setItem("id", users[0].id);
        } catch (error: any) {
            console.log(error.message || "Something went wrong");
        }
    }
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="bg-[#f0f7fb] px-30 py-10 md:px-15 sm:px-5 flex-1">
                <Outlet />
                <div className="mt-6">
                    <Footer />
                </div>

            </div>

        </div>
    )
};

export default Main;
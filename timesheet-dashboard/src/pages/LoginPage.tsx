import Login from "../components/Login";
import Intro from "../components/Intro";

function LoginPage({ onLogin }: { onLogin: () => void }) {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen items-center">
            <div className="order-2 md:order-1">
                <Login onLogin={onLogin} />
            </div>
            <div className="order-1 md:order-2 flex justify-center h-full">
                <Intro />
            </div>
        </div>
    )
};

export default LoginPage;
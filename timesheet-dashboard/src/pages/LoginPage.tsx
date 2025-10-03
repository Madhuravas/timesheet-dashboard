import Login from "../components/Login";
import Intro from "../components/Intro";

function LoginPage({ onLogin }: { onLogin: () => void }) {

    return (
        <div className="grid grid-cols-2 h-screen">
            <Login onLogin={onLogin}/>
            <Intro />
        </div>
    )
};

export default LoginPage;
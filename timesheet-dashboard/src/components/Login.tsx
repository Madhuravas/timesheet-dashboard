import React, { useState } from "react";

function Login({ onLogin }: { onLogin: () => void }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

    const validate = () => {
        const newErrors: { email?: string; password?: string } = {};
        if (!email) {
            newErrors.email = "Email is required";
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            newErrors.email = "Invalid email format";
        }
        if (!password) {
            newErrors.password = "Password is required";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            // Proceed with login logic
            onLogin();
        }
    };

    return (

        <form className="flex flex-col justify-center gap-4 p-20" onSubmit={handleSubmit}>
            <h2 className="text-xl text-[#111928] font-bold">Welcome back</h2>
            <div className="flex flex-col gap-1">
                <label className="text-[#111928]" htmlFor="email">Email</label>
                <input
                    className="border rounded-lg px-3 border-[#D1D5DB] h-[42px] outline-0"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-[#111928]" htmlFor="password">Password</label>
                <input
                    className="border rounded-lg px-3 border-[#D1D5DB] h-[42px] outline-0"
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
            </div>
            <div className="flex items-center gap-2">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
            </div>
            <button type="submit" className="bg-[#1A56DB] h-[41px] text-[#ffffff] rounded-lg cursor-pointer">Sign in</button>
        </form>
    );
}

export default Login;
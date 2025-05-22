"use client";
import { useState } from "react";

export default function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (event) => {
        event.preventDefault();
		setError("");
		setLoading(true);
		try {
			const response = await fetch(
				"https://api.escuelajs.co/api/v1/auth/login",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email, password }),
				}
			);
			if (!response.ok) {
				throw new Error("Invalid credentials.");
			}
			const data = await response.json();
			localStorage.setItem("access_token", data.access_token);
            alert("Login Successful!")
		} catch (error) {
			setError(error.message || "Login failed");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className="flex flex-col m-2 gap-2">
				<input
					type="email"
					value={email}
                    onChange={(e) => setEmail(e.target.value)}
					placeholder="Enter your email"
					className="border"
				/>
				<input
					type="password"
					value={password}
                    onChange={(e) => setPassword(e.target.value)}
					placeholder="Enter your password"
					className="border"
				/>
				<button type="submit" className="border bg-amber-400 text-black">
					Submit
				</button>
			</form>
		</div>
	);
}

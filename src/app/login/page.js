"use client";
import { useState } from "react";

export default function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	// Platzi Fake Store API login endpoint
	// Docs: https://fakeapi.platzi.com/docs/authentication
	const handleSubmit = async (e) => {
		e.preventDefault();
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
				throw new Error("Invalid credentials");
			}

			const data = await response.json();
			// data contains: access_token, refresh_token
			// You can store the token in localStorage or cookies as needed
			localStorage.setItem("access_token", data.access_token);
			// Redirect or update UI as needed
			alert("Login successful!");
		} catch (err) {
			setError(err.message || "Login failed");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div
			style={{
				maxWidth: 400,
				margin: "40px auto",
				padding: 24,
				border: "1px solid #ccc",
				borderRadius: 8,
			}}
		>
			<h2>Login</h2>
			<form onSubmit={handleSubmit}>
				<div style={{ marginBottom: 16 }}>
					<label>Email</label>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						style={{ width: "100%", padding: 8, marginTop: 4 }}
					/>
				</div>
				<div style={{ marginBottom: 16 }}>
					<label>Password</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						style={{ width: "100%", padding: 8, marginTop: 4 }}
					/>
				</div>
				{error && <div style={{ color: "red", marginBottom: 16 }}>{error}</div>}
				<button
					type="submit"
					disabled={loading}
					style={{ width: "100%", padding: 10 }}
				>
					{loading ? "Logging in..." : "Login"}
				</button>
			</form>
			<div style={{ marginTop: 16, fontSize: 12, color: "#888" }}>
				Test with: <br />
				<b>email:</b> john@mail.com <br />
				<b>password:</b> changeme
			</div>
		</div>
	);
}

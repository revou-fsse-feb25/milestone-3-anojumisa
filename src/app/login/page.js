"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		const res = await signIn("credentials", {
			email,
			password,
			redirect: false,
		});
		if (res.ok) {
			router.push("/");
		} else {
			setError("Invalid credentials");
		}
	};

	return (
		<main className="max-w-md mx-auto mt-10">
			<h1 className="text-2xl mb-4">Login</h1>
			<form onSubmit={handleSubmit} className="flex flex-col gap-4">
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className="p-2 border rounded"
					required
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="p-2 border rounded"
					required
				/>
				<button type="submit" className="bg-amber-400 p-2 rounded">
					Login
				</button>
				{error && <p className="text-red-500">{error}</p>}
			</form>
		</main>
	);
}

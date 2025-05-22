"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
	const router = useRouter();

	useEffect(() => {
		const token =
			typeof window !== "undefined" && localStorage.getItem("access_token");
		if (!token) {
			router.replace("/login");
		}
	}, [router]);

	const handleLogout = () => {
		localStorage.removeItem("access_token");
		router.replace("/login");
	};

	return (
		<div>
			<h2>Dashboard</h2>
			<button onClick={handleLogout} style={{ marginTop: 20 }}>
				Logout
			</button>
		</div>
	);
}

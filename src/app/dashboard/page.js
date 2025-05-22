'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react"

export default function Dashboard() {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("access_token");
        if (!token) {
            router.replace("/login");
        }
    }, [router])

    return (
        <div>Hello World</div>
    )
}
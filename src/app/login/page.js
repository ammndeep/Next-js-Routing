"use client"
import Link from 'next/link';
import React from 'react'
import { useRouter } from 'next/navigation';

const page = () => {
    const router = useRouter();

    return (
        <div>
            <h1>Login Page</h1>
            <Link href="/">Back to Home</Link><br /><br />
            <button onClick={() => router.push("/login/loginstudent")}>Go Login Student</button><br /><br />
            <button onClick={() => router.push("/login/loginteacher")}>Go Login Teacher</button>
        </div>
    )
}

export default page

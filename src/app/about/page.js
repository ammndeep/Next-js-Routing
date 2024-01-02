"use client"
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

const page = () => {
    const router = useRouter();
    return (
        <div>
            <h1>About Page</h1>
            <Link href="/">Back to Home</Link>
            <button onClick={() => router.push('/about/aboutcollege')}>About College</button><br /><br />
            <button onClick={() => router.push('/about/aboutstudent')}>About Student</button>
        </div>
    )
}

export default page

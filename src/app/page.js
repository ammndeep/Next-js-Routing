"use client"
import Link from 'next/link'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  const navigate = (url) => {
    router.push(url);
  }
  return (
    <main>
      <h1>Nested Routing</h1>
      <Link href="/login">Go to login Page</Link>
      <br />
      <br />
      <Link href="/about">Go to About Page
      </Link>
      <br />
      <br />
      <button onClick={() => navigate("/login")}>Go to Login Page</button>
      <button onClick={() => navigate("/about")}>Go to About Page</button>

    </main>
  )
}

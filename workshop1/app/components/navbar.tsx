'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
export default function NavBar() {
    const router = useRouter()

    return (
        <div className="flex flex-row gap-24">
            <button onClick={() => { router.push('/') }}>
                <div>
                    Home
                </div>
            </button>
            <Link href="/about">
                About Me
            </Link>
            <button onClick={() => { router.push('/resume') }}>
                <div>
                    Resume
                </div>
            </button>
        </div>
    )
}
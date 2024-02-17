'use client'
import Link from 'next/link'
export default function NavBar() {
    return (
        <div className="flex flex-row justify-between px-20 text-xl py-6 bg-gray-300">
            <Link href="/">
                Home
            </Link>
            <div className="flex flex-row gap-24">
                <Link href="/projects">
                    Projects
                </Link>
                <Link href="/about">
                    About Me
                </Link>
                <Link href="/resume">
                    Resume
                </Link>
            </div>
        </div>
    )
}
'use client'
import Link from 'next/link'
export default function NavBar() {
    return (
        <div className="flex flex-row justify-between px-20 text-xl py-2 bg-gray-300 rounded-3xl">
            <Link href="/" className='flex w-1/12 h-12 rounded-lg transition-all items-center justify-center hover:bg-1919 hover:text-white'>
                Home
            </Link>
            <div className="flex flex-row gap-24">
                <Link href="/projects" className='flex w-1/3 h-12 px-4 rounded-lg transition-all items-center justify-center hover:bg-1919 hover:text-white'>
                    Projects
                </Link>
                <Link href="/about" className='flex text-nowrap w-1/3 h-12 px-4 rounded-lg transition-all items-center hover:bg-1919 hover:text-white'>
                    About Me
                </Link>
                <Link href="/resume" className='flex w-1/3 h-12 px-4 rounded-lg transition-all items-center justify-center hover:bg-1919 hover:text-white'>
                    Resume
                </Link>
            </div>
        </div>
    )
}
import Image from 'next/image'
import InfoCard from "../components/InfoCard"

import img from "../../public/Portrait_Placeholder.png"
export default function About() {
    return (
        <div className="flex flex-col gap-10 h-auto bg-red-200 p-8">
            <div className="text-8xl">
                👋 Hey, welcome to the <br />
                W-24 Dev About-Me Page.
            </div>
            <div className='flex flex-row gap-10 h-80 justify-between text-right bg-gray-200'>
                <div className='flex items-center'>
                    <Image alt="Portrait of _____" src={img} width={300} height={300} />
                </div>
                <div className='flex flex-col gap-4 bg-red-400 w-1/2 items-center justify-center text-4xl px-4'>
                    <div className='bg-red-200'>
                        My name is _____, a rising <u>developer</u> and <u>designer</u>,
                        currently at <u><a target="_blank" href="https://www.ucla.edu">@UCLA</a></u>.
                        <br />
                    </div>
                    <div className='flex flex-row justify-between px-4 bg-red-200 w-full'>
                        <div></div>
                        <div className='w-1/3 flex flex-row justify-between items-center'>
                            <text className='text-lg'>
                                Read more
                            </text>
                            <button className='w-1/2 bg-red-300'>
                                ->
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-20 h-80 flex flex-row justify-between bg-gray-200">
                <InfoCard />
                <InfoCard />
                <InfoCard />
            </div>
        </div >
    )
}
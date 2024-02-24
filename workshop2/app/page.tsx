import Image from "next/image";
import Link from "next/link";

import front_graphic from "../public/laptop.svg"


export default function Home() {
  return (
    <main className="">
      <div className="mt-48 relative flex flex-row justify-between items-center px-12">
        <div className="px-20 bg-1919 bg-opacity-75 rounded-3xl w-2/3 h-auto text-9xl items-center py-2 z-10 font-thin text-white border-2 border-white">
          👋 WORLD.
          DEV-TRACK W23
        </div>
        <Image
          src={front_graphic}
          alt="Front-page graphic with laptop"
          className="absolute pointer-events-none z-1 h-screen"
        />
      </div>
      <div className="bg-white w-screen mt-60 h-screen">
        hello world
      </div>
    </main >
  );
}

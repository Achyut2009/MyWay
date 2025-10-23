'use client';
import Link from "next/link";

export default function Footer(){
    return(
        <div className="flex flex-row p-5 text-md justify-around">
            <div className="">2025 myway. All rights reserverd</div>
            <div className=""><Link href="/">Made by Achyut Paliwal</Link></div>
        </div>
    );
}
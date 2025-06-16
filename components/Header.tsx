"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ThemeChanger from "./ThemeChanger";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Header() {
    const pathname = usePathname();
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <header className="flex items-center justify-between py-2 w-full" suppressHydrationWarning>            
        <Link href="/" className="text-lg font-bold transition-all duration-300 ease-out">
                <Image 
                    src="/liamSig.svg" 
                    alt="Liam Ma" 
                    width={200} 
                    height={40}
                    className={`transition-all duration-300 ease-out ${mounted && theme === "dark" ? "invert" : "hover:brightness-110 hover:contrast-110"}`}
                />
            </Link>
            <nav className="flex items-center space-x-4"> 
                <Link 
                    href="/projects" 
                    className={`transition-all duration-200 font-medium ${
                        pathname === "/projects" 
                            ? "border-b-2 border-current pb-1" 
                            : ""
                    }`}
                >
                    Projects
                </Link>               
                <Link 
                    href="/notes" 
                    className={`transition-all duration-200 font-medium ${
                        pathname === "/notes" 
                            ? "border-b-2 border-current pb-1" 
                            : ""
                    }`}
                >
                    Notes
                </Link>

                <ThemeChanger/>
            </nav>
        </header>
    )
}

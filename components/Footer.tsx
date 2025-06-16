"use client";

import Link from "next/link";
import { FiTwitter, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Footer(){
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const socialLinks = [
        {
            name: "Twitter",
            href: "https://x.com/LiamMa6_",
            icon: FiTwitter,
            external: true
        },
        {
            name: "GitHub", 
            href: "https://github.com/liamma06",
            icon: FiGithub,
            external: true
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/liam-tl/", 
            icon: FiLinkedin,
            external: true
        },
        {
            name: "Email",
            href: "mailto:liam.jbr.ma@gmail.com",
            icon: FiMail,
            external: false
        }
    ];    return (
        <footer className="flex items-center justify-between py-8 w-full" suppressHydrationWarning>
            <div className={`text-sm ${mounted && theme === "dark" ? "text-gray-400" : "text-zinc-700"}`}>
                &copy; {new Date().getFullYear()} Liam Ma
            </div>

            <div className="flex items-center gap-2">
                {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                        <Link 
                            key={link.name}
                            href={link.href}
                            {...(link.external && { 
                                target: "_blank", 
                                rel: "noopener noreferrer" 
                            })}
                            className="p-2 rounded-full hover:rotate-12 hover:scale-110 transform transition-all duration-200 ease-out"
                            aria-label={link.name}
                        >                        
                            <Icon className="h-5 w-5" />
                        </Link>
                    );                
                })}
            </div>
        </footer>
    )
}
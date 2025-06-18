"use client";

import Link from "next/link";
import { FiTwitter, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer(){

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
    ];    
    return (
        <footer className="flex items-center justify-between py-8 w-full" suppressHydrationWarning>
            <div className="text-sm text-zinc-700 dark:text-zinc-400">
                &copy; {new Date().getFullYear()} Liam Ma
            </div>

            <div className="flex items-center gap-3">
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
                            className="p-2 rounded-full hover:rotate-12 hover:scale-110 transform transition-all duration-200 ease-out text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
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
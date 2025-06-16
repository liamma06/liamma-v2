import Link from "next/link";
import { ReactNode } from "react";

interface AnimatedLinkProps {
  href: string;
  children: ReactNode; // Changed from string to ReactNode
  className?: string;
  external?: boolean;
}

export default function AnimatedLink({ 
  href, 
  children, 
  className = "", 
  external = false 
}: AnimatedLinkProps) {
  const linkProps = external 
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link 
      href={href} 
      className={`underline font-medium ${className}`}
      {...linkProps}
    >
      <span>{children}</span>
      <svg viewBox="0 0 13 20">
        <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
      </svg>
    </Link>
  );
}

'use client'

import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from "next/image"

export default function ThemeChanger() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() =>  setMounted(true), [])

  if (!mounted) return (
    <div className="p-2 rounded-full">
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={20}
        height={20}
        sizes="20x20"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    </div>
  )
  if (resolvedTheme === 'dark') {
    return (
      <button 
        onClick={() => setTheme('light')} 
        className="p-2 rounded-lg hover:rotate-12 hover:scale-110 transform transition-all duration-200 ease-out"
        aria-label="Switch to light mode"
      >
        <FiSun className="h-5 w-5" />
      </button>
    )
  }

  if (resolvedTheme === 'light') {
    return (
      <button 
        onClick={() => setTheme('dark')} 
        className="p-2 rounded-lg hover:rotate-12 hover:scale-110 transform transition-all duration-200 ease-out"
        aria-label="Switch to dark mode"
      >
        <FiMoon className="h-5 w-5" />
      </button>
    )
  }
}
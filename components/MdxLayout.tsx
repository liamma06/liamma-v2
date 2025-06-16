'use client'

import { ReactNode } from 'react'
import { MDXProvider } from '@mdx-js/react'
import { useMDXComponents } from '@/mdx-components'

interface MdxLayoutProps {
  children: ReactNode
}

export default function MdxLayout({ children }: MdxLayoutProps) {
  const components = useMDXComponents({})
  
  return (
    <MDXProvider components={components}>
      <article className="w-full min-w-0 prose prose-slate dark:prose-invert max-w-none [&>*]:mb-3 [&>h1]:mb-4 [&>h1]:mt-0 [&>h2]:mb-3 [&>h2]:mt-5 [&>h3]:mb-2 [&>h3]:mt-4 [&>p]:mb-3 [&>ul]:mb-3 [&>ol]:mb-3 [&>li]:mb-1 [&>blockquote]:mb-4">
        {children}
      </article>
    </MDXProvider>
  )
}
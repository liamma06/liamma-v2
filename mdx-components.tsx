import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allow customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-50">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">{children}</h2>,
    p: ({ children }) => <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{children}</p>,
    ...components,
  }
}

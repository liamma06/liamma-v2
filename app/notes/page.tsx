import fs from "fs";
import path from "path";
import AnimatedLink from "../../components/AnimatedLink";

interface PostMeta {
  title: string;
  date: string;
  summary?: string;
  slug: string;
}

export default async function NotesPage() {
    // Path to the notes directory
    const notesDirectory = path.join(process.cwd(), "app/notes");

    try {
        // Read all entries (files and folders) in the `notes` directory
        const entries = fs.readdirSync(notesDirectory, { withFileTypes: true });

        // Filter for directories only (excluding page.tsx)
        const folderNames = entries
        .filter((entry) => entry.isDirectory())
        .map((entry) => entry.name);    // For each folder, dynamically import the `page.mdx` file and extract its meta
        const posts: PostMeta[] = await Promise.all(
            folderNames.map(async (folderName): Promise<PostMeta> => {
                try {
                    console.log(`Attempting to import: ./${folderName}/page.mdx`);
                    const { meta } = await import(`./${folderName}/page.mdx`);
                    console.log(`Successfully imported meta for ${folderName}:`, meta);
                    return { ...meta, slug: folderName };
                } catch (error) {
                    console.error(`Error importing ${folderName}:`, error);
                    // If MDX file doesn't exist, create a fallback
                    return {
                        title: folderName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                        date: new Date().toISOString(),
                        slug: folderName
                    };
                }
            })
        );    
        
        // Sort posts by date (most recent first)
        posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        // Group posts by month
        const postsByMonth = posts.reduce((acc, post) => {
            const date = new Date(post.date);
            const monthKey = date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
            });
            
            if (!acc[monthKey]) {
                acc[monthKey] = [];
            }
            acc[monthKey].push(post);
            return acc;
        }, {} as Record<string, PostMeta[]>);        
        return (
            <div className="flex flex-col w-full">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">Notes</h1>
                    <p className="text-zinc-600 dark:text-zinc-400">Trying to be more intentional with choices</p>
                </div>
                
                <div className="space-y-8">
                {Object.entries(postsByMonth).map(([month, monthPosts]) => (
                    <div key={month}>
                    {/* Month Header */}
                    <div className="flex items-center gap-2 mb-2">
                        <span className="">&gt;</span>
                        <h2 className="text-lg font-medium text-zinc-700 dark:text-zinc-300">
                            {month}
                        </h2>
                    </div>

                    {/* Notes for this month */}
                    <div className="ml-6 space-y-2">
                        {monthPosts.map((post) => (
                            <div key={post.slug} className="flex items-center justify-between">
                                <AnimatedLink 
                                    href={`/notes/${post.slug}`}
                                    className="font-medium text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-300"
                                >
                                    / {post.title}
                                </AnimatedLink>
                                {post.summary && (
                                    <span className="text-sm text-zinc-600 dark:text-zinc-400 font-normal">
                                        {post.summary}
                                    </span>
                                )}
                            </div>                        ))}
                    </div>
                    </div>
                ))}
                </div>
            </div>
        );
    } catch (error) {    // Fallback if notes directory doesn't exist or is empty        return (
        <div className="flex flex-col w-full">
            <div className="text-center py-12">
            <h1 className="text-2xl font-medium mb-4">Notes</h1>
            <p className="text-zinc-600 dark:text-zinc-400">
                Notes directory not found. Create some notes to get started!
            </p>
            </div>
        </div>
  }
}
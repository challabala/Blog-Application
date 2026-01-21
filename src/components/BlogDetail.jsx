/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query"
import { fetchBlogById } from "@/api/blogs"
import Footer from "@/components/Footer"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"

export default function BlogDetail({ blogId }) {
  const { data: blog, isLoading, error } = useQuery({
    queryKey: ["blog", blogId],
    queryFn: () => fetchBlogById(blogId),
    enabled: !!blogId
  })

  // ... (empty state remains same, or can be improved)
  if (!blogId) {
    return (
      <div className="flex h-full flex-col items-center justify-center text-muted-foreground p-8 text-center space-y-6 bg-gradient-to-br from-background to-secondary/50">
        <div className="p-6 bg-primary/5 rounded-full ring-1 ring-primary/20">
            <div className="text-6xl animate-pulse">📝</div>
        </div>
        <div className="space-y-2 max-w-sm">
            <h2 className="text-3xl font-bold text-foreground">Select a blog to read</h2>
            <p className="text-lg">Choose a blog from the list on the left to view its details here.</p>
        </div>
      </div>
    )
  }

  if (isLoading) return (
      <div className="p-8 space-y-6">
          <Skeleton className="w-full h-80 rounded-xl" />
          <Skeleton className="h-10 w-3/4 rounded" />
          <Skeleton className="h-5 w-1/2 rounded" />
          <div className="space-y-3 mt-12">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
          </div>
      </div>
  )
  if (error) return <div className="p-8 text-destructive bg-destructive/10 rounded-lg m-4 border border-destructive/20">Error loading details</div>

  return (
    <div className="h-full overflow-y-auto p-4 md:p-10 custom-scrollbar bg-background selection:bg-primary selection:text-white">
      <div className="max-w-4xl mx-auto min-h-[calc(100vh-200px)] flex flex-col">
        {blog.coverImage && (
            <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl border bg-muted aspect-video group">
                <img 
                src={blog.coverImage} 
                alt={blog.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {e.target.style.display='none'}}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
        )}
        
        <div className="mb-10 space-y-6 flex-1">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground leading-[1.1]">{blog.title}</h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-y border-border/50 py-6">
                <div className="flex gap-2">
                    {blog.category.map((cat) => (
                        <Badge key={cat} className="px-3 py-1 bg-primary text-primary-foreground rounded-full font-bold text-xs uppercase tracking-wide shadow-sm shadow-primary/20 hover:bg-primary/90">
                            {cat}
                        </Badge>
                    ))}
                </div>
                <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                <span>
                    {new Date(blog.date).toLocaleDateString("en-US", {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </span>
            </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/80">
            <p className="lead text-xl md:text-2xl font-medium text-foreground mb-8 leading-relaxed font-serif italic border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r-lg">
                {blog.description}
            </p>
            <div className="whitespace-pre-wrap leading-7 md:leading-8 text-base md:text-lg font-reading text-foreground/90">
                {blog.content}
            </div>
        </div>
        
        <div className="mt-16 pt-10 border-t flex justify-center mb-8">
            <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-widest">End of article</p>
                <div className="text-3xl animate-bounce">👋</div>
            </div>
        </div>
        
        <Footer />
      </div>
    </div>
  )
}

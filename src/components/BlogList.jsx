/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query"
import { fetchBlogs } from "@/api/blogs"
import BlogCard from "./BlogCard"
import CreateBlogForm from "./CreateBlogForm"
import { Skeleton } from "@/components/ui/skeleton"

export default function BlogList({ onSelectBlog, selectedId }) {
  const { data: blogs, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs
  })

  // Loading Skeleton
  if (isLoading) {
      return (
          <div className="flex flex-col h-full space-y-4 p-4">
              <Skeleton className="h-12 w-full" />
              {[1, 2, 3].map(i => (
                  <Skeleton key={i} className="h-32 w-full" />
              ))}
          </div>
      )
  }
  
  if (error) return <div className="p-4 text-destructive">Error loading blogs. Note: Make sure json-server is running on port 3001.</div>

  return (
    <div className="flex flex-col h-full space-y-4 p-4 overflow-y-auto custom-scrollbar">
      <CreateBlogForm />
      <div className="space-y-4 pb-4">
        {blogs && blogs.slice().reverse().map(blog => (
            <BlogCard 
                key={blog.id} 
                blog={blog} 
                onClick={onSelectBlog} 
                isSelected={selectedId === blog.id}
            />
        ))}
        {blogs && blogs.length === 0 && <p className="text-center text-muted-foreground py-8">No blogs found. Create one!</p>}
      </div>
    </div>
  )
}

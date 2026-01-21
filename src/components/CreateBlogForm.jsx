/* eslint-disable react/prop-types */
import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createBlog } from "@/api/blogs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, PlusCircle, MinusCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export default function CreateBlogForm() {
  const queryClient = useQueryClient()
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    content: "",
    coverImage: ""
  })

  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] })
      setFormData({
        title: "",
        category: "",
        description: "",
        content: "",
        coverImage: ""
      })
      setIsOpen(false)
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const newBlog = {
      ...formData,
      category: formData.category.split(",").map(c => c.trim()).filter(Boolean),
      date: new Date().toISOString()
    }
    mutation.mutate(newBlog)
  }

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <Card className={cn("border border-dashed shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-md bg-white/50 backdrop-blur-sm", isOpen ? "border-primary ring-1 ring-primary/10" : "border-border")}>
      <CardHeader className="py-4 cursor-pointer hover:bg-primary/5 transition-colors rounded-t-lg" onClick={() => setIsOpen(!isOpen)}>
        <CardTitle className="flex items-center justify-between text-base font-semibold text-foreground/80">
          <span className="flex items-center gap-2">
            <PlusCircle className={cn("h-5 w-5 text-primary transition-transform duration-300", isOpen && "rotate-45")} />
            {isOpen ? "Close Editor" : "Write a Blog"}
          </span>
        </CardTitle>
      </CardHeader>
      {isOpen && (
        <CardContent className="animate-accordion-down">
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            {mutation.isError && (
              <div className="p-3 text-sm text-destructive bg-destructive/10 rounded-md border border-destructive/20">
                Failed to create blog: {mutation.error.message}
              </div>
            )}
            <Input 
              placeholder="Blog Title" 
              name="title" 
              value={formData.title} 
              onChange={handleChange} 
              required 
            />
            <Input 
              placeholder="Categories (comma separated, e.g. Tech, Life)" 
              name="category" 
              value={formData.category} 
              onChange={handleChange} 
              required 
            />
            <Input 
              placeholder="Cover Image URL" 
              name="coverImage" 
              value={formData.coverImage} 
              onChange={handleChange} 
            />
            <Textarea 
              placeholder="Short Description" 
              name="description" 
              value={formData.description} 
              onChange={handleChange} 
              required 
            />
            <Textarea 
              placeholder="Full Content" 
              name="content" 
              value={formData.content} 
              onChange={handleChange} 
              required 
              className="min-h-[150px]"
            />
            <Button type="submit" disabled={mutation.isPending} className="w-full">
              {mutation.isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Publish Blog"}
            </Button>
          </form>
        </CardContent>
      )}
    </Card>
  )
}

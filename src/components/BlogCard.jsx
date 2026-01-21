/* eslint-disable react/prop-types */
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function BlogCard({ blog, onClick, isSelected }) {
  const date = new Date(blog.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  return (
    <Card 
      className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/50 ${isSelected ? "border-primary bg-primary/5 shadow-md scale-[1.02]" : "hover:bg-card"}`}
      onClick={() => onClick(blog.id)}
    >
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-2">
            <div className="flex gap-2 flex-wrap">
                {blog.category.map((cat) => (
                    <Badge key={cat} variant="secondary" className="px-2 py-0.5 rounded-full bg-primary/10 text-[10px] font-bold text-primary tracking-wider uppercase hover:bg-primary hover:text-white transition-colors">
                      {cat}
                    </Badge>
                ))}
            </div>
             <span className="text-xs font-medium text-muted-foreground whitespace-nowrap ml-2 bg-secondary px-2 py-1 rounded-md">{date}</span>
        </div>
        <CardTitle className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">{blog.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="line-clamp-2 text-base">{blog.description}</CardDescription>
      </CardContent>
    </Card>
  )
}

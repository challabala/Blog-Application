import { useParams } from "react-router-dom"
import BlogDetail from "@/components/BlogDetail"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

export default function BlogPage() {
  const { id } = useParams()

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-8">
        <Link to="/">
            <Button variant="ghost" className="mb-4 gap-2 pl-0 hover:bg-transparent hover:text-primary">
                <ArrowLeft className="h-4 w-4" /> Back to All Blogs
            </Button>
        </Link>
        <div className="border rounded-xl overflow-hidden shadow-sm bg-card">
            <BlogDetail blogId={id} />
        </div>
      </div>
      <div className="mt-auto">
        {/* Footer is already inside BlogDetail but we might want deeper control or hide it there. 
            For this standalone page, BlogDetail's footer is fine. 
        */}
      </div>
    </div>
  )
}

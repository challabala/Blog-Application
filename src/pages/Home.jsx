import { useState } from "react"
import BlogList from "@/components/BlogList"
import BlogDetail from "@/components/BlogDetail"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function Home() {
  const [selectedId, setSelectedId] = useState(null)

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col h-screen overflow-hidden selection:bg-primary selection:text-white">
       <Navbar />

       <div className="py-12 text-center space-y-3 bg-muted/10 border-b shrink-0">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">CA MONK BLOG</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Stay updated with the latest trends in finance, accounting, and career growth
          </p>
       </div>

       <div className="flex-1 flex overflow-hidden">
          {/* Left Panel */}
          <div className={`
            ${selectedId ? "hidden md:flex" : "flex"} 
            flex-col w-full md:w-[400px] lg:w-[450px] border-r bg-muted/10 h-full
            shadow-[1px_0_20px_0_rgba(0,0,0,0.05)] z-10
          `}>
             <BlogList onSelectBlog={setSelectedId} selectedId={selectedId} />
          </div>

          {/* Right Panel */}
          <div className={`
            ${!selectedId ? "hidden md:flex" : "flex"} 
            flex-1 bg-background relative flex-col h-full overflow-hidden
          `}>
             {selectedId && (
                <div className="md:hidden border-b p-2 flex items-center bg-background/95 backdrop-blur z-10 shrink-0">
                    <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => setSelectedId(null)}
                        className="gap-2"
                    >
                        <ArrowLeft className="h-4 w-4" /> Back to List
                    </Button>
                </div>
             )}
             <BlogDetail blogId={selectedId} />
          </div>
       </div>
    </div>
  )
}

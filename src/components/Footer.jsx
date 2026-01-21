import { Github, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30 py-8 shrink-0">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-sm font-semibold text-foreground">
            © 2025 Blog Application. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with React, Tailwind.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
        
        <div className="flex gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
    
  )
}

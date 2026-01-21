import { Button } from "@/components/ui/button"
import { BookOpen, User } from "lucide-react"

export default function Navbar() {
  const navLinks = [
    { name: "Tools", href: "#" },
    { name: "Practice", href: "#" },
    { name: "Events", href: "#" },
    { name: "Job Board", href: "#" },
    { name: "Points", href: "#" },
  ]

  return (
    <nav className="border-b h-16 flex items-center px-6 bg-background/80 backdrop-blur-md shrink-0 z-50 sticky top-0 supports-[backdrop-filter]:bg-background/60">
      {/* Logo */}
      <div className="flex items-center gap-2 mr-8">
        <div className="p-2 bg-primary/10 rounded-lg">
          <BookOpen className="h-6 w-6 text-primary" />
        </div>
        <span className="text-xl font-black tracking-tight bg-gradient-to-r from-primary to-violet-400 bg-clip-text text-transparent hidden md:block">
          Blog Application
        </span>
      </div>

      {/* Nav Links - Desktop */}
      <div className="hidden md:flex items-center gap-1 flex-1">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-full transition-all duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Profile */}
      <div className="ml-auto">
        <Button variant="default" className="rounded-full px-6 shadow-lg shadow-primary/20">
          <User className="h-4 w-4 mr-2" />
          Profile
        </Button>
      </div>
    </nav>
  )
}

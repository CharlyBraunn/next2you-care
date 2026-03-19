"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/marketing/Logo"
import { 
  LayoutDashboard, 
  Search, 
  Briefcase, 
  Calendar, 
  Wallet, 
  MessageSquare, 
  User,
  LogOut
} from "lucide-react"

const menuItems = [
  { icon: LayoutDashboard, label: "Tableau de bord", href: "/provider" },
  { icon: Search, label: "Missions disponibles", href: "/provider/available" },
  { icon: Briefcase, label: "Mes missions", href: "/provider/my-missions" },
  { icon: Calendar, label: "Calendrier", href: "/provider/calendar" },
  { icon: Wallet, label: "Revenus", href: "/provider/earnings" },
  { icon: MessageSquare, label: "Messages", href: "/provider/messages" },
  { icon: User, label: "Mon Profil", href: "/provider/profile" },
]

export const ProviderSidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r flex flex-col z-50">
      <div className="p-6">
        <Logo className="scale-90 origin-left" />
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
               "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-2xl transition-all",
               "hover:bg-accent/10 hover:text-accent-foreground",
               "text-muted-foreground"
            )}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t">
        <button className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-destructive hover:bg-destructive/10 w-full rounded-2xl transition-all">
          <LogOut className="w-5 h-5" />
          Déconnexion
        </button>
      </div>
    </aside>
  )
}

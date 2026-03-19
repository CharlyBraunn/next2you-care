"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/marketing/Logo"
import { 
  BarChart2, 
  PlusCircle, 
  ClipboardList, 
  Car, 
  Users, 
  MessageSquare, 
  CreditCard, 
  Settings,
  LogOut
} from "lucide-react"

const menuItems = [
  { icon: BarChart2, label: "Tableau de bord", href: "/client" },
  { icon: PlusCircle, label: "Nouvelle mission", href: "/client/missions/new" },
  { icon: ClipboardList, label: "Missions", href: "/client/missions" },
  { icon: Car, label: "Véhicules", href: "/client/vehicles" },
  { icon: Users, label: "Prestataires", href: "/client/providers" },
  { icon: MessageSquare, label: "Messages", href: "/client/messages" },
  { icon: CreditCard, label: "Facturation", href: "/client/billing" },
  { icon: Settings, label: "Paramètres", href: "/client/settings" },
]

export const Sidebar = () => {
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
               "hover:bg-primary/5 hover:text-primary",
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

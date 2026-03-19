import { Sidebar } from "@/components/dashboard/Sidebar"
import { Bell, Search, User } from "lucide-react"
import { Input } from "@/components/ui/Input"

export default function ClientDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-muted/20">
      <Sidebar />
      <div className="pl-64">
        {/* TopBar */}
        <header className="h-20 bg-white border-b sticky top-0 z-40 px-8 flex items-center justify-between">
           <div className="relative w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input className="pl-10 h-10 border-none bg-muted/50 rounded-xl" placeholder="Rechercher une mission, un véhicule..." />
           </div>
           
           <div className="flex items-center gap-4">
              <button className="relative p-2 rounded-xl bg-muted/50 text-muted-foreground hover:bg-muted transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white"></span>
              </button>
              <div className="flex items-center gap-3 pl-4 border-l">
                 <div className="text-right hidden sm:block">
                    <p className="text-sm font-bold">Nicolas Durand</p>
                    <p className="text-[10px] text-primary uppercase font-bold tracking-widest">Client Pro</p>
                 </div>
                 <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-bold shadow-lg shadow-primary/20">
                    ND
                 </div>
              </div>
           </div>
        </header>

        <main className="p-8 pb-20">
          {children}
        </main>
      </div>
    </div>
  )
}

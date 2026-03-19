import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Search, Filter, MoreVertical, MapPin, Calendar, User, Eye } from "lucide-react"

export default function MissionsListPage() {
  const missions = [
    { id: "M-482", vehicle: "Peugeot 208", plate: "AA-123-BB", type: "Intérieur Complet", date: "19 Mars 2026", provider: "Charly Braunn", status: "En cours", price: "45€" },
    { id: "M-481", vehicle: "Tesla Model 3", plate: "CC-456-DD", type: "Extérieur", date: "19 Mars 2026", provider: "En attente", status: "Publiée", price: "35€" },
    { id: "M-480", vehicle: "VW Golf 8", plate: "EE-789-FF", type: "Préparation loc.", date: "18 Mars 2026", provider: "Sophie L.", status: "Terminée", price: "40€" },
    { id: "M-479", vehicle: "Fiat 500", plate: "GG-012-HH", type: "Intérieur Complet", date: "17 Mars 2026", provider: "Thomas R.", status: "Litige", price: "45€" },
  ]

  const statusColors: Record<string, string> = {
    "En cours": "bg-blue-50 text-blue-600",
    "Publiée": "bg-accent/20 text-accent-foreground",
    "Terminée": "bg-primary/10 text-primary",
    "Litige": "bg-destructive/10 text-destructive",
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Vos <span className="text-primary italic">Missions</span></h1>
          <p className="text-muted-foreground">Gérez et suivez l&apos;historique de vos interventions.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" />
            Filtrer
          </Button>
          <Button className="gap-2" asChild>
            <a href="/client/missions/new">Nouvelle Mission</a>
          </Button>
        </div>
      </div>

      <Card className="border-none shadow-sm overflow-hidden">
        <div className="p-4 border-b flex flex-col md:flex-row gap-4 items-center justify-between bg-muted/20">
           <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input className="pl-10 bg-white" placeholder="Chercher une plaque, un ID..." />
           </div>
           <div className="flex gap-2 text-sm font-medium">
             {["Toutes", "En cours", "Terminées"].map((f) => (
               <button key={f} className={`px-4 py-2 rounded-xl transition-colors ${f === "Toutes" ? "bg-white shadow-sm" : "hover:bg-white/50"}`}>
                 {f}
               </button>
             ))}
           </div>
        </div>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="text-xs uppercase tracking-widest text-muted-foreground bg-muted/30">
                <tr>
                  <th className="px-6 py-4 font-bold">Mission & Véhicule</th>
                  <th className="px-6 py-4 font-bold">Type</th>
                  <th className="px-6 py-4 font-bold">Prestataire</th>
                  <th className="px-6 py-4 font-bold">Statut</th>
                  <th className="px-6 py-4 font-bold">Prix</th>
                  <th className="px-6 py-4 font-bold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y text-sm">
                {missions.map((m, i) => (
                  <tr key={i} className="hover:bg-muted/20 transition-colors group">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center font-bold text-[10px] group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                           {m.id}
                        </div>
                        <div>
                           <p className="font-bold">{m.vehicle}</p>
                           <p className="text-[10px] text-muted-foreground font-mono">{m.plate}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-muted-foreground font-medium">{m.type}</td>
                    <td className="px-6 py-5">
                       <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-muted-foreground" />
                          <span className={m.provider === "En attente" ? "italic text-muted-foreground" : "font-medium"}>
                            {m.provider}
                          </span>
                       </div>
                    </td>
                    <td className="px-6 py-5">
                       <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${statusColors[m.status] || 'bg-muted'}`}>
                          {m.status}
                       </span>
                    </td>
                    <td className="px-6 py-5 font-bold">{m.price}</td>
                    <td className="px-6 py-5">
                       <div className="flex gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg hover:bg-primary/10 hover:text-primary">
                             <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg">
                             <MoreVertical className="w-4 h-4" />
                          </Button>
                       </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

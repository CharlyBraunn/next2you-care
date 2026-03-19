import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Plus, TrendingUp, Clock, CheckCircle2, AlertCircle, Car, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ClientOverview() {
  const stats = [
    { label: "Missions en cours", value: "12", icon: Clock, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Terminées (30j)", value: "48", icon: CheckCircle2, color: "text-primary", bg: "bg-primary/10" },
    { label: "Véhicules actifs", value: "24", icon: Car, color: "text-purple-600", bg: "bg-purple-50" },
    { label: "Dépenses estimés", value: "2 450€", icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-50" },
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Bonjour, Nicolas.</h1>
          <p className="text-muted-foreground">Voici ce qu&apos;il se passe pour votre flotte aujourd&apos;hui.</p>
        </div>
        <Button className="gap-2 shadow-lg shadow-primary/20">
          <Plus className="w-4 h-4" />
          Nouvelle Mission
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className={`${stat.bg} ${stat.color} p-3 rounded-2xl`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                  +12% <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                <p className="text-2xl font-black mt-1">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Missions */}
        <Card className="lg:col-span-2 border-none shadow-sm pb-6">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Missions récentes</CardTitle>
              <CardDescription>Vos 5 dernières interventions.</CardDescription>
            </div>
            <Button variant="ghost" className="text-xs font-bold text-primary">Voir tout</Button>
          </CardHeader>
          <CardContent className="p-0">
             <div className="divide-y">
                {[
                  { id: "M-482", vehicle: "Peugeot 208 (AA-123-BB)", provider: "Charly B.", status: "En cours", time: "Il y a 2h" },
                  { id: "M-481", vehicle: "Tesla Model 3 (CC-456-DD)", provider: "Sophie L.", status: "En route", time: "Il y a 3h" },
                  { id: "M-480", vehicle: "VW Golf 8 (EE-789-FF)", provider: "Thomas R.", status: "Terminé", time: "Hier" },
                ].map((mission, i) => (
                  <div key={i} className="px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center font-bold text-xs text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                        {mission.id.split('-').pop()}
                      </div>
                      <div>
                        <p className="text-sm font-bold">{mission.vehicle}</p>
                        <p className="text-xs text-muted-foreground">{mission.provider} • {mission.time}</p>
                      </div>
                    </div>
                    <div className={cn(
                       "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest",
                       mission.status === "Terminé" ? "bg-primary/10 text-primary" : "bg-blue-50 text-blue-600"
                    )}>
                      {mission.status}
                    </div>
                  </div>
                ))}
             </div>
          </CardContent>
        </Card>

        {/* Alerts / Context */}
        <div className="space-y-6">
           <Card className="border-none shadow-sm bg-primary text-white p-6 rounded-3xl relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                 <h4 className="font-bold text-xl">Passez au Plan Pro</h4>
                 <p className="text-sm opacity-80 leading-relaxed">Débloquez les analyses avancées et la gestion multi-utilisateurs.</p>
                 <Button size="sm" variant="secondary" className="w-full font-bold">En savoir plus</Button>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-10">
                 <TrendingUp className="w-24 h-24" />
              </div>
           </Card>
           
           <Card className="border-none shadow-sm p-6 space-y-4">
              <h4 className="font-bold">Urgent</h4>
              <div className="p-4 rounded-2xl bg-destructive/10 border border-destructive/20 flex gap-4">
                 <AlertCircle className="w-5 h-5 text-destructive shrink-0" />
                 <div>
                    <p className="text-sm font-bold text-destructive">Signalement Incident</p>
                    <p className="text-xs text-muted-foreground mt-1">Rayure signalée sur le véhicule AB-999-ZZ par le prestataire.</p>
                 </div>
              </div>
           </Card>
        </div>
      </div>
    </div>
  )
}

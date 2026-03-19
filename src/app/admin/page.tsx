import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Users, Briefcase, AlertCircle, ShieldCheck, Activity, TrendingUp } from "lucide-react"

export default function AdminOverview() {
  const stats = [
    { label: "Utilisateurs totaux", value: "1,240", icon: Users, color: "text-blue-600" },
    { label: "Missions (Mois)", value: "458", icon: Briefcase, color: "text-primary" },
    { label: "Litiges ouverts", value: "3", icon: AlertCircle, color: "text-destructive" },
    { label: "CA Plateforme", value: "12,450€", icon: TrendingUp, color: "text-emerald-600" },
  ]

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-extrabold tracking-tight">Espace <span className="text-primary italic">Admin</span></h1>
        <div className="flex gap-2">
           <Button variant="outline" size="sm">Logs système</Button>
           <Button size="sm">Modération</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <Card key={i} className="border-none shadow-sm">
            <CardContent className="p-6 flex items-center gap-4">
              <div className={`${s.color} bg-muted p-3 rounded-2xl`}>
                <s.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider">{s.label}</p>
                <p className="text-xl font-black">{s.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <Card className="border-none shadow-sm">
            <CardHeader>
               <CardTitle>Dernières inscriptions</CardTitle>
               <CardDescription>Validation requise pour les prestataires.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
               <div className="divide-y">
                  {[
                    { name: "Lucie Bernard", role: "Prestataire", city: "Marseille", status: "En attente" },
                    { name: "Kevin Vasseur", role: "Prestataire", city: "Lille", status: "En attente" },
                    { name: "RentalPlus SAS", role: "Client Pro", city: "Lyon", status: "Validé" },
                  ].map((u, i) => (
                    <div key={i} className="px-6 py-4 flex items-center justify-between">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center font-bold text-xs">{u.name.substring(0, 2).toUpperCase()}</div>
                          <div>
                             <p className="text-sm font-bold">{u.name}</p>
                             <p className="text-xs text-muted-foreground">{u.role} • {u.city}</p>
                          </div>
                       </div>
                       <div className="flex gap-2">
                          {u.status === "En attente" ? (
                             <>
                               <Button variant="outline" size="sm" className="h-8 text-[10px] uppercase font-bold text-primary border-primary/20 hover:bg-primary/5">Valider</Button>
                               <Button variant="ghost" size="sm" className="h-8 text-[10px] uppercase font-bold text-destructive">Rejeter</Button>
                             </>
                          ) : (
                             <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-1 rounded-full flex items-center gap-1">
                                <ShieldCheck className="w-3 h-3" /> {u.status}
                             </span>
                          )}
                       </div>
                    </div>
                  ))}
               </div>
            </CardContent>
         </Card>

         <Card className="border-none shadow-sm h-fit">
            <CardHeader>
               <CardTitle>Activité Système</CardTitle>
               <CardDescription>Événements réels de la plateforme.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
               <div className="flex gap-4">
                  <div className="bg-emerald-50 text-emerald-600 p-2 rounded-xl h-fit"><Activity className="w-4 h-4" /></div>
                  <div className="text-sm">
                     <p className="font-bold">Mission terminée</p>
                     <p className="text-muted-foreground text-xs">M-480 validée par le client Fleety.</p>
                     <p className="text-[10px] text-muted-foreground mt-1">Il y a 2 min</p>
                  </div>
               </div>
               <div className="flex gap-4 opacity-50">
                  <div className="bg-blue-50 text-blue-600 p-2 rounded-xl h-fit"><Activity className="w-4 h-4" /></div>
                  <div className="text-sm">
                     <p className="font-bold">Nouvelle mission publiée</p>
                     <p className="text-muted-foreground text-xs">Un Peugeot 208 nettoyage complet à Paris 15.</p>
                     <p className="text-[10px] text-muted-foreground mt-1">Il y a 15 min</p>
                  </div>
               </div>
            </CardContent>
         </Card>
      </div>
    </div>
  )
}

import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { CheckCircle2, Clock, MapPin, ChevronRight, Camera, User } from "lucide-react"

export default function MyMissionsPage() {
  const activeMissions = [
    { id: "M-482", title: "Intérieur Complet", car: "Peugeot 208", client: "CityMove", area: "Paris 14", status: "En cours", time: "14:00 - 15:30" },
  ]

  const history = [
    { id: "M-480", title: "Préparation loc.", car: "VW Golf 8", client: "Europcar", date: "Hier", status: "Terminée", price: "40€" },
    { id: "M-478", title: "Nettoyage Extérieur", car: "Tesla Model 3", client: "Turo", date: "17 Mars", status: "Terminée", price: "35€" },
  ]

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-extrabold tracking-tight">Mes <span className="text-accent italic">Missions</span></h1>
      </div>

      <div className="space-y-4">
         <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
           <Clock className="w-4 h-4" /> En cours
         </h2>
         {activeMissions.map((m, i) => (
           <Card key={i} className="border-2 border-accent shadow-lg shadow-accent/5 overflow-hidden">
              <div className="bg-accent text-accent-foreground px-6 py-2 text-[10px] font-black uppercase tracking-widest flex justify-between items-center">
                 <span>Intervention Active</span>
                 <span>{m.id}</span>
              </div>
              <CardContent className="p-6">
                 <div className="flex flex-col md:flex-row justify-between gap-8">
                    <div className="space-y-6 flex-1">
                       <div>
                          <h3 className="text-2xl font-black">{m.title}</h3>
                          <p className="text-muted-foreground">{m.car} pour <span className="font-bold text-foreground">{m.client}</span></p>
                       </div>
                       <div className="flex flex-wrap gap-6">
                          <div className="flex items-center gap-2 text-sm">
                             <MapPin className="w-4 h-4 text-accent" />
                             {m.area}
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                             <Clock className="w-4 h-4 text-accent" />
                             {m.time}
                          </div>
                       </div>
                    </div>
                    <div className="flex flex-col gap-3 min-w-[200px]">
                       <Button className="bg-accent text-accent-foreground font-bold rounded-xl h-12 gap-2">
                          <CheckCircle2 className="w-5 h-5" />
                          Terminer la mission
                       </Button>
                       <Button variant="outline" className="h-12 gap-2 rounded-xl text-xs font-bold">
                          <Camera className="w-5 h-5" />
                          Ajouter photos (3/4)
                       </Button>
                    </div>
                 </div>
              </CardContent>
           </Card>
         ))}
      </div>

      <div className="space-y-4 pt-8">
         <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Historique (30 derniers jours)</h2>
         <Card className="border-none shadow-sm divide-y">
            {history.map((m, i) => (
              <div key={i} className="px-6 py-4 flex items-center justify-between hover:bg-muted/30 transition-colors cursor-pointer group">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center font-bold text-[10px] text-muted-foreground">
                       {m.id}
                    </div>
                    <div>
                       <p className="text-sm font-bold">{m.title}</p>
                       <p className="text-xs text-muted-foreground">{m.car} • {m.date}</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-8">
                    <div className="text-right hidden sm:block">
                       <p className="text-sm font-bold">{m.price}</p>
                       <p className="text-[10px] text-primary uppercase font-bold tracking-widest">Payé</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-1" />
                 </div>
              </div>
            ))}
         </Card>
      </div>
    </div>
  )
}

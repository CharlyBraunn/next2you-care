import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Search, MapPin, Clock, Info, CheckCircle2, Navigation, AlertTriangle } from "lucide-react"

export default function AvailableMissionsPage() {
  const missions = [
    { id: "M-481", title: "Nettoyage Extérieur", car: "Tesla Model 3", plate: "CC-456-DD", area: "Paris 08", price: "35€", distance: "0.8 km", urgency: "Normal" },
    { id: "M-483", title: "Intérieur Complet", car: "Renault Zoe", plate: "GG-012-HH", area: "Paris 16", price: "50€", distance: "2.4 km", urgency: "Élevé" },
    { id: "M-484", title: "Check-up & Niveaux", car: "Peugeot 208", plate: "AA-123-BB", area: "Paris 14", price: "25€", distance: "4.1 km", urgency: "Normal" },
    { id: "M-485", title: "Préparation loc.", car: "VW Golf 8", plate: "EE-789-FF", area: "Paris 02", price: "40€", distance: "1.2 km", urgency: "ASAP" },
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Missions <span className="text-accent italic">Disponibles</span></h1>
          <p className="text-muted-foreground">Trouvez des opportunités autour de vous.</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
         <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input className="pl-10" placeholder="Rechercher par zone ou véhicule..." />
         </div>
         <Button variant="outline" className="gap-2 rounded-xl">
            Proximité (5km)
         </Button>
      </div>

      <div className="space-y-4">
        {missions.map((m, i) => (
          <Card key={i} className="border-none shadow-sm hover:shadow-md transition-all overflow-hidden bg-white">
            <CardContent className="p-0 flex flex-col md:flex-row">
              <div className="p-6 flex-1 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                       <h3 className="font-bold text-lg">{m.title}</h3>
                       {m.urgency === "ASAP" && <span className="px-2 py-0.5 rounded-full bg-destructive/10 text-destructive text-[10px] font-black uppercase tracking-widest flex items-center gap-1"><AlertTriangle className="w-3 h-3" /> ASAP</span>}
                    </div>
                    <p className="text-sm text-muted-foreground">{m.car} • <span className="font-mono text-xs">{m.plate}</span></p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-accent-foreground">{m.price}</p>
                    <p className="text-xs text-muted-foreground">Net à payer</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 pt-4 border-t border-muted/50">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span className="font-medium text-foreground">{m.area}</span> ({m.distance})
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-accent" />
                    Moins de 1h
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Navigation className="w-4 h-4 text-accent" />
                    Accès parking facile
                  </div>
                </div>
              </div>
              <div className="bg-muted/30 md:w-48 p-6 flex flex-col justify-center gap-3 border-t md:border-t-0 md:border-l border-muted/50">
                 <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold rounded-xl shadow-lg shadow-accent/20">
                    Accepter
                 </Button>
                 <Button variant="ghost" className="w-full text-xs font-bold">Détails</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

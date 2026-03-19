import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Search, Car, Plus, MoreHorizontal, MapPin, SlidersHorizontal, Settings2 } from "lucide-react"
import { cn } from "@/lib/utils"

export default function VehiclesPage() {
  const vehicles = [
    { id: 1, name: "Peugeot 208", plate: "AA-123-BB", city: "Paris 14", location: "Parking Maine", lastClean: "12 Mars", status: "Impeccable" },
    { id: 2, name: "Tesla Model 3", plate: "CC-456-DD", city: "Paris 08", location: "Rue de Ponthieu", lastClean: "15 Mars", status: "À nettoyer" },
    { id: 3, name: "VW Golf 8", plate: "EE-789-FF", city: "Lyon 02", location: "Gare Perrache", lastClean: "18 Mars", status: "En mission" },
    { id: 4, name: "Renault Zoe", plate: "GG-012-HH", city: "Bordeaux", location: "Aéroport", lastClean: "10 Mars", status: "Sale" },
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Votre <span className="text-primary italic">Flotte</span></h1>
          <p className="text-muted-foreground">Gérez vos véhicules et suivez leur état en temps réel.</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Ajouter un véhicule
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
         <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input className="pl-10" placeholder="Rechercher par immatriculation..." />
         </div>
         <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-2 h-10 px-4 rounded-xl">
               <SlidersHorizontal className="w-4 h-4" /> Filtres
            </Button>
            <Button variant="outline" size="sm" className="gap-2 h-10 px-4 rounded-xl">
               <Settings2 className="w-4 h-4" /> Gérer les lieux
            </Button>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {vehicles.map((v) => (
          <Card key={v.id} className="border-none shadow-sm hover:shadow-md transition-all group overflow-hidden">
             <div className="h-2 bg-primary/10 group-hover:bg-primary transition-colors"></div>
             <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                   <div className="bg-muted p-3 rounded-2xl group-hover:bg-primary/5 transition-colors">
                      <Car className="w-6 h-6 text-muted-foreground group-hover:text-primary" />
                   </div>
                   <button className="text-muted-foreground hover:text-foreground">
                      <MoreHorizontal className="w-5 h-5" />
                   </button>
                </div>
                
                <h3 className="font-bold text-lg">{v.name}</h3>
                <code className="text-[10px] font-mono bg-muted px-2 py-0.5 rounded text-muted-foreground uppercase">{v.plate}</code>
                
                <div className="mt-6 space-y-3">
                   <div className="flex gap-2 text-xs text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="font-medium text-foreground">{v.city}</span> • {v.location}
                   </div>
                   <div className="flex justify-between items-center pt-4 border-t">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">État</div>
                      <span className={cn(
                        "text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full",
                        v.status === "Impeccable" ? "bg-primary/10 text-primary" : 
                        v.status === "Sale" ? "bg-destructive/10 text-destructive" : "bg-blue-50 text-blue-600"
                      )}>
                        {v.status}
                      </span>
                   </div>
                </div>
             </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

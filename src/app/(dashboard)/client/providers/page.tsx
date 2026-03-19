import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Search, MapPin, Star, MessageCircle, ShieldCheck, Heart } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ProvidersDirectory() {
  const providers = [
    { name: "Charly Braunn", rating: 4.9, jobs: 124, city: "Paris & IDF", spec: "Detailing", fav: true, img: "CB" },
    { name: "Sophie Laurent", rating: 4.8, jobs: 89, city: "Lyon", spec: "Éco-Lavage", fav: true, img: "SL" },
    { name: "Thomas Roux", rating: 4.7, jobs: 215, city: "Paris", spec: "Utilitaires", fav: false, img: "TR" },
    { name: "Julie Martin", rating: 5.0, jobs: 12, city: "Paris 16", spec: "Intérieur", fav: false, img: "JM" },
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Vos <span className="text-primary italic">Prestataires</span></h1>
          <p className="text-muted-foreground">Découvrez et gérez les experts locaux qui interviennent sur votre flotte.</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
         <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input className="pl-10" placeholder="Filtrer par ville, spécialité..." />
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {providers.map((p, i) => (
          <Card key={i} className="border-none shadow-sm hover:shadow-md transition-all overflow-hidden bg-white">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                 <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xl shadow-inner">
                       {p.img}
                    </div>
                    <div>
                       <h3 className="font-bold flex items-center gap-2">
                          {p.name}
                          <ShieldCheck className="w-4 h-4 text-primary fill-primary/10" />
                       </h3>
                       <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="w-3 h-3" /> {p.city}
                       </div>
                    </div>
                 </div>
                 <button className={cn("p-2 rounded-xl transition-colors", p.fav ? "text-primary bg-primary/5" : "text-muted-foreground bg-muted")}>
                    <Heart className={cn("w-5 h-5", p.fav && "fill-current")} />
                 </button>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-8 py-4 border-y border-muted/50">
                 <div className="text-center">
                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Note</p>
                    <p className="font-bold flex items-center justify-center gap-1">
                       {p.rating} <Star className="w-3 h-3 fill-primary text-primary" />
                    </p>
                 </div>
                 <div className="text-center border-x">
                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Missions</p>
                    <p className="font-bold">{p.jobs}</p>
                 </div>
                 <div className="text-center">
                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Spécialité</p>
                    <p className="text-xs font-bold text-primary truncate px-1">{p.spec}</p>
                 </div>
              </div>

              <div className="mt-6 flex gap-3">
                 <Button variant="outline" className="flex-1 gap-2 rounded-xl h-10 text-xs">
                    <MessageCircle className="w-4 h-4" /> Message
                 </Button>
                 <Button className="flex-1 text-xs rounded-xl h-10">Voir Profil</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

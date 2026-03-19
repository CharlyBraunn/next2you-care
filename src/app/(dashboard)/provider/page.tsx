import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Briefcase, Wallet, Star, MapPin, Clock, ArrowRight, Zap } from "lucide-react"

export default function ProviderOverview() {
  const kpis = [
    { label: "Missions dispos", value: "8", icon: Zap, color: "text-accent-foreground", bg: "bg-accent/20" },
    { label: "À faire aujourd'hui", value: "3", icon: Clock, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Revenu (30j)", value: "1 840€", icon: Wallet, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Note moyenne", value: "4.9", icon: Star, color: "text-amber-600", bg: "bg-amber-50" },
  ]

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Bonjour, Charly.</h1>
          <p className="text-muted-foreground">Vous avez 3 missions prévues aujourd&apos;hui. Bonne journée !</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, i) => (
          <Card key={i} className="border-none shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className={`${kpi.bg} ${kpi.color} p-3 rounded-2xl`}>
                  <kpi.icon className="w-6 h-6" />
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground font-medium">{kpi.label}</p>
                <p className="text-2xl font-black mt-1">{kpi.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 border-none shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Missions à proximité</CardTitle>
            <Button variant="ghost" className="text-xs font-bold text-accent-foreground">Voir tout</Button>
          </CardHeader>
          <CardContent className="space-y-4">
             {[
               { id: "M-481", title: "Nettoyage Extérieur", car: "Tesla Model 3", area: "Paris 08", price: "35€", urgency: "Normal" },
               { id: "M-483", title: "Intérieur Complet", car: "Renault Zoe", area: "Paris 16", price: "50€", urgency: "Élevé" },
             ].map((m, i) => (
               <div key={i} className="p-5 rounded-3xl border-2 border-transparent hover:border-accent hover:bg-accent/5 transition-all flex items-center justify-between group cursor-pointer bg-muted/30">
                  <div className="flex gap-4">
                     <div className="bg-white p-3 rounded-2xl shadow-sm text-accent-foreground group-hover:bg-accent group-hover:text-white transition-colors">
                        <Briefcase className="w-5 h-5" />
                     </div>
                     <div>
                        <p className="font-bold">{m.title}</p>
                        <p className="text-xs text-muted-foreground">{m.car} • {m.area}</p>
                     </div>
                  </div>
                  <div className="text-right">
                     <p className="text-lg font-black text-accent-foreground">{m.price}</p>
                     <Button variant="link" size="sm" className="h-auto p-0 text-xs gap-1 group-hover:translate-x-1 transition-transform">
                        Détails <ArrowRight className="w-3 h-3" />
                     </Button>
                  </div>
               </div>
             ))}
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm bg-accent text-accent-foreground p-6 rounded-[2.5rem] flex flex-col justify-between">
            <div className="space-y-4">
               <h3 className="text-2xl font-black leading-tight">Augmentez vos revenus</h3>
               <p className="text-sm opacity-80">En passant la certification &quot;Luxe & Premium&quot;, vous accédez à des missions 30% plus rémunératrices.</p>
            </div>
            <Button className="w-full bg-accent-foreground text-accent hover:bg-accent-foreground/90 mt-8 rounded-2xl font-bold">Passer la certification</Button>
        </Card>
      </div>
    </div>
  )
}

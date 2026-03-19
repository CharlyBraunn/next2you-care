import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Wallet, Calendar, Map, CheckCircle, Handshake, TrendingUp } from "lucide-react"

export default function ProvidersPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">Devenez partenaire <span className="text-primary italic">Expert</span></h1>
          <p className="text-xl text-muted-foreground">Une application pensée pour votre quotidien. Trouvez des missions, gérez votre planning et boostez vos revenus.</p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
            <Link href="/signup">Devenir prestataire</Link>
          </Button>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Wallet, title: "Revenus attractifs", desc: "Fixez vos tarifs ou acceptez des missions à prix pré-négociés. Paiements garantis." },
            { icon: Calendar, title: "Liberté Totale", desc: "Travaillez quand vous voulez. Pas de minimum requis, pas de contraintes." },
            { icon: Map, title: "Missions Locales", desc: "Notre algorithme vous propose des missions à proximité de votre zone d'activité." },
            { icon: TrendingUp, title: "Boostez vos avis", desc: "La qualité de vos prestations est récompensée par une meilleure visibilité." },
            { icon: Handshake, title: "Support Dédié", desc: "Une équipe à votre écoute pour vous aider à réussir chaque mission." },
            { icon: CheckCircle, title: "Outils Pro", desc: "App de suivi, facturation automatique et gestion de planning intégrée." },
          ].map((item, i) => (
            <div key={i} className="p-8 space-y-4 hover:bg-muted/50 rounded-3xl transition-colors">
              <div className="bg-accent/20 p-3 rounded-2xl w-fit text-accent-foreground">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-6 text-center space-y-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Prêt à sauter le pas ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
             <div className="space-y-4">
               <div className="text-primary text-4xl font-bold">1</div>
               <h4 className="font-bold">Inscription</h4>
               <p className="text-sm text-muted-foreground text-pretty">Créez votre profil et renseignez vos informations pro.</p>
             </div>
             <div className="space-y-4">
               <div className="text-primary text-4xl font-bold">2</div>
               <h4 className="font-bold">Validation</h4>
               <p className="text-sm text-muted-foreground">Nous vérifions vos documents sous 48h.</p>
             </div>
             <div className="space-y-4">
               <div className="text-primary text-4xl font-bold">3</div>
               <h4 className="font-bold">Missions</h4>
               <p className="text-sm text-muted-foreground">Commencez à recevoir des demandes immédiatement.</p>
             </div>
          </div>
          <Button size="lg" className="bg-primary text-white" asChild>
            <Link href="/signup">Démarrer l&apos;onboarding</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

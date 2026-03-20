import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Wallet, Calendar, Map, CheckCircle, Handshake, TrendingUp } from "lucide-react"

export default function ProvidersPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">Générez un <span className="text-primary italic">complément de revenu</span></h1>
          <p className="text-xl text-muted-foreground">Des missions simples, sans engagement, adaptées à votre emploi du temps. Inscription 100% gratuite.</p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
            <Link href="/signup">Devenir prestataire</Link>
          </Button>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Wallet, title: "Commission Fixe et Faible", desc: "Seulement 2€ de commission par mission. Vous conservez l'essentiel de vos revenus sur chaque prestation." },
            { icon: Calendar, title: "Liberté et Flexibilité", desc: "C'est un complément de revenu parfait. Travaillez quand vous voulez, sans engagement ni minimum." },
            { icon: CheckCircle, title: "Missions Simples", desc: "Des interventions claires et rapides (nettoyage intérieur, photos, vérification). Pas de mauvaises surprises." },
            { icon: Map, title: "Proche de chez vous", desc: "Recevez les offres des loueurs professionnels et particuliers (Getaround/Turo) autour de vous." },
            { icon: TrendingUp, title: "Revenus Réguliers", desc: "La forte rotation des véhicules en autopartage vous garantit un volume constant d'opportunités." },
            { icon: Handshake, title: "Gagnant-Gagnant", desc: "En devenant un prestataire fiable, les loueurs feront appel à vous en priorité sur le long terme." },
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

import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { Check, MapPin, Sparkles, Wrench, ShieldCheck, ClipboardCheck, Camera, Zap, Droplets, Disc, Truck, Fuel, Waves } from "lucide-react"

export default function PricingPage() {
  const tiers = [
    {
      name: "Starter",
      price: "0€",
      description: "Vous vous lancez ? Laissez-nous vous accompagner.",
      features: [
        "1 véhicule inclus",
        "Accès complet au réseau",
        "Paiement à la mission",
        "Support standard",
      ],
      cta: "Je m'inscris",
      highlight: false,
    },
    {
      name: "Pro",
      price: "19€",
      description: "Profitez de 14 jours d'essai gratuit.",
      features: [
        "Jusqu'à 10 véhicules",
        "Missions prioritaires",
        "Tableau de bord avancé",
        "Rapport mensuel de flotte",
      ],
      cta: "Essayer gratuitement",
      highlight: true,
    },
    {
      name: "Business",
      price: "Sur devis",
      description: "Pour les réseaux de location et grandes flottes.",
      features: [
        "Véhicules illimités",
        "Support prioritaire 7j/7",
        "Dashboard multi-flottes centralisé",
        "Facturation mensuelle consolidée",
        "Prestataires attitrés à votre flotte",
        "Rapport de sinistralité mensuel",
      ],
      cta: "Contacter un expert",
      highlight: false,
    },
  ]

  const missionIncludes = [
    { name: "Déplacement du prestataire sur place", icon: MapPin },
    { name: "Nettoyage intérieur", icon: Sparkles },
    { name: "Remise en état accessoires & équipements", icon: Wrench },
    { name: "Inspection visuelle (début et fin)", icon: ShieldCheck },
    { name: "Vérification générale sinistralité", icon: ClipboardCheck }
  ]

  const upsells = [
    { name: "Photos détaillées à la demande", price: "+3€", icon: Camera },
    { name: "Urgence", price: "+5€", icon: Zap },
    { name: "Vérifications des niveaux", price: "+10€", icon: Droplets },
    { name: "Pression des pneus", price: "+10€", icon: Disc },
    { name: "Rapatriement", price: "À partir de 10€", icon: Truck },
    { name: "Gestion carburant", price: "+15€", icon: Fuel },
    { name: "Nettoyage extérieur", price: "+20€", icon: Waves },
  ]

  return (
    <div className="flex flex-col w-full">
      <section id="hero" className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-[#0A2E1A] text-white">
        <div className="container mx-auto px-6 text-center max-w-4xl space-y-6">
          <h1 className="text-4xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            Optimisez votre <span className="text-primary italic">développement</span>.
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Automatisez vos opérations, réduisez vos déplacements et offrez une expérience 5 étoiles à vos clients.
          </p>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-24 relative z-10">
            {tiers.map((tier, i) => (
              <Card key={i} className={`flex flex-col p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border-none ${tier.highlight ? 'bg-white shadow-xl ring-2 ring-primary' : 'bg-white shadow-lg'}`}>
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-black tracking-tight text-[#0A2E1A]">{tier.price}</span>
                    {tier.price !== "Sur devis" && <span className="text-sm font-semibold text-muted-foreground">/mois</span>}
                  </div>
                  <CardDescription className="mt-2 text-sm leading-relaxed min-h-[40px] text-slate-500 font-medium">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 p-0">
                  <div className="w-full h-px bg-border my-5"></div>
                  <ul className="space-y-4">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-slate-600 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-10 pb-0 px-0 mt-auto">
                  <Button className={`w-full h-12 rounded-full font-bold transition-all ${tier.highlight ? 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20' : 'bg-slate-900 text-white hover:bg-slate-800'}`} asChild>
                    <Link href="/signup">{tier.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-32 max-w-5xl mx-auto">
            <div className="text-center space-y-4 mb-14">
              <h2 className="text-3xl font-bold">Payez selon vos besoins.</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Gardez une totale flexibilité sur vos coûts opérationnels avec des prestations paramétrables, claires et sans surprise.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[3rem] overflow-hidden border border-border shadow-2xl bg-white">
              <div className="p-12 lg:p-16 space-y-8 bg-slate-50">
                <div className="space-y-3">
                  <span className="text-xs font-black text-primary uppercase tracking-[0.2em] bg-primary/10 px-3 py-1 rounded-full">
                    PRÊT À LOUER EN MOINS D&apos;UNE HEURE
                  </span>
                  <div className="flex items-baseline gap-4 pt-3">
                    <h3 className="text-4xl font-black text-slate-900">Prestation standard</h3>
                    <span className="text-3xl text-primary font-black">25€</span>
                  </div>
                </div>

                <ul className="space-y-5">
                  {missionIncludes.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-slate-700 font-semibold group">
                      <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 group-hover:text-primary group-hover:border-primary/30 transition-colors">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-12 lg:p-16 space-y-8 bg-white border-t lg:border-t-0 lg:border-l border-border">
                <h3 className="text-2xl font-bold text-slate-900">Options à la carte</h3>
                <div className="grid grid-cols-1 gap-3">
                  {upsells.map((option, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 bg-white hover:border-primary/20 hover:shadow-md transition-all group">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                          <option.icon className="w-4 h-4" />
                        </div>
                        <span className="font-bold text-slate-600 text-sm">{option.name}</span>
                      </div>
                      <span className="font-black text-primary text-sm tracking-tight">{option.price}</span>
                    </div>
                  ))}
                  <div className="p-4 text-center border-2 border-dashed border-slate-100 rounded-2xl">
                    <p className="text-xs font-bold text-slate-400">+ demandes sur mesure selon les besoins</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

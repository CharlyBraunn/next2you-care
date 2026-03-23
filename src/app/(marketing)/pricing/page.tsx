import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { Check } from "lucide-react"

export default function PricingPage() {
  const tiers = [
    {
      name: "Starter",
      price: "0€",
      description: "Lancez votre activité sans aucun frais fixe.",
      features: [
        "1 véhicule inclus",
        "Accès complet au réseau",
        "Paiement à la mission",
        "Support standard",
      ],
      cta: "Commencer gratuitement",
      highlight: false,
    },
    {
      name: "Pro",
      price: "19€",
      description: "Optimisez la gestion de votre flotte en croissance.",
      features: [
        "Jusqu'à 10 véhicules",
        "Missions prioritaires",
        "Tableau de bord avancé",
        "Support prioritaire 7j/7",
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
        "Accès API & Webhooks",
        "Gestion multi-sites",
        "Account Manager dédié",
      ],
      cta: "Contacter un expert",
      highlight: false,
    },
  ]

  const missionIncludes = [
    "Nettoyage intérieur rapide",
    "Remise en état basique",
    "Inspection visuelle simple",
    "Photos du véhicule (preuve d'état)",
    "Vérification générale rapide"
  ]

  const upsells = [
    { name: "⚡ Urgence", price: "+5€" },
    { name: "⛽ Gestion carburant", price: "+5€" },
    { name: "📸 Photos détaillées", price: "+3€" },
    { name: "🧼 Nettoyage complet", price: "+5€" },
    { name: "🚗 Rapatriement", price: "+10€ à 15€" },
  ]

  return (
    <div className="flex flex-col w-full">
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-20 bg-[#0A2E1A] text-white">
        <div className="container mx-auto px-6 text-center max-w-4xl space-y-6">
          <h1 className="text-4xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            Accélérez votre <span className="text-primary italic">rentabilité</span>.
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Automatisez vos opérations, réduisez vos coûts fixes et offrez une expérience 5 étoiles à vos clients.
          </p>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-20 relative z-10">
            {tiers.map((tier, i) => (
              <Card key={i} className={`flex flex-col p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border-none ${tier.highlight ? 'bg-white shadow-xl ring-2 ring-primary' : 'bg-white shadow-lg'}`}>
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-black tracking-tight text-[#0A2E1A]">{tier.price}</span>
                    {tier.price !== "Sur devis" && <span className="text-sm font-semibold text-muted-foreground">/mois</span>}
                  </div>
                  <CardDescription className="mt-3 text-sm leading-relaxed min-h-[40px]">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 p-0">
                  <div className="w-full h-px bg-border my-6"></div>
                  <ul className="space-y-4">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <Check className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-slate-600 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-10 p-0">
                  <Button className={`w-full h-12 rounded-full font-bold transition-all ${tier.highlight ? 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20' : 'bg-slate-900 text-white hover:bg-slate-800'}`} asChild>
                    <Link href="/signup">{tier.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-24 max-w-5xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">Payez uniquement ce dont vous avez besoin.</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Gardez une totale flexibilité sur vos coûts opérationnels avec des prestations claires et sans surprise.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[2.5rem] overflow-hidden border border-border shadow-2xl bg-white">
              <div className="p-10 lg:p-12 space-y-6 bg-slate-50">
                <div className="flex items-baseline gap-3">
                  <h3 className="text-3xl font-bold">Mission Standard</h3>
                  <span className="text-2xl text-primary font-black">25€</span>
                </div>
                <p className="text-sm font-semibold text-primary/80 uppercase tracking-widest">
                  Prêt à louer en 45 minutes
                </p>
                <ul className="space-y-4 mt-8">
                  {missionIncludes.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-slate-700 font-medium">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-10 lg:p-12 space-y-8 bg-white border-t lg:border-t-0 lg:border-l border-border">
                <h3 className="text-2xl font-bold">Options à la carte</h3>
                <div className="grid grid-cols-1 gap-3">
                  {upsells.map((option, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:border-primary/20 hover:bg-white transition-all group">
                      <span className="font-semibold text-slate-700">{option.name}</span>
                      <span className="font-bold text-primary group-hover:scale-110 transition-transform">{option.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { Check } from "lucide-react"

export default function PricingPage() {
  const tiers = [
    {
      name: "Solo",
      price: "9€",
      description: "Pour les loueurs (1 à 3 véhicules). L'accès de base.",
      features: [
        "Jusqu'à 3 véhicules",
        "Accès au réseau de prestataires",
        "Paiement à la prestation",
        "Support par email",
      ],
      cta: "Commencer gratuitement",
      highlight: false,
    },
    {
      name: "Pro",
      price: "19€",
      description: "Pour les flottes en croissance (4 à 10 véhicules).",
      features: [
        "Jusqu'à 10 véhicules",
        "Priorisation de vos demandes",
        "Meilleure réactivité pour les urgences",
        "Support prioritaire",
      ],
      cta: "Essai gratuit de 14 jours",
      highlight: true,
    },
    {
      name: "Fleet",
      price: "39€",
      description: "Pour les grandes flottes (10+ véhicules). Volumes élevés.",
      features: [
        "Véhicules illimités",
        "Traitement prioritaire VIP",
        "SLA garantis et réactivité maximale",
        "Plus de véhicules = plus de revenus optimisés",
      ],
      cta: "Contacter l'équipe",
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
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-muted/30">
        <div className="container mx-auto px-6 text-center max-w-3xl space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
            Un abonnement <span className="text-primary italic">adapté à votre activité</span>.
          </h1>
          <p className="text-xl text-muted-foreground">
            Un coût marginal par rapport aux gains générés. Plus vous avez de véhicules, plus vous gagnez du temps.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, i) => (
              <Card key={i} className={`flex flex-col p-4 ${tier.highlight ? 'border-primary shadow-xl scale-105 z-10' : 'border-border'}`}>
                <CardHeader>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tight text-foreground">{tier.price}</span>
                    <span className="text-sm font-semibold text-muted-foreground">/mois</span>
                  </div>
                  <CardDescription className="mt-2 text-balance leading-relaxed">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3 mt-4">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <Check className="w-5 h-5 text-primary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-8">
                  <Button className="w-full" variant={tier.highlight ? "default" : "outline"} asChild>
                    <Link href="/signup">{tier.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-32 max-w-5xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold">À partir de 25€, vous déléguez l&apos;essentiel.</h2>
              <p className="text-lg text-muted-foreground">
                Je comprends en 5 secondes ce que je paie. Ajoutez uniquement ce dont vous avez besoin et gardez le contrôle sur votre budget.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl p-8 border border-border shadow-sm">
              <div className="space-y-6">
                <div className="flex items-baseline gap-2">
                  <h3 className="text-2xl font-bold">Mission Standard</h3>
                  <span className="text-xl text-primary font-bold">25€</span>
                </div>
                <p className="text-sm text-primary font-medium bg-primary/10 w-fit px-3 py-1 rounded-full">
                  Le minimum essentiel pour remettre un véhicule prêt à louer.
                </p>
                <ul className="space-y-4 mt-6">
                  {missionIncludes.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                      <Check className="w-5 h-5 text-green-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6 lg:pl-12 lg:border-l border-border">
                <h3 className="text-2xl font-bold">Options au choix</h3>
                <p className="text-sm text-muted-foreground">Activez ces options selon vos besoins ponctuels :</p>
                <div className="space-y-3 mt-6">
                  {upsells.map((option, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-border bg-muted/30">
                      <span className="font-medium">{option.name}</span>
                      <span className="font-bold text-primary">{option.price}</span>
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

import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { Check } from "lucide-react"

export default function PricingPage() {
  const tiers = [
    {
      name: "Starter",
      price: "0€",
      description: "Pour les loueurs particuliers ou petites flottes.",
      features: [
        "Jusqu'à 3 véhicules",
        "Missions ponctuelles",
        "Paiement à la prestation",
        "Support par email",
      ],
      cta: "Commencer gratuitement",
      highlight: false,
    },
    {
      name: "Pro",
      price: "49€",
      description: "Pour les agences et flottes en croissance.",
      features: [
        "Jusqu'à 20 véhicules",
        "Missions récurrentes",
        "Dashboard analytique",
        "Support prioritaire",
        "Gestion multi-utilisateurs",
      ],
      cta: "Essai gratuit de 14 jours",
      highlight: true,
    },
    {
      name: "Fleet",
      price: "Sur devis",
      description: "Solution sur mesure pour les grands comptes.",
      features: [
        "Véhicules illimités",
        "API & Intégrations",
        "Account Manager dédié",
        "SLA garantis",
        "Facturation mensuelle consolidée",
      ],
      cta: "Contacter le service commercial",
      highlight: false,
    },
  ]

  return (
    <div className="flex flex-col w-full">
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-6 text-center max-w-3xl space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">Une tarification <span className="text-primary italic">transparente</span>.</h1>
          <p className="text-xl text-muted-foreground">Choisissez le plan qui correspond à la taille de votre flotte. Aucun frais caché.</p>
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
                    {tier.price !== "Sur devis" && <span className="text-sm font-semibold text-muted-foreground">/mois</span>}
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
        </div>
      </section>
    </div>
  )
}

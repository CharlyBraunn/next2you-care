import { Button } from "@/components/ui/Button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card"
import { HelpCircle, ChevronRight } from "lucide-react"

export default function FAQPage() {
  const faqs = [
    {
      q: "Comment garantissez-vous la qualité du nettoyage ?",
      a: "Toutes nos missions nécessitent l'upload de photos avant et après l'intervention. Les prestataires sont notés par les clients et un taux de satisfaction minimal est requis pour rester sur la plateforme."
    },
    {
      q: "Quels sont les délais d'intervention ?",
      a: "Pour une mission standard, un prestataire intervient généralement sous 2 à 4 heures. Pour les urgences, nous avons une option 'Prioritaire' avec intervention sous 60 minutes."
    },
    {
      q: "Dans quelles villes êtes-vous disponibles ?",
      a: "Nous sommes actuellement présents dans les 10 plus grandes métropoles françaises et prévoyons une couverture nationale d'ici la fin de l'année."
    },
    {
      q: "Comment se passe le paiement ?",
      a: "Les loueurs sont prélevés après validation de la fin de mission. Les prestataires reçoivent leurs gains de manière hebdomadaire."
    },
    {
      q: "Puis-je annuler une mission ?",
      a: "Oui, l'annulation est gratuite jusqu'à 1 heure avant le début de la prestation. Passé ce délai, des frais d'annulation s'appliquent."
    }
  ]

  return (
    <div className="flex flex-col w-full pb-20">
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">Questions <span className="text-primary italic">Fréquentes</span></h1>
          <p className="text-lg text-muted-foreground mt-4">Tout ce que vous devez savoir sur NEXT2YOU Care.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-3xl space-y-4">
          {faqs.map((faq, i) => (
            <Card key={i} className="border-border hover:border-primary/50 transition-colors group">
              <CardHeader className="p-6">
                <CardTitle className="text-lg font-bold flex gap-4 items-start">
                  <HelpCircle className="w-6 h-6 text-primary shrink-0" />
                  {faq.q}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6 pt-0">
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 text-center">
        <Card className="bg-muted p-12 border-dashed border-2">
            <h3 className="text-2xl font-bold mb-4">Vous n&apos;avez pas trouvé votre réponse ?</h3>
            <p className="text-muted-foreground mb-8">Notre équipe est disponible 7j/7 pour répondre à toutes vos questions.</p>
            <Button size="lg" asChild>
                <a href="/contact">Nous contacter</a>
            </Button>
        </Card>
      </section>
    </div>
  )
}

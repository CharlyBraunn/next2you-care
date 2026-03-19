import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card"
import { Shield, BarChart3, Users, MapPin, Building2, ClipboardCheck } from "lucide-react"

export default function OwnersPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">Pour les loueurs et <span className="text-primary italic">gestionnaires de flotte</span></h1>
          <p className="text-xl text-muted-foreground">Une solution clé en main pour standardiser la qualité et automatiser la préparation de vos véhicules.</p>
          <Button size="lg" asChild>
            <Link href="/signup">Démarrer maintenant</Link>
          </Button>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: ClipboardCheck, title: "Missions sur mesure", desc: "Choisissez le niveau de nettoyage, l'adresse et le créneau. Publiez en un clic." },
            { icon: MapPin, title: "Couverture Locale", desc: "Accédez à un réseau d'auto-entrepreneurs qualifiés partout où se trouvent vos véhicules." },
            { icon: BarChart3, title: "Suivi Dataviz", desc: "Analysez vos dépenses par véhicule, par zone ou par période." },
            { icon: Shield, title: "Preuve Photo", desc: "Recevez des photos avant/après certifiées pour chaque intervention." },
            { icon: Users, title: "Gestion d'Équipe", desc: "Ajoutez plusieurs collaborateurs pour gérer votre flotte de manière collaborative." },
            { icon: Building2, title: "Standardisation", desc: "Définissez vos propres process de préparation pour une qualité constante." },
          ].map((feature, i) => (
            <Card key={i} className="border-none shadow-none bg-muted/50 p-8 rounded-3xl space-y-4">
              <div className="bg-primary/10 p-3 rounded-2xl w-fit text-primary">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Card className="bg-primary text-white p-12 rounded-[2.5rem] flex flex-col items-center text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold max-w-2xl">Prêt à optimiser vos opérations ?</h2>
            <p className="text-primary-foreground/80 max-w-xl text-lg">Rejoignez les loueurs qui font confiance à NEXT2YOU Care pour la gestion de leur flotte.</p>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/signup">Prendre rendez-vous</Link>
            </Button>
          </Card>
        </div>
      </section>
    </div>
  )
}

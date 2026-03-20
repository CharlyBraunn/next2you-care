import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card"
import { Shield, BarChart3, Users, MapPin, Building2, ClipboardCheck, Clock } from "lucide-react"

export default function OwnersPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">Pour les <span className="text-primary italic">loueurs en autopartage</span></h1>
          <p className="text-xl text-muted-foreground">Que vous ayez 1 véhicule sur Getaround / Turo ou une flotte de 50 véhicules. Ne perdez plus votre temps à les nettoyer, confiez-les à des pros.</p>
          <Button size="lg" asChild>
            <Link href="/signup">Démarrer maintenant</Link>
          </Button>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: ClipboardCheck, title: "Mission Standard à 25€", desc: "Le minimum essentiel (nettoyage intérieur rapide, remise en état basique, photos) pour remettre un véhicule prêt à louer." },
            { icon: Users, title: "Prestataires Fiables", desc: "Fini la difficulté de trouver quelqu'un de confiance. Notre réseau d'experts locaux est systématiquement vérifié." },
            { icon: Clock, title: "Gagnez du Temps", text: "Entretenir un véhicule entre deux locations est contraignant. Déléguez cette tâche et concentrez-vous sur votre croissance." },
            { icon: Shield, title: "Preuves Photo Incluses", desc: "Chaque mission comprend une inspection visuelle simple et des photos pour garantir l'état du véhicule." },
            { icon: MapPin, title: "Options Flexibles", desc: "Ajoutez seulement ce dont vous avez besoin : Urgence (+5€), Gestion carburant (+5€), Rapatriement, etc." },
            { icon: BarChart3, title: "Abonnements Adaptés", desc: "De 9€ à 39€/mois selon la taille de votre flotte. Un coût marginal par rapport aux gains générés." },
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

/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card"
import { Shield, BarChart3, Users, MapPin, Building2, ClipboardCheck, Clock, CheckCircle } from "lucide-react"

export default function OwnersPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-6">
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight">
            Développez votre flotte.<br />
            <span className="text-primary italic">On nettoie le reste.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Passez de 1 à 10 véhicules sans sacrifier vos soirées. NEXT2YOU Care connecte vos véhicules à des préparateurs fiables pour relouer en un éclair.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Button size="lg" className="h-14 px-8 text-lg rounded-full" asChild>
              <Link href="/signup">Essayer gratuitement</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full" asChild>
              <Link href="/pricing">Voir la tarification (dès 9€/mois)</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=1600&auto=format&fit=crop" alt="Fleet owner relaxing" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Un week-end sauvé pour le prix d&apos;un Fast Food.</h2>
              <p className="text-xl text-muted-foreground">La mission standard coûte <span className="text-foreground font-bold">25€</span>. Ce montant inclut un nettoyage rapide, une remise au propre et des photos de preuve de l&apos;état. Vous évitez les déplacements, le matériel, et la fatigue.</p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-4 text-lg"><CheckCircle className="text-primary w-6 h-6" /> Plus de perte de temps entre deux locations.</li>
                <li className="flex items-center gap-4 text-lg"><CheckCircle className="text-primary w-6 h-6" /> Des véhicules toujours bien notés sur Getaround/Turo.</li>
                <li className="flex items-center gap-4 text-lg"><CheckCircle className="text-primary w-6 h-6" /> Concentrez-vous sur l&apos;achat de nouveaux véhicules.</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row-reverse">
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1449426468159-d96dbf144412?q=80&w=1600&auto=format&fit=crop" alt="Keys to success" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Zéro stress, tout est tracé.</h2>
              <p className="text-xl text-muted-foreground">Notre application vous notifie à chaque étape. Vous disposez d&apos;une <span className="text-foreground font-bold">preuve photo certifiée</span> avant et après l&apos;intervention du prestataire.</p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-4 text-lg"><CheckCircle className="text-primary w-6 h-6" /> Inspection visuelle simple incluse.</li>
                <li className="flex items-center gap-4 text-lg"><CheckCircle className="text-primary w-6 h-6" /> Options d&apos;urgence et gestion du carburant.</li>
                <li className="flex items-center gap-4 text-lg"><CheckCircle className="text-primary w-6 h-6" /> Déclarez vos sinistres sereinement.</li>
              </ul>
            </div>
          </div>
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

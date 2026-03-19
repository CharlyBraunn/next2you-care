import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { CheckCircle2, Clock, ShieldCheck, Zap, Star, LayoutDashboard } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-muted/30">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold tracking-wide uppercase">
              <Star className="w-3 h-3 fill-current" />
              Service Premium de Mobilité
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              La préparation <span className="text-primary italic">haute couture</span> de votre flotte.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Mettez en relation vos véhicules avec les meilleurs experts locaux du nettoyage et de la remise en état. Simple, rapide, impeccable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-base" asChild>
                <Link href="/signup">Demander une démo</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base" asChild>
                <Link href="/login">Accéder à la plateforme</Link>
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-8 border-t border-border">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[10px] font-bold">
                    User
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground font-medium">
                Rejoint par +50 gestionnaires de flotte ce mois-ci
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <Card className="relative bg-white/90 backdrop-blur-sm border-white/50 overflow-hidden shadow-2xl rounded-[2.5rem]">
              <div className="aspect-video bg-muted/20 flex items-center justify-center p-8">
                 <div className="w-full h-full rounded-2xl border border-dashed border-primary/20 bg-primary/5 flex flex-col items-center justify-center gap-4 text-primary/40">
                    <LayoutDashboard className="w-16 h-16" />
                    <p className="font-semibold text-lg">Aperçu Dashboard</p>
                 </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <h2 className="text-4xl font-bold tracking-tight">Comment ça marche ?</h2>
            <p className="text-lg text-muted-foreground">Une plateforme pensée pour le terrain et l&apos;efficacité opérationnelle.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8 space-y-6 hover:shadow-xl transition-shadow bg-primary/5 border-primary/10">
              <div className="bg-primary text-white w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl">1</div>
              <h3 className="text-2xl font-bold">Pour les Loueurs</h3>
              <ul className="space-y-4">
                {[
                  "Publiez une mission en 30 secondes",
                  "Mise en relation automatique avec les experts locaux",
                  "Suivi en temps réel avec preuve photo",
                  "Facturation centralisée et simplifiée"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="link" className="p-0 text-primary h-auto" asChild>
                <Link href="/owners">En savoir plus &rarr;</Link>
              </Button>
            </Card>

            <Card className="p-8 space-y-6 hover:shadow-xl transition-shadow border-accent/20">
              <div className="bg-accent text-accent-foreground w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl">2</div>
              <h3 className="text-2xl font-bold">Pour les Prestataires</h3>
              <ul className="space-y-4">
                {[
                  "Recevez des missions à proximité",
                  "Gérez votre planning en toute liberté",
                  "Paiements garantis et réguliers",
                  "Outil de suivi métier professionnel"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="font-medium text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="link" className="p-0 text-accent h-auto" asChild>
                <Link href="/providers">Rejoindre le réseau &rarr;</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-32 bg-foreground text-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-4xl font-bold leading-tight text-white line-clamp-2">L&apos;excellence opérationnelle comme standard.</h2>
              <p className="text-muted-foreground">Nous transformons la préparation automobile d&apos;une contrainte logistique en un avantage compétitif.</p>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/signup">Essayer gratuitement</Link>
              </Button>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: Clock, title: "Gain de temps", text: "Réduisez le temps d'immobilisation de vos véhicules entre deux locations." },
                { icon: ShieldCheck, title: "Qualité Garantie", text: "Des standards de nettoyage professionnels validés par photo à chaque mission." },
                { icon: Zap, title: "Réactivité", text: "Interventions rapides en cas d'urgence ou de surcroît d'activité." },
                { icon: Star, title: "Fiabilité", text: "Une communauté de prestataires notés et vérifiés par nos soins." },
              ].map((benefit, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-4">
                  <div className="bg-primary/20 p-3 rounded-2xl w-fit">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-white">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

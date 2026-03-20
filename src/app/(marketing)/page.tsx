import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { CheckCircle2, Clock, ShieldCheck, Zap, Star } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-muted/30">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl py-8">
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              La plateforme spécialisée pour trouver <span className="text-primary italic">rapidement</span> un prestataire pour l’entretien de véhicules en autopartage.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Pour les loueurs dès 1 véhicule, flottes organisées et utilisateurs Getaround / Turo. Gagnez du temps grâce à une plateforme simple, réactive qui comprend vos contraintes terrain.
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
                Rejoint par +50 loueurs en autopartage ce mois-ci
              </p>
            </div>
          </div>
          <div className="relative group lg:ml-4 perspective-[2000px]">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white/90 backdrop-blur-sm border border-white/50 overflow-hidden shadow-2xl rounded-[2.5rem] p-2 rotate-y-[-10deg] rotate-x-[5deg] group-hover:rotate-0 transition-transform duration-700 ease-out">
              <div className="relative aspect-[16/10] w-full rounded-[2rem] overflow-hidden border border-border/50 shadow-inner">
                 <Image 
                   src="/hero-dashboard.png" 
                   alt="Aperçu du Dashboard NEXT2YOU Care" 
                   fill 
                   className="object-cover object-top"
                   priority
                 />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <h2 className="text-4xl font-bold tracking-tight">Le problème de la rotation</h2>
            <p className="text-lg text-muted-foreground">La rotation entre locations est contraignante. Difficile de trouver quelqu’un de fiable pour un besoin ponctuel ou régulier.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8 space-y-6 hover:shadow-xl transition-shadow bg-primary/5 border-primary/10">
              <div className="bg-primary text-white w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl">1</div>
              <h3 className="text-2xl font-bold">Pour les Loueurs</h3>
              <ul className="space-y-4">
                {[
                  "Trouvez un prestataire de confiance en quelques minutes",
                  "Des véhicules toujours prêts sans effort",
                  "Une solution pensée pour les loueurs en autopartage",
                  "À partir de 25€, vous déléguez l'essentiel"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="link" className="p-0 text-primary h-auto" asChild>
                <Link href="/owners">Découvrir la tarification &rarr;</Link>
              </Button>
            </Card>

            <Card className="p-8 space-y-6 hover:shadow-xl transition-shadow border-accent/20">
              <div className="bg-accent text-accent-foreground w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl">2</div>
              <h3 className="text-2xl font-bold">Pour les Prestataires</h3>
              <ul className="space-y-4">
                {[
                  "Un complément de revenu flexible",
                  "Des missions simples et rapides",
                  "Sans aucun engagement",
                  "Revenus réguliers (faible commission de 2€)"
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
              <h2 className="text-4xl font-bold leading-tight text-white line-clamp-2">1 heure de votre temps économisée pour 25€.</h2>
              <p className="text-muted-foreground">Un véhicule prêt en moins de 24h. Un coût maîtrisé, même avec plusieurs véhicules.</p>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/pricing">Voir les tarifs en détail</Link>
              </Button>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: Clock, title: "Entretenir prend du temps", text: "Ne perdez plus votre week-end à nettoyer vos véhicules de location, déléguez l'essentiel à un pro." },
                { icon: ShieldCheck, title: "Confiance & Fiabilité", text: "Nous avons sélectionné des profils fiables et sérieux pour que vous puissiez louer l'esprit tranquille." },
                { icon: Zap, title: "Toujours Prêt", text: "Des véhicules toujours prêts sans effort, pour enchaîner les locations sans temps mort." },
                { icon: Star, title: "Budget Maîtrisé", text: "À partir de 25€, ajoutez uniquement ce dont vous avez besoin. Vous gardez le contrôle sur votre budget." },
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

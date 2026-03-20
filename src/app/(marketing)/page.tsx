/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/Button"
import { CheckCircle2, Clock, ShieldCheck, Zap } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-muted/30">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl py-8">
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Ne nettoyez plus<br />vos véhicules de location.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Vous louez sur <span className="font-semibold text-foreground">Getaround</span> ou <span className="font-semibold text-foreground">Turo</span> ? Gagnez des heures chaque semaine. Déléguez l&apos;entretien de votre flotte à des préparateurs certifiés pour seulement 25€.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-lg px-8 h-14 rounded-full shadow-lg hover:shadow-xl transition-all" asChild>
                <Link href="/signup">Essayer gratuitement</Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-8 border-t border-border">
              <div className="flex -space-x-3">
                <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces" alt="User" width={40} height={40} className="rounded-full border-2 border-background" />
                <Image src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces" alt="User" width={40} height={40} className="rounded-full border-2 border-background" />
                <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces" alt="User" width={40} height={40} className="rounded-full border-2 border-background" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">Rejoint par +50 loueurs ce mois-ci.</p>
            </div>
          </div>
          <div className="relative group lg:ml-4 perspective-[2000px]">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white/90 backdrop-blur-sm border border-white/50 overflow-hidden shadow-2xl rounded-[2.5rem] p-2 rotate-y-[-5deg] rotate-x-[5deg] group-hover:rotate-0 transition-transform duration-700 ease-out">
              <div className="relative aspect-[16/10] w-full rounded-[2rem] overflow-hidden border border-border/50 shadow-inner">
                 <Image 
                   src="/hero-dashboard.png" 
                   alt="App Preview" 
                   fill 
                   className="object-cover object-top"
                   priority
                 />
              </div>
              {/* Emotional Badge */}
              <div className="absolute -right-6 top-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce">
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-sm">Véhicule prêt !</p>
                  <p className="text-xs text-muted-foreground">Reloué dans 1h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empathy / Problem Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl space-y-8">
          <h2 className="text-4xl font-bold tracking-tight">On connaît la galère de la rotation.</h2>
          <p className="text-2xl text-muted-foreground leading-relaxed text-balance">
            Un locataire vous rend la voiture. Le prochain arrive dans 2 heures. L&apos;intérieur est sale. Vous devez tout lâcher pour y aller. <strong className="text-foreground">Ce n&apos;est plus une vie.</strong>
          </p>
        </div>
      </section>

      {/* Solution in 3 Steps with Emotional Images */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div className="space-y-6">
              <div className="relative aspect-square rounded-3xl overflow-hidden mb-8 shadow-lg">
                <Image src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1000&auto=format&fit=crop" alt="Car interior dirty" fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-bold">1. Ne vous déplacez plus</h3>
              <p className="text-muted-foreground text-lg">Postez une mission en 3 clics sur l&apos;application depuis votre canapé. Notre réseau d&apos;experts locaux est alerté.</p>
            </div>

            <div className="space-y-6">
              <div className="relative aspect-square rounded-3xl overflow-hidden mb-8 shadow-lg">
                <Image src="https://images.unsplash.com/photo-1621255474343-4dcfea0e6add?q=80&w=1000&auto=format&fit=crop" alt="Person cleaning car" fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-bold">2. Un pro prend le relais</h3>
              <p className="text-muted-foreground text-lg">Un préparateur vérifié accepte la mission et se rend sur place. Nettoyage, photos de preuve, vérification globale. Tout est tracé.</p>
            </div>

            <div className="space-y-6">
              <div className="relative aspect-square rounded-3xl overflow-hidden mb-8 shadow-lg">
                <Image src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1000&auto=format&fit=crop" alt="Keys handed over smiling" fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-bold">3. Relouez sans temps mort</h3>
              <p className="text-muted-foreground text-lg">Vous recevez la notification. Le véhicule est immaculé. Encaisez votre prochaine location l&apos;esprit tranquille.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Value Proposition & Pricing Teaser */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                Rachetez votre temps libre pour 25€.
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Notre mission standard tourne autour de 25€. Le prix dérisoire d&apos;un week-end sauvé et d&apos;un client Getaround/Turo entièrement satisfait par la propreté.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  { icon: Clock, text: "Interventions rapides (sur demande)" },
                  { icon: ShieldCheck, text: "Photos avant/après systématiques" },
                  { icon: Zap, text: "Gestion carburant & urgences en option" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg">
                    <div className="bg-primary/20 p-2 rounded-full"><item.icon className="w-5 h-5 text-primary" /></div>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-8">
                <Button size="lg" variant="secondary" className="text-lg px-8 h-14 rounded-full" asChild>
                  <Link href="/pricing">Voir nos tarifs transparents</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10">
              <Image src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1600&auto=format&fit=crop" alt="Smiling driver" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10">
                <p className="text-2xl font-serif italic text-white">"Depuis NEXT2YOU, j&apos;ai doublé ma flotte sans y passer une minute de plus en logistique."</p>
                <p className="mt-2 text-primary">Marc, loueur de 8 véhicules.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

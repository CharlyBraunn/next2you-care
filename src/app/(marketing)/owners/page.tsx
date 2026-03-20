import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Shield, CheckCircle } from "lucide-react"

export default function OwnersPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-muted/30">
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
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl bg-gradient-to-tr from-muted to-white border border-border flex items-center justify-center p-12 group">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800A_2px,transparent_2px),linear-gradient(to_bottom,#8080800A_2px,transparent_2px)] bg-[size:48px_48px]"></div>
              
              <div className="relative w-full aspect-video bg-white rounded-2xl shadow-xl border border-border/50 overflow-hidden flex flex-col">
                <div className="h-12 border-b border-border/50 flex items-center px-4 gap-2 bg-muted/30">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 p-6 flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <div className="w-32 h-4 bg-muted rounded-full"></div>
                    <div className="w-16 h-6 bg-[#14C774]/20 text-[#14C774] rounded-full text-[10px] font-bold flex items-center justify-center">Terminé</div>
                  </div>
                  <div className="flex-1 rounded-xl bg-muted/50 border border-border/50"></div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#14C774]/20 rounded-full blur-3xl group-hover:bg-[#14C774]/30 transition-colors duration-700"></div>
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
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl bg-gradient-to-bl from-[#14C774] to-[#0F172A] p-12 flex items-center justify-center group">
              <div className="absolute inset-0 mix-blend-overlay opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMCAwTDggOFpNOCAwTDAgOFoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')]"></div>
              
              <div className="relative z-10 w-full aspect-[3/4] max-w-sm mx-auto bg-white/10 backdrop-blur-xl rounded-[2rem] border border-white/20 shadow-2xl p-6 flex flex-col gap-6 text-white rotate-6 group-hover:rotate-0 transition-transform duration-700">
                <div className="flex justify-between items-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div className="w-20 h-2 bg-white/20 rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="aspect-square bg-white/10 rounded-xl border border-white/10 flex items-center justify-center"><div className="w-8 h-8 rounded-full bg-white/20"></div></div>
                  <div className="aspect-square bg-white/10 rounded-xl border border-white/10 flex items-center justify-center"><div className="w-8 h-8 rounded-full bg-white/20"></div></div>
                </div>
                
                <div className="mt-auto bg-[#26D885] rounded-xl p-4 text-center text-sm font-bold text-slate-900 shadow-[0_0_30px_rgba(38,216,133,0.3)]">
                  Véhicule Sécurisé
                </div>
              </div>
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

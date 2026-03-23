import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Shield, CheckCircle } from "lucide-react"

export default function OwnersPage() {
  return (
    <div className="flex flex-col w-full">
      <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#0A2E1A] text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-6 relative z-10">
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Développez votre flotte.<br />
            <span className="text-[#26D885] italic">On s’occupe du reste.</span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            Agrandissez et optimisez votre flotte sans sacrifier vos soirées. NEXT2YOU Care connecte vos véhicules à des préparateurs de confiance pour relouer en toute sérénité.
          </p>
          <div className="pt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-[#14C774] text-white hover:bg-[#26D885] border-none shadow-[0_0_30px_rgba(20,199,116,0.3)]" asChild>
              <Link href="/signup">Essayer gratuitement</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-white/20 hover:bg-white/10 text-white bg-transparent" asChild>
              <Link href="/pricing">Voir les tarifs</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl bg-gradient-to-tr from-muted to-white border border-border flex items-center justify-center p-12 group">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800A_2px,transparent_2px),linear-gradient(to_bottom,#8080800A_2px,transparent_2px)] bg-[size:48px_48px]"></div>
              
              <div className="relative w-full aspect-[9/16] max-w-[280px] bg-white rounded-[2.5rem] shadow-2xl border-8 border-slate-900 overflow-hidden flex flex-col p-4 group-hover:scale-105 transition-transform duration-700">
                <div className="w-16 h-1 bg-slate-200 rounded-full mx-auto mb-6"></div>
                <div className="space-y-4">
                  <div className="w-full h-8 bg-muted rounded-lg flex items-center px-3 justify-between">
                    <div className="w-20 h-2 bg-slate-300 rounded-full"></div>
                    <div className="w-4 h-4 bg-primary/20 rounded-full"></div>
                  </div>
                  <div className="space-y-2 pt-2">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Configuration Mission</div>
                    <div className="flex gap-2">
                      <div className="flex-1 h-12 bg-primary/10 rounded-xl border border-primary/20 flex flex-col justify-center items-center p-2">
                        <div className="w-4 h-4 rounded bg-primary/20 mb-1"></div>
                        <div className="w-8 h-1 bg-primary/40 rounded-full"></div>
                      </div>
                      <div className="flex-1 h-12 bg-muted rounded-xl border border-border flex flex-col justify-center items-center p-2">
                        <div className="w-4 h-4 rounded bg-slate-200 mb-1"></div>
                        <div className="w-8 h-1 bg-slate-300 rounded-full"></div>
                      </div>
                      <div className="flex-1 h-12 bg-muted rounded-xl border border-border flex flex-col justify-center items-center p-2">
                        <div className="w-4 h-4 rounded bg-slate-200 mb-1"></div>
                        <div className="w-8 h-1 bg-slate-300 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-32 bg-slate-50 rounded-xl border border-border flex flex-col p-4 gap-2">
                    <div className="w-full h-3 bg-slate-200 rounded-full"></div>
                    <div className="w-3/4 h-3 bg-slate-100 rounded-full"></div>
                    <div className="mt-auto w-full h-10 bg-primary rounded-xl flex items-center justify-center">
                      <div className="w-20 h-2 bg-white/30 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#14C774]/20 rounded-full blur-3xl group-hover:bg-[#14C774]/30 transition-colors duration-700"></div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Une solution abordable pour votre tranquillité.</h2>
              <p className="text-xl text-muted-foreground">Que vous ayez besoin d’un simple nettoyage, d’une remise de carburant ou bien d’un diagnostic complet, tout est possible grâce à notre réseau de partenaires. Vous évitez les déplacements, l’achat du matériel, le stress et la fatigue.</p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-4 text-lg"><CheckCircle className="text-primary w-6 h-6 shrink-0" /> Créez des missions 100% paramétrables</li>
                <li className="flex items-center gap-4 text-lg"><CheckCircle className="text-primary w-6 h-6 shrink-0" /> Assurez une qualité 5 étoiles de vos véhicules sur les plateformes</li>
                <li className="flex items-center gap-4 text-lg"><CheckCircle className="text-primary w-6 h-6 shrink-0" /> Concentrez-vous sur votre valeur ajoutée</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row-reverse">
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl bg-gradient-to-bl from-[#14C774] to-[#0F172A] p-12 flex items-center justify-center group">
              <div className="absolute inset-0 mix-blend-overlay opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMCAwTDggOFpNOCAwTDAgOFoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')]"></div>
              
              <div className="relative z-10 w-full aspect-[9/16] max-w-[280px] bg-white rounded-[2.5rem] shadow-2xl border-8 border-slate-900 overflow-hidden flex flex-col p-4 group-hover:-rotate-3 transition-transform duration-700">
                <div className="w-16 h-1 bg-slate-200 rounded-full mx-auto mb-6"></div>
                <div className="flex-1 bg-slate-100 rounded-xl relative overflow-hidden flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-full border-4 border-white/50 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                  </div>
                  <div className="mt-auto p-4 space-y-2 relative z-10">
                    <div className="w-20 h-2 bg-white/80 rounded-full"></div>
                    <div className="w-full h-1 bg-white/40 rounded-full overflow-hidden">
                      <div className="w-2/3 h-full bg-primary"></div>
                    </div>
                  </div>
                </div>
                <div className="h-16 mt-4 grid grid-cols-3 gap-2">
                  <div className="rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center"><div className="w-4 h-4 rounded bg-slate-300"></div></div>
                  <div className="rounded-lg bg-slate-900 flex items-center justify-center shadow-lg"><div className="w-6 h-6 rounded-full bg-primary/40 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-primary"></div></div></div>
                  <div className="rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center"><div className="w-4 h-4 rounded bg-slate-300"></div></div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Zéro stress, tout est tracé.</h2>
              <p className="text-xl text-muted-foreground">Notre plateforme sécurise chaque étape. Vous disposez d&apos;une <span className="text-foreground font-bold">preuve photo certifiée</span> avant et après l&apos;intervention du prestataire.</p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-4 text-lg"><CheckCircle className="text-primary w-6 h-6 shrink-0" /> Gardez un oeil sur vos véhicules grâce à l’inspection visuelle incluse</li>
                <li className="flex items-center gap-4 text-lg"><CheckCircle className="text-primary w-6 h-6 shrink-0" /> Améliorez la gestion de vos sinistres</li>
                <li className="flex items-center gap-4 text-lg"><CheckCircle className="text-primary w-6 h-6 shrink-0" /> Des prestataires sélectionnés avec soin</li>
              </ul>
            </div>
          </div>
        </div>

      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Card className="bg-[#14C774] text-white p-12 rounded-[2.5rem] flex flex-col items-center text-center space-y-8 border-none shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <h2 className="text-3xl md:text-5xl font-bold max-w-2xl relative z-10">Prêt à optimiser votre temps ?</h2>
            <p className="text-white/80 max-w-xl text-lg relative z-10">Rejoignez les loueurs qui font confiance à NEXT2YOU Care pour la gestion de leur flotte.</p>
            <Button variant="secondary" size="lg" className="bg-white text-[#14C774] hover:bg-white/90 rounded-full h-14 px-10 text-lg font-bold relative z-10" asChild>
              <Link href="/signup">Demander une démo</Link>
            </Button>
          </Card>
        </div>
      </section>
    </div>
  )
}

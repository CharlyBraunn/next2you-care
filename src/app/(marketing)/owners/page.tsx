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
              <Link href="/signup">Je m’inscris</Link>
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
                  <div className="space-y-3 pt-2">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Services sélectionnés</div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 bg-primary/5 border border-primary/10 rounded-lg">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-primary/10 rounded flex items-center justify-center">
                            <CheckCircle className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-[10px] font-semibold text-slate-700">Nettoyage</span>
                        </div>
                        <div className="w-6 h-3 bg-primary rounded-full relative"><div className="absolute right-0.5 top-0.5 w-2 h-2 bg-white rounded-full"></div></div>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-primary/5 border border-primary/10 rounded-lg">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-primary/10 rounded flex items-center justify-center">
                            <CheckCircle className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-[10px] font-semibold text-slate-700">Plein Carburant</span>
                        </div>
                        <div className="w-6 h-3 bg-primary rounded-full relative"><div className="absolute right-0.5 top-0.5 w-2 h-2 bg-white rounded-full"></div></div>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-slate-50 border border-slate-100 rounded-lg opacity-60">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 bg-slate-200 rounded flex items-center justify-center">
                          </div>
                          <span className="text-[10px] font-semibold text-slate-400">Rapatriement</span>
                        </div>
                        <div className="w-6 h-3 bg-slate-200 rounded-full relative"><div className="absolute left-0.5 top-0.5 w-2 h-2 bg-white rounded-full"></div></div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-24 bg-slate-50 rounded-xl border border-border flex flex-col p-4 gap-2">
                    <div className="w-full h-3 bg-slate-200 rounded-full"></div>
                    <div className="w-3/4 h-3 bg-slate-100 rounded-full"></div>
                    <div className="mt-auto w-full h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                      <div className="w-20 h-2 bg-white rounded-full"></div>
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
                <div className="flex-1 bg-slate-100 rounded-xl relative overflow-hidden flex flex-col group/img">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform group-hover/img:scale-110" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80')` }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-full border-4 border-white/50 flex items-center justify-center backdrop-blur-sm">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                  </div>
                  <div className="mt-auto p-4 space-y-2 relative z-10">
                    <div className="text-[10px] font-bold text-white uppercase tracking-wider mb-1">Peugeot 208 • DE643DS</div>
                    <div className="flex justify-between items-center text-[8px] text-white/70">
                      <span>23 Mars 2026</span>
                      <span className="bg-primary/80 border border-primary/20 px-1.5 py-0.5 rounded uppercase">Certifié</span>
                    </div>
                    <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-primary animate-[shimmer_2s_infinite]"></div>
                    </div>
                  </div>
                </div>
                <div className="h-16 mt-4 grid grid-cols-3 gap-2">
                  <div className="rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center"><div className="w-4 h-4 rounded bg-slate-200"></div></div>
                  <div className="rounded-lg bg-slate-900 flex items-center justify-center shadow-lg"><div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center p-1"><CheckCircle className="w-4 h-4 text-primary" /></div></div>
                  <div className="rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center"><div className="w-4 h-4 rounded bg-slate-200"></div></div>
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
            <h2 className="text-3xl md:text-5xl font-bold relative z-10 whitespace-nowrap">Prêt à optimiser votre temps ?</h2>
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

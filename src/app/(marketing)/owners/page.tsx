import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { CheckCircle, Car } from "lucide-react"

export default function OwnersPage() {
  return (
    <div className="flex flex-col w-full">
      <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#0A2E1A] text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-6 relative z-10">
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Développez votre flotte.<br />
            <span className="text-[#26D885] italic">On s&apos;occupe du reste.</span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            Agrandissez et optimisez votre flotte sans sacrifier vos soirées. NEXT2YOU Care connecte vos véhicules à des préparateurs de confiance pour relouer en toute sérénité.
          </p>
          <div className="pt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-[#14C774] text-white hover:bg-[#26D885] border-none shadow-[0_0_30px_rgba(20,199,116,0.3)]" asChild>
              <Link href="/signup">Je m&apos;inscris</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-white/20 hover:bg-white/10 text-white bg-transparent" asChild>
              <Link href="/pricing">Voir les tarifs</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">

          {/* Bloc 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl bg-gradient-to-tr from-muted to-white border border-border flex items-center justify-center p-10 group">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800A_2px,transparent_2px),linear-gradient(to_bottom,#8080800A_2px,transparent_2px)] bg-[size:48px_48px]" />

              <div className="relative w-full aspect-[9/16] max-w-[270px] bg-white rounded-[2.5rem] shadow-2xl border-8 border-slate-900 overflow-hidden flex flex-col group-hover:scale-105 transition-transform duration-700">
                {/* Phone notch */}
                <div className="w-16 h-1 bg-slate-200 rounded-full mx-auto mt-3 mb-4" />

                {/* App header */}
                <div className="px-4 pb-3 border-b border-slate-100">
                  <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Nouvelle mission</div>
                  {/* Vehicle card */}
                  <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="w-10 h-10 rounded-lg bg-[#0A2E1A]/5 border border-slate-200 flex items-center justify-center shrink-0">
                      <Car className="w-5 h-5 text-[#0A2E1A]" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-slate-800">Peugeot 208</div>
                      <div className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">RE852DC</div>
                    </div>
                    <div className="ml-auto w-3 h-3 rounded-full bg-primary animate-pulse" />
                  </div>
                </div>

                {/* Services list */}
                <div className="px-4 py-3 space-y-2 flex-1">
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-2">Services sélectionnés</div>
                  {[
                    { label: "Nettoyage intérieur", on: true },
                    { label: "Plein Carburant", on: true },
                    { label: "Rapatriement", on: false },
                  ].map((item, i) => (
                    <div key={i} className={`flex items-center justify-between p-2 rounded-lg ${item.on ? "bg-primary/5 border border-primary/10" : "bg-slate-50 border border-slate-100 opacity-60"}`}>
                      <div className="flex items-center gap-2">
                        <div className={`w-5 h-5 rounded flex items-center justify-center ${item.on ? "bg-primary/10" : "bg-slate-200"}`}>
                          {item.on && <CheckCircle className="w-3 h-3 text-primary" />}
                        </div>
                        <span className={`text-[10px] font-semibold ${item.on ? "text-slate-700" : "text-slate-400"}`}>{item.label}</span>
                      </div>
                      <div className={`w-6 h-3 rounded-full relative ${item.on ? "bg-primary" : "bg-slate-200"}`}>
                        <div className={`absolute top-0.5 w-2 h-2 bg-white rounded-full transition-all ${item.on ? "right-0.5" : "left-0.5"}`} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA button */}
                <div className="px-4 pb-4">
                  <div className="w-full h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                    <span className="text-[10px] font-black text-white tracking-wide">Créer ma mission</span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#14C774]/20 rounded-full blur-3xl group-hover:bg-[#14C774]/30 transition-colors duration-700" />
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Une solution abordable pour votre tranquillité.</h2>
              <p className="text-xl text-muted-foreground">Que vous ayez besoin d&apos;un simple nettoyage, d&apos;une remise de carburant ou bien d&apos;un diagnostic complet, tout est possible grâce à notre réseau de partenaires. Vous évitez les déplacements, l&apos;achat du matériel, le stress et la fatigue.</p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-4 text-lg"><CheckCircle className="text-primary w-6 h-6 shrink-0" /> Créez des missions 100% paramétrables</li>
                <li className="flex items-center gap-4 text-lg"><CheckCircle className="text-primary w-6 h-6 shrink-0" /> Assurez une qualité 5 étoiles de vos véhicules sur les plateformes</li>
                <li className="flex items-center gap-4 text-lg"><CheckCircle className="text-primary w-6 h-6 shrink-0" /> Concentrez-vous sur votre valeur ajoutée</li>
              </ul>
            </div>
          </div>

          {/* Bloc 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl bg-gradient-to-bl from-[#14C774] to-[#0F172A] p-10 flex items-center justify-center group order-1 lg:order-2">
              <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')]" />

              <div className="relative z-10 w-full aspect-[9/16] max-w-[270px] bg-white rounded-[2.5rem] shadow-2xl border-8 border-slate-900 overflow-hidden flex flex-col group-hover:-rotate-2 transition-transform duration-700">
                <div className="w-16 h-1 bg-slate-200 rounded-full mx-auto mt-3 mb-4" />

                {/* Photo area */}
                <div className="flex-1 relative overflow-hidden mx-3 rounded-2xl">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Recording badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[8px] font-bold text-white uppercase tracking-wider">En cours</span>
                  </div>

                  {/* Photo count */}
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1">
                    <span className="text-[8px] font-bold text-white">📸 4/12</span>
                  </div>

                  {/* Bottom overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-black text-white uppercase tracking-wider">Peugeot 208 · DE643DS</div>
                        <div className="text-[8px] text-white/60">25 Mars 2026 · 09h14</div>
                      </div>
                      <span className="bg-primary text-white text-[8px] font-black px-2 py-0.5 rounded-full uppercase">Certifié</span>
                    </div>
                    {/* Progress bar */}
                    <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-1/3 h-full bg-primary rounded-full" />
                    </div>
                    <div className="text-[8px] text-white/50">Inspection en cours · étape 4/12</div>
                  </div>
                </div>

                {/* Photo thumbnails */}
                <div className="px-3 py-2 grid grid-cols-3 gap-1.5">
                  {[
                    { bg: "#d1fae5", done: true },
                    { bg: "#d1fae5", done: true },
                    { bg: "#d1fae5", done: true },
                  ].map((thumb, i) => (
                    <div key={i} className="h-10 rounded-lg overflow-hidden relative border-2 border-primary/30">
                      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=100')`, filter: "brightness(0.7)" }} />
                      <div className="absolute bottom-0.5 right-0.5">
                        <CheckCircle className="w-3 h-3 text-primary drop-shadow" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action bar */}
                <div className="px-3 pb-3">
                  <div className="w-full h-9 bg-slate-900 rounded-xl flex items-center justify-center">
                    <span className="text-[9px] font-black text-white/70 tracking-wide">Prendre la photo suivante</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-4xl font-bold">Zéro stress, tout est tracé.</h2>
              <p className="text-xl text-muted-foreground">Notre plateforme sécurise chaque étape. Vous disposez d&apos;une <span className="text-foreground font-bold">preuve photo certifiée</span> avant et après l&apos;intervention du prestataire.</p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-4 text-lg"><CheckCircle className="text-primary w-6 h-6 shrink-0" /> Gardez un œil sur vos véhicules grâce à l&apos;inspection visuelle incluse</li>
                <li className="flex items-center gap-4 text-lg"><CheckCircle className="text-primary w-6 h-6 shrink-0" /> Améliorez la gestion de vos sinistres</li>
                <li className="flex items-center gap-4 text-lg"><CheckCircle className="text-primary w-6 h-6 shrink-0" /> Des prestataires sélectionnés avec soin</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Card className="bg-[#14C774] text-white p-12 rounded-[2.5rem] flex flex-col items-center text-center space-y-8 border-none shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
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

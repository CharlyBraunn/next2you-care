import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Wallet, CheckCircle, TrendingUp, MapPin, Clock } from "lucide-react"

export default function ProvidersPage() {
  return (
    <div className="flex flex-col w-full">

      {/* ── HERO ── */}
      <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#0A2E1A] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#26D885_0,transparent_50%)] opacity-20" />
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-6 relative z-10">
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Intervenez sur des véhicules<br />
            <span className="text-[#26D885] italic">d&apos;autopartage près de chez vous.</span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            Pas de patron, pas d&apos;horaires fixes. Inscription 100% gratuite.
          </p>
          <div className="pt-8 flex justify-center">
            <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-[#14C774] text-white hover:bg-[#26D885] border-none shadow-[0_0_30px_rgba(20,199,116,0.3)]" asChild>
              <Link href="/signup">Rejoignez-nous</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── ARGUMENT BLOCKS ── */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">

          {/* Bloc 1 : Modèle économique */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">

            {/* Visual: earnings calculator */}
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl bg-[#0A2E1A] p-10 flex items-center justify-center group">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#26D885]/15 rounded-full blur-[80px] animate-pulse" />

              <div className="relative z-10 w-full max-w-xs flex flex-col gap-4">
                {/* header */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Simulation mensuelle</span>
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>

                {/* mission rows */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div>
                      <div className="text-white/50 text-xs mb-0.5">10 missions standard</div>
                      <div className="text-white font-bold">Mission · 25€</div>
                    </div>
                    <span className="text-white font-black text-lg">250€</span>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div>
                      <div className="text-white/50 text-xs mb-0.5">Options (photos, niveaux…)</div>
                      <div className="text-white font-bold">Moyenne · +8€</div>
                    </div>
                    <span className="text-white font-black text-lg">+80€</span>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-primary/10 border border-primary/30">
                    <div>
                      <div className="text-primary/70 text-xs mb-0.5">Commission NEXT2YOU (10%)</div>
                      <div className="text-primary font-bold">Déduite automatiquement</div>
                    </div>
                    <span className="text-primary font-black text-lg">– 33€</span>
                  </div>
                </div>

                {/* total */}
                <div className="flex items-center justify-between p-5 rounded-2xl bg-gradient-to-r from-[#14C774] to-[#26D885] shadow-lg shadow-primary/30 mt-2">
                  <div>
                    <div className="text-white/70 text-xs mb-0.5">Votre gain net estimé</div>
                    <div className="text-white font-extrabold text-lg">10 missions / mois</div>
                  </div>
                  <span className="text-white font-black text-3xl">297€</span>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold leading-tight">Notre modèle.</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Nous prélevons une <span className="text-foreground font-bold">commission fixe de 10%</span> par mission, et c&apos;est tout. Le reste est pour vous. Pourquoi ? Parce que votre travail a de la valeur, et nous le respectons.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-4 text-lg">
                  <CheckCircle className="text-primary w-6 h-6 shrink-0" />
                  Rémunération juste et transparente.
                </li>
                <li className="flex items-center gap-4 text-lg">
                  <CheckCircle className="text-primary w-6 h-6 shrink-0" />
                  Paiements rapides et garantis.
                </li>
                <li className="flex items-center gap-4 text-lg">
                  <CheckCircle className="text-primary w-6 h-6 shrink-0" />
                  Pas de frais d&apos;abonnement.
                </li>
              </ul>
            </div>
          </div>

          {/* Bloc 2 : Flexibilité / carte */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-4xl font-bold leading-tight">Ne travaillez que quand vous le décidez.</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ouvrez l&apos;application, repérez les véhicules autour de vous, acceptez la mission.{" "}
                <span className="text-foreground font-bold">Vos missions, votre rythme.</span>
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-4 text-lg">
                  <CheckCircle className="text-primary w-6 h-6 shrink-0" />
                  Missions claires et prédéfinies.
                </li>
                <li className="flex items-center gap-4 text-lg">
                  <CheckCircle className="text-primary w-6 h-6 shrink-0" />
                  Interventions près de chez vous ou sur votre trajet.
                </li>
                <li className="flex items-center gap-4 text-lg">
                  <CheckCircle className="text-primary w-6 h-6 shrink-0" />
                  Des revenus complémentaires à portée de main.
                </li>
              </ul>
            </div>

            {/* Visual: map mockup */}
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl bg-gradient-to-br from-slate-100 to-slate-200 p-8 flex items-center justify-center group order-1 lg:order-2">

              {/* map grid background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000A_1px,transparent_1px),linear-gradient(to_bottom,#0000000A_1px,transparent_1px)] bg-[size:32px_32px]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,#14C77420_0,transparent_60%)]" />

              {/* Fake map roads */}
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 400" fill="none">
                <path d="M0 200 Q100 180 200 200 T400 200" stroke="#94a3b8" strokeWidth="6" />
                <path d="M200 0 Q220 100 200 200 T200 400" stroke="#94a3b8" strokeWidth="6" />
                <path d="M0 300 Q150 280 250 300 T400 290" stroke="#94a3b8" strokeWidth="3" />
                <path d="M100 0 Q120 150 100 200 T110 400" stroke="#94a3b8" strokeWidth="3" />
              </svg>

              <div className="relative z-10 w-full h-full flex items-center justify-center">

                {/* Mission pins */}
                {[
                  { top: "30%", left: "25%", label: "Peugeot 208", status: "available", delay: "0s" },
                  { top: "55%", left: "60%", label: "Citroën C3", status: "available", delay: "0.3s" },
                  { top: "20%", left: "65%", label: "Renault Zoe", status: "taken", delay: "0.6s" },
                  { top: "70%", left: "35%", label: "Toyota Yaris", status: "available", delay: "0.9s" },
                ].map((pin, i) => (
                  <div
                    key={i}
                    className="absolute group/pin cursor-pointer"
                    style={{ top: pin.top, left: pin.left }}
                  >
                    <div className={`relative w-10 h-10 rounded-full border-4 border-white shadow-xl flex items-center justify-center transition-transform group-hover/pin:scale-125 ${pin.status === "available" ? "bg-[#14C774]" : "bg-slate-400"}`}
                      style={{ animationDelay: pin.delay }}>
                      <MapPin className="w-4 h-4 text-white" />
                      {pin.status === "available" && (
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#14C774] rounded-full border border-white animate-ping opacity-75" />
                      )}
                    </div>
                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover/pin:opacity-100 transition-opacity shadow-xl">
                      {pin.label}
                    </div>
                  </div>
                ))}

                {/* User location */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-5 h-5 bg-blue-500 rounded-full border-4 border-white shadow-xl">
                    <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-40" />
                  </div>
                </div>

                {/* Legend bottom */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white flex items-center gap-4">
                  <Clock className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Missions disponibles près de vous</div>
                    <div className="text-sm font-black text-slate-900">3 missions · dans un rayon de 5 km</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONVERSION BLOCK ── */}
      <div className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <section className="rounded-[3rem] bg-[#0A2E1A] text-white py-20 px-8 lg:px-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -ml-16 -mb-16" />

            <div className="relative z-10">
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-extrabold">Prêt à gagner plus ?</h2>
                <p className="text-white/70 text-lg max-w-xl mx-auto">
                  3 étapes pour commencer à recevoir vos premières missions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
                {[
                  {
                    num: "1",
                    title: "Inscription",
                    desc: "Créez votre profil et renseignez vos informations professionnelles (SIRET actif, RC Pro)."
                  },
                  {
                    num: "2",
                    title: "Validation",
                    desc: "Nous vérifions vos documents sous 48h."
                  },
                  {
                    num: "3",
                    title: "Missions",
                    desc: "Commencez à recevoir des demandes immédiatement."
                  }
                ].map((step, i) => (
                  <div key={i} className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-14 h-14 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                      <span className="text-primary font-black text-2xl">{step.num}</span>
                    </div>
                    <h4 className="font-extrabold text-lg text-white">{step.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <Button size="lg" className="h-14 px-12 text-lg rounded-full bg-primary text-white hover:bg-[#26D885] border-none shadow-[0_0_40px_rgba(20,199,116,0.3)] font-bold" asChild>
                  <Link href="/signup">Démarrer l&apos;inscription</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>

    </div>
  )
}

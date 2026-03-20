import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Wallet, Calendar, Map, CheckCircle } from "lucide-react"

export default function ProvidersPage() {
  return (
    <div className="flex flex-col w-full">
      <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#14532D] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#26D885_0,transparent_50%)] opacity-20"></div>
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-6 relative z-10">
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Générez de l&apos;argent sur<br />
            <span className="text-[#26D885] italic">votre temps libre.</span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            Nettoyez des véhicules d&apos;autopartage près de chez vous. Pas de patron, pas d&apos;horaires fixes. Inscription 100% gratuite.
          </p>
          <div className="pt-8 flex justify-center">
            <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-[#14C774] text-white hover:bg-[#26D885] border-none shadow-[0_0_30px_rgba(20,199,116,0.3)]" asChild>
              <Link href="/signup">Devenir Prestataire</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl bg-[#0F172A] p-12 flex items-center justify-center group">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#26D885]/20 rounded-full blur-[100px] animate-pulse"></div>
              
              <div className="relative z-10 w-full max-w-md flex flex-col gap-6">
                {[
                  { price: "25€", text: "Mission Standard", color: "from-slate-800 to-slate-900", accent: "text-white" },
                  { price: "- 2€", text: "Commission NEXT2YOU", color: "from-[#14C774]/20 to-[#26D885]/10 border-[#26D885]/30", accent: "text-[#26D885]" },
                  { price: "23€", text: "Votre gain net", color: "from-[#14C774] to-[#26D885]", accent: "text-white text-3xl font-black" }
                ].map((row, i) => (
                  <div key={i} className={`flex items-center justify-between p-6 rounded-2xl bg-gradient-to-r border border-white/5 shadow-xl ${row.color} transition-transform duration-500 hover:scale-105`}>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Wallet className={`w-5 h-5 ${i === 2 ? 'text-white' : 'text-slate-400'}`} />
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-slate-300 mb-1">{row.text}</div>
                      <div className={`font-bold ${row.accent}`}>{row.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Vous gardez quasiment tout.</h2>
              <p className="text-xl text-muted-foreground">Nous prélevons une <span className="text-foreground font-bold">commission fixe de 2€</span> par mission, et c&apos;est tout. Le reste est pour vous. Pourquoi ? Parce que votre travail a de la valeur, et nous le respectons.</p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-4 text-lg"><CheckCircle className="text-accent w-6 h-6" /> Rémunération juste et transparente.</li>
                <li className="flex items-center gap-4 text-lg"><CheckCircle className="text-accent w-6 h-6" /> Paiements rapides et garantis.</li>
                <li className="flex items-center gap-4 text-lg"><CheckCircle className="text-accent w-6 h-6" /> Aucuns frais d&apos;abonnement.</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row-reverse">
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl bg-gradient-to-tr from-muted to-white border border-border p-12 flex items-center justify-center group overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#26D885_0,transparent_40%)] opacity-10"></div>
              
              <div className="relative w-full aspect-[9/16] max-w-[280px] bg-white rounded-[2.5rem] shadow-2xl border-4 border-slate-900 overflow-hidden flex flex-col p-4 -rotate-6 group-hover:rotate-0 transition-transform duration-700">
                <div className="w-16 h-1 bg-slate-200 rounded-full mx-auto mb-6"></div>
                
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <div className="flex-1 h-20 bg-muted rounded-xl border border-border flex flex-col justify-between p-3">
                      <div className="w-6 h-6 rounded-full bg-[#14C774]/20 flex items-center justify-center"><Calendar className="w-3 h-3 text-[#14C774]" /></div>
                      <div className="w-10 h-2 bg-slate-300 rounded-full"></div>
                    </div>
                    <div className="flex-1 h-20 bg-[#14C774] rounded-xl shadow-[0_4px_20px_rgba(20,199,116,0.3)] flex flex-col justify-between p-3">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center"><Map className="w-3 h-3 text-white" /></div>
                      <div className="w-12 h-2 bg-white/80 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="w-full h-32 bg-slate-100 rounded-xl border border-border relative overflow-hidden">
                    <div className="absolute top-4 left-4 w-4 h-4 rounded-full bg-[#26D885] border-2 border-white shadow-sm ring-4 ring-[#26D885]/20 animate-pulse"></div>
                    <div className="absolute bottom-4 right-8 w-4 h-4 rounded-full bg-slate-400 border-2 border-white shadow-sm"></div>
                  </div>
                  
                  <div className="w-full h-12 bg-slate-900 rounded-xl mt-auto flex items-center justify-center">
                    <div className="w-1/2 h-2 bg-white/20 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Ne travaillez que quand vous le décidez.</h2>
              <p className="text-xl text-muted-foreground">Ouvrez l&apos;application, repérez les véhicules à préparer autour de vous, acceptez la mission. <span className="text-foreground font-bold">Vos règles, votre rythme.</span></p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-4 text-lg"><CheckCircle className="text-accent w-6 h-6" /> Missions claires : nettoyage simple et photos.</li>
                <li className="flex items-center gap-4 text-lg"><CheckCircle className="text-accent w-6 h-6" /> Interventions près de chez vous ou sur votre trajet.</li>
                <li className="flex items-center gap-4 text-lg"><CheckCircle className="text-accent w-6 h-6" /> Notez les loueurs et construisez votre réputation.</li>
              </ul>
            </div>
          </div>
        </div>

      </section>

      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-6 text-center space-y-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Prêt à sauter le pas ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
             <div className="space-y-4">
               <div className="text-primary text-4xl font-bold">1</div>
               <h4 className="font-bold">Inscription</h4>
               <p className="text-sm text-muted-foreground text-pretty">Créez votre profil et renseignez vos informations pro.</p>
             </div>
             <div className="space-y-4">
               <div className="text-primary text-4xl font-bold">2</div>
               <h4 className="font-bold">Validation</h4>
               <p className="text-sm text-muted-foreground">Nous vérifions vos documents sous 48h.</p>
             </div>
             <div className="space-y-4">
               <div className="text-primary text-4xl font-bold">3</div>
               <h4 className="font-bold">Missions</h4>
               <p className="text-sm text-muted-foreground">Commencez à recevoir des demandes immédiatement.</p>
             </div>
          </div>
          <Button size="lg" className="bg-primary text-white" asChild>
            <Link href="/signup">Démarrer l&apos;onboarding</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

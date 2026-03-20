import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { ShieldCheck, Zap } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-80px)]">
      {/* Transverse Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#0A2E1A] text-white">
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white mb-8 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-[#26D885] animate-ping"></span>
            Plateforme d&apos;entretien n°1
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-4xl text-balance">
            L&apos;entretien de véhicules partagés, simplifié.
          </h1>
          
          <p className="mt-8 text-xl text-white/80 leading-relaxed max-w-2xl text-balance">
            La plateforme spécialisée. Développez l&apos;activité de votre flotte sans vous épuiser, ou générez des revenus sur votre temps libre en devenant préparateur.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10 w-full sm:w-auto">
            <Button size="lg" className="text-lg px-8 h-14 rounded-full shadow-[0_0_30px_rgba(20,199,116,0.3)] hover:shadow-[0_0_40px_rgba(20,199,116,0.5)] transition-all bg-[#14C774] text-white hover:bg-[#26D885] border-none" asChild>
              <Link href="/owners">Je suis Loueur</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 h-14 rounded-full border-white/20 hover:bg-white/10 text-white transition-all bg-transparent" asChild>
              <Link href="/providers">Je suis Prestataire</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Hub Cards Section */}
      <section className="py-24 bg-muted/30 flex-1">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight">Une solution pensée pour vous.</h2>
            <p className="text-xl text-muted-foreground mt-4">Choisissez votre profil pour découvrir vos avantages.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Owner Hub Card */}
            <div className="group relative rounded-3xl bg-white p-10 shadow-xl border border-border/50 hover:border-primary/50 transition-all flex flex-col items-center text-center overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-[#14C774]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                 <ShieldCheck className="w-10 h-10 text-primary" />
               </div>
               <h3 className="text-3xl font-bold mb-4">Pour les Loueurs</h3>
               <p className="text-muted-foreground text-lg mb-8 text-balance">
                 Ne perdez plus votre temps entre deux locations. Déléguez la préparation de vos véhicules à des experts fiables et concentrez-vous sur la rentabilité.
               </p>
               <Button variant="outline" className="mt-auto rounded-full px-8 h-12 text-base font-semibold group-hover:bg-primary group-hover:text-white transition-colors" asChild>
                 <Link href="/owners">Découvrir les avantages</Link>
               </Button>
            </div>
            
            {/* Provider Hub Card */}
            <div className="group relative rounded-3xl bg-[#0F172A] p-10 shadow-xl border border-border/50 hover:border-accent/50 transition-all flex flex-col items-center text-center overflow-hidden text-white">
               <div className="absolute inset-0 bg-gradient-to-br from-[#26D885]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                 <Zap className="w-10 h-10 text-accent" />
               </div>
               <h3 className="text-3xl font-bold mb-4">Pour les Prestataires</h3>
               <p className="text-white/70 text-lg mb-8 text-balance">
                 Générez des revenus sur votre temps libre en préparant des véhicules près de chez vous. Vos règles, votre rythme, en toute simplicité.
               </p>
               <Button className="mt-auto rounded-full px-8 h-12 text-base font-semibold bg-accent text-accent-foreground hover:bg-accent/90 transition-colors" asChild>
                 <Link href="/providers">Voir comment ça marche</Link>
               </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

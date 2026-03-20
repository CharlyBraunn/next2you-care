/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Wallet, Calendar, Map, TrendingUp, Handshake, CheckCircle } from "lucide-react"

export default function ProvidersPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-6">
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight">
            Générez de l&apos;argent sur<br />
            <span className="text-primary italic">votre temps libre.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Nettoyez des véhicules d&apos;autopartage près de chez vous. Pas de patron, pas d&apos;horaires fixes. Inscription 100% gratuite.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-accent text-accent-foreground hover:bg-accent/90" asChild>
              <Link href="/signup">Devenir Prestataire</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=1600&auto=format&fit=crop" alt="Cleaner smiling" className="w-full h-full object-cover" />
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
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1542382103-62c47c729577?q=80&w=1600&auto=format&fit=crop" alt="App showing map" className="w-full h-full object-cover" />
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

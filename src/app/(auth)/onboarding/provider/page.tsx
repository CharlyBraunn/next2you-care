import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import Link from "next/link"

export default function ProviderOnboarding() {
  return (
    <div className="space-y-8 max-w-xl mx-auto py-12 px-6">
      <div className="space-y-2">
        <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-accent-foreground">
          <span>Étape 1 sur 2</span>
          <span>Votre Profil Expert</span>
        </div>
        <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
           <div className="h-full bg-accent w-1/2"></div>
        </div>
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight">Prêt à <span className="text-accent italic">performer</span> ?</h1>
        <p className="text-muted-foreground text-pretty">Complétez vos informations pour accéder aux missions près de chez vous.</p>
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold">Numéro SIRET</label>
            <Input placeholder="123 456 789 00000" required />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold">Zone d&apos;intervention</label>
            <Input placeholder="Bordeaux + 20km" required />
          </div>
        </div>
        
        <div className="space-y-4">
          <label className="text-sm font-semibold">Prestations proposées</label>
          <div className="grid grid-cols-1 gap-3">
             {[
               "Nettoyage Intérieur / Extérieur",
               "Lavage Sans Eau (Éco)",
               "Préparation esthétique (Detailing)",
               "Check-up technique & Niveaux",
               "Convoyage de proximité"
             ].map((service) => (
               <div key={service} className="flex items-center gap-3 p-4 border-2 rounded-2xl hover:bg-muted/50 cursor-pointer">
                 <input type="checkbox" className="w-5 h-5 accent-accent" />
                 <span className="text-sm font-medium">{service}</span>
               </div>
             ))}
          </div>
        </div>

        <div className="pt-4 flex items-center justify-between">
           <Link href="/signup" className="text-sm font-medium text-muted-foreground hover:text-foreground">Retour</Link>
           <Button className="px-12 bg-accent text-accent-foreground hover:bg-accent/80" size="lg" asChild>
             <Link href="/provider">Lancer mon activité</Link>
           </Button>
        </div>
      </form>
    </div>
  )
}

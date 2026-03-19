import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Building2, UserCircle2 } from "lucide-react"

export default function SignupPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2 text-center lg:text-left">
        <h1 className="text-3xl font-extrabold tracking-tight">Créer un compte.</h1>
        <p className="text-muted-foreground">Choisissez votre profil pour commencer l&apos;aventure.</p>
      </div>
      
      <div className="grid gap-4">
        <Link href="/onboarding/client">
          <Card className="p-6 transition-all hover:border-primary hover:bg-primary/5 group cursor-pointer border-2 border-transparent bg-muted/30">
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-2xl shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-lg">Je suis un Loueur</h3>
                <p className="text-sm text-muted-foreground">Je souhaite commander des prestations pour ma flotte de véhicules.</p>
              </div>
            </div>
          </Card>
        </Link>

        <Link href="/onboarding/provider">
          <Card className="p-6 transition-all hover:border-accent hover:bg-accent/5 group cursor-pointer border-2 border-transparent bg-muted/30">
            <div className="flex items-start gap-4">
              <div className="bg-white p-3 rounded-2xl shadow-sm group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <UserCircle2 className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-lg">Je suis Prestataire</h3>
                <p className="text-sm text-muted-foreground">Je suis auto-entrepreneur et je souhaite réaliser des missions.</p>
              </div>
            </div>
          </Card>
        </Link>
      </div>

      <p className="text-center text-sm text-muted-foreground">
        Déjà un compte ? <Link href="/login" className="text-primary font-bold hover:underline">Se connecter</Link>
      </p>
    </div>
  )
}

import Link from "next/link"
import { Logo } from "@/components/marketing/Logo"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col p-8 lg:p-12 justify-between bg-white">
        <Link href="/">
          <Logo />
        </Link>
        <div className="w-full max-w-md mx-auto space-y-8 py-12">
          {children}
        </div>
        <div className="text-sm text-muted-foreground">
          © 2026 NEXT2YOU Care.
        </div>
      </div>
      <div className="hidden lg:flex bg-primary p-20 flex-col justify-end text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605164599901-f8901607f276?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="space-y-6 relative z-10">
          <h2 className="text-4xl font-bold font-serif leading-tight">La plateforme qui redéfinit l&apos;entretien de votre flotte.</h2>
          <p className="text-xl text-primary-foreground/80 max-w-lg">
            "Depuis que nous utilisons NEXT2YOU Care, nous avons réduit notre temps de préparation de 40%."
          </p>
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">MK</div>
             <div>
               <p className="font-bold">Marc Lefebvre</p>
               <p className="text-sm opacity-80">Directeur Flotte, CityMove</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

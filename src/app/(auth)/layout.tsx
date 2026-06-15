import Link from "next/link"
import { Logo } from "@/components/marketing/Logo"
import { CheckCircle, Star } from "lucide-react"
import { RealtimeMissionCounter } from "@/components/auth/RealtimeMissionCounter"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left — form */}
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

      {/* Right — conversion panel */}
      <div className="hidden lg:flex bg-[#0A2E1A] flex-col justify-center items-center text-white relative overflow-hidden p-14 text-center">
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#26D885_0,transparent_55%)] opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />

        {/* Main content */}
        <div className="relative z-10 space-y-12 max-w-lg w-full">
          
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-white/80 backdrop-blur-sm mx-auto">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Plateforme 100% française
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight">
              Le réseau <span className="text-[#26D885]">NEXT2YOU Care</span>
            </h2>
            <p className="text-lg text-white/70">
              La plateforme qui redéfinit l&apos;entretien de vos véhicules partagés.
            </p>
          </div>

          <RealtimeMissionCounter />

          {/* Testimonial */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4 text-left">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-primary fill-primary" />
              ))}
            </div>
            <p className="text-sm text-white/80 leading-relaxed italic">
              &ldquo;Depuis que nous utilisons NEXT2YOU Care, nous avons réduit notre temps de préparation de 40%.&rdquo;
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-full bg-primary/30 border border-primary/40 flex items-center justify-center text-sm font-black text-primary">
                ML
              </div>
              <div>
                <p className="text-sm font-bold text-white">Marc Lefebvre</p>
                <p className="text-xs text-white/50">Directeur Flotte, CityMove</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

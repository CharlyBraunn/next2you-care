import Link from "next/link"
import { Logo } from "@/components/marketing/Logo"
import { CheckCircle, Star } from "lucide-react"

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
      <div className="hidden lg:flex bg-[#0A2E1A] flex-col justify-between text-white relative overflow-hidden p-14">
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#26D885_0,transparent_55%)] opacity-15" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

        {/* Top logo area */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-white/80 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Plateforme 100% française
          </div>
        </div>

        {/* Main content */}
        <div className="relative z-10 space-y-10">
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold leading-tight">
              La plateforme qui redéfinit la préparation de vos véhicules.
            </h2>

            {/* Dual value props */}
            <div className="grid grid-cols-1 gap-4">
              {/* For owners */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-xs font-black">L</span>
                  </div>
                  <span className="text-sm font-bold text-white/90">Pour les Loueurs</span>
                </div>
                <ul className="space-y-2">
                  {[
                    "Véhicule prêt à relouer en moins d'1h",
                    "Preuves photos à chaque mission",
                    "0 déplacement, 0 stress",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-white/70">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* For providers */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">
                    <span className="text-white/80 text-xs font-black">P</span>
                  </div>
                  <span className="text-sm font-bold text-white/90">Pour les Prestataires</span>
                </div>
                <ul className="space-y-2">
                  {[
                    "Missions flexibles, près de chez vous",
                    "Paiements rapides et garantis",
                    "Inscrivez-vous gratuitement en 5 min",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-white/70">
                      <CheckCircle className="w-4 h-4 text-white/40 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-primary fill-primary" />
              ))}
            </div>
            <p className="text-sm text-white/80 leading-relaxed italic">
              &ldquo;Depuis que nous utilisons NEXT2YOU Care, nous avons réduit notre temps de préparation de 40%.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary/30 border border-primary/40 flex items-center justify-center text-sm font-black text-primary">
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

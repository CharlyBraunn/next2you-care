import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { ShieldCheck, MapPin, Wrench, CheckCircle2, Star, User } from "lucide-react"

export default function ProviderProfilePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      <div className="flex flex-col md:flex-row items-center gap-8 py-8 border-b">
         <div className="relative group">
            <div className="w-24 h-24 rounded-[2rem] bg-accent text-accent-foreground flex items-center justify-center text-3xl font-black shadow-xl shadow-accent/20">
               CB
            </div>
            <button className="absolute -bottom-2 -right-2 bg-white p-2 rounded-xl shadow-lg border hover:bg-muted transition-colors">
               <User className="w-4 h-4" />
            </button>
         </div>
         <div className="text-center md:text-left space-y-1">
            <h1 className="text-3xl font-extrabold tracking-tight flex items-center gap-3 justify-center md:justify-start">
               Charly Braunn
               <ShieldCheck className="w-6 h-6 text-primary fill-primary/10" />
            </h1>
            <p className="text-muted-foreground font-medium">Expert en Nettoyage Écologique • Membre depuis Janvier 2026</p>
            <div className="flex items-center gap-4 pt-2 justify-center md:justify-start">
               <div className="flex items-center gap-1.5 text-sm font-bold">
                  <Star className="w-4 h-4 text-amber-500 fill-current" /> 4.9 (124 avis)
               </div>
               <div className="w-1.5 h-1.5 rounded-full bg-muted"></div>
               <div className="text-sm font-bold text-accent-foreground">Certification Luxe</div>
            </div>
         </div>
         <div className="md:ml-auto flex gap-3">
            <Button variant="outline" size="sm" className="rounded-xl">Voir Profil Public</Button>
            <Button size="sm" className="rounded-xl">Modifier mon profil</Button>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="md:col-span-2 space-y-8">
            <section className="space-y-4">
               <h3 className="text-xl font-bold">Informations professionnelles</h3>
               <Card className="border-none shadow-sm p-6 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Numéro SIRET</label>
                        <Input defaultValue="123 456 789 00012" readOnly className="bg-muted/30" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Téléphone</label>
                        <Input defaultValue="+33 6 12 34 56 78" />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Bio</label>
                     <textarea className="flex min-h-[100px] w-full rounded-2xl border border-input bg-transparent px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" defaultValue="Spécialiste du detailing mobile avec 5 ans d'expérience. J'utilise uniquement des produits biodégradables." />
                  </div>
               </Card>
            </section>

            <section className="space-y-4">
               <h3 className="text-xl font-bold">Zone d&apos;intervention</h3>
               <Card className="border-none shadow-sm p-6 space-y-4">
                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-xl text-primary font-bold"><MapPin className="w-5 h-5" /></div>
                        <div>
                           <p className="font-bold">Paris & Petite Couronne</p>
                           <p className="text-xs text-muted-foreground">Rayon de 15km autour du centre</p>
                        </div>
                     </div>
                     <Button variant="ghost" size="sm" className="text-xs font-bold text-primary">Modifier</Button>
                  </div>
                  <div className="h-32 bg-muted rounded-2xl flex items-center justify-center text-muted-foreground text-xs font-medium border-2 border-dashed">
                     (Aperçu de la carte)
                  </div>
               </Card>
            </section>
         </div>

         <div className="space-y-6">
            <Card className="border-none shadow-sm p-6 space-y-4">
               <h4 className="font-bold">Statut de validation</h4>
               <div className="space-y-3">
                  {[
                     { label: "Identité", status: "Vérifié" },
                     { label: "SIRET / K-bis", status: "Vérifié" },
                     { label: "RC PRO", status: "Vérifié" },
                     { label: "Compte Bancaire", status: "Vérifié" },
                  ].map((doc, i) => (
                    <div key={i} className="flex items-center justify-between text-sm">
                       <span className="text-muted-foreground">{doc.label}</span>
                       <span className="flex items-center gap-1 text-primary font-bold">
                          <CheckCircle2 className="w-3 h-3" /> {doc.status}
                       </span>
                    </div>
                  ))}
               </div>
            </Card>

            <Card className="border-none shadow-sm p-6 space-y-4 bg-foreground text-background">
               <h4 className="font-bold text-white">Équipement</h4>
               <div className="space-y-2">
                  {["Aspirateur pro", "Nettoyeur vapeur", "Produits éco-certifiés", "Véhicule perso"].map((gear) => (
                    <div key={gear} className="flex items-center gap-2 text-xs opacity-80">
                       <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                       {gear}
                    </div>
                  ))}
               </div>
            </Card>
         </div>
      </div>
    </div>
  )
}

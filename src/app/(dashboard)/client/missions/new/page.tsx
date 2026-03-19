"use client" // Since it's a form with interactivity

import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card"
import { MapPin, Calendar, Clock, Car, Info, Sparkles, Fuel, Camera, ShieldAlert } from "lucide-react"

export default function NewMissionPage() {
  const prestations = [
    { icon: Sparkles, label: "Nettoyage Intérieur Complet", desc: "Aspiration, plastiques, vitres, tissus/cuirs" },
    { icon: Fuel, label: "Mise à niveau carburant", desc: "Plein ou appoint selon consigne" },
    { icon: Clock, label: "Préparation entre 2 loc.", desc: "Nettoyage rapide + check-up niveaux" },
    { icon: Camera, label: "État des lieux photo", desc: "Inspection complète avec photos certifiées" },
    { icon: ShieldAlert, label: "Nettoyage Extérieur", desc: "Lavage carrosserie et jantes" },
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight">Nouvelle <span className="text-primary italic">Mission</span></h1>
        <p className="text-muted-foreground">Remplissez les détails pour commander une prestation.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-none shadow-sm p-6 space-y-6">
             <div className="space-y-4">
                <h4 className="font-bold flex items-center gap-2">
                  <Car className="w-4 h-4 text-primary" />
                  Véhicule & Lieu
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">Plaque ou Nom</label>
                      <Input placeholder="AA-123-BB" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">Modèle (Optionnel)</label>
                      <Input placeholder="Peugeot 208" />
                   </div>
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-medium text-muted-foreground">Adresse d&apos;intervention</label>
                   <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input className="pl-10" placeholder="12 Rue du Maine, 75014 Paris" />
                   </div>
                </div>
             </div>

             <div className="space-y-4 pt-4 border-t">
                <h4 className="font-bold flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  Date & Créneau
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="space-y-2">
                      <Input type="date" />
                   </div>
                   <div className="space-y-2">
                      <select className="flex h-11 w-full rounded-2xl border border-input bg-transparent px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                         <option>Matin (08h - 12h)</option>
                         <option>Après-midi (14h - 18h)</option>
                         <option>Soir (19h - 22h)</option>
                         <option>ASAP (Urgent)</option>
                      </select>
                   </div>
                </div>
             </div>

             <div className="space-y-4 pt-4 border-t">
                <h4 className="font-bold flex items-center gap-2">
                  <Info className="w-4 h-4 text-primary" />
                  Consignes Particulières
                </h4>
                <textarea 
                  className="flex min-h-[100px] w-full rounded-2xl border border-input bg-transparent px-4 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  placeholder="Ex: Le code de la barrière est 1234. La clé est dans la boîte à gants."
                />
             </div>
          </Card>

          <div className="flex justify-end gap-4">
             <Button variant="outline" size="lg">Annuler</Button>
             <Button size="lg" className="px-12">Publier la mission</Button>
          </div>
        </div>

        <div className="space-y-6">
           <Card className="border-none shadow-sm p-6 overflow-hidden">
              <h4 className="font-bold mb-4">Type de prestation</h4>
              <div className="space-y-3">
                 {prestations.map((p, i) => (
                    <div key={i} className="group cursor-pointer">
                       <input type="radio" name="prestation" id={`p-${i}`} className="peer sr-only" />
                       <label htmlFor={`p-${i}`} className="flex items-start gap-3 p-3 rounded-2xl border-2 border-transparent peer-checked:border-primary peer-checked:bg-primary/5 hover:bg-muted/50 transition-all">
                          <div className="bg-primary/10 text-primary p-2 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                             <p.icon className="w-4 h-4" />
                          </div>
                          <div>
                             <p className="text-sm font-bold leading-none mb-1">{p.label}</p>
                             <p className="text-[10px] text-muted-foreground line-clamp-1">{p.desc}</p>
                          </div>
                       </label>
                    </div>
                 ))}
              </div>
           </Card>

           <Card className="border-none shadow-sm p-6 bg-muted/30">
              <h4 className="font-bold mb-2">Récapitulatif</h4>
              <div className="space-y-2 text-sm">
                 <div className="flex justify-between">
                    <span className="text-muted-foreground">Prestation</span>
                    <span className="font-medium">—</span>
                 </div>
                 <div className="flex justify-between">
                    <span className="text-muted-foreground">Frais de service</span>
                    <span className="font-medium">2.00€</span>
                 </div>
                 <div className="pt-2 border-t flex justify-between font-bold text-lg">
                    <span>Total estimé</span>
                    <span className="text-primary">—€</span>
                 </div>
              </div>
           </Card>
        </div>
      </div>
    </div>
  )
}

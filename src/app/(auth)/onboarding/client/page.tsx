'use client'

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card } from "@/components/ui/Card"
import Link from "next/link"
import { X } from "lucide-react"

export default function ClientOnboarding() {
  const [step, setStep] = useState(1)
  const [ownerType, setOwnerType] = useState<'particulier' | 'entreprise'>('entreprise')
  const [fleetSize, setFleetSize] = useState<number | '20+'>(1)
  const [cleaningFrequency, setCleaningFrequency] = useState<string>("Après chaque location")
  const [cities, setCities] = useState<string[]>([])
  const [cityInput, setCityInput] = useState("")

  const addCity = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const val = cityInput.trim()
      if (val && !cities.includes(val)) {
        setCities([...cities, val])
        setCityInput("")
      }
    }
  }

  const removeCity = (cityToRemove: string) => {
    setCities(cities.filter(c => c !== cityToRemove))
  }

  const handleNext = () => setStep(2)
  const handleBack = () => setStep(1)

  return (
    <div className="space-y-8 max-w-xl mx-auto py-12 px-6">
      <div className="space-y-2">
        <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-primary">
          <span>Étape {step} sur 2</span>
          <span>{step === 1 ? 'Votre Flotte' : 'Vos Informations'}</span>
        </div>
        <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
           <div className={`h-full bg-primary transition-all duration-300 ${step === 1 ? 'w-1/2' : 'w-full'}`}></div>
        </div>
      </div>

      <div className="space-y-2">
        {step === 1 ? (
          <>
            <h1 className="text-3xl font-extrabold tracking-tight">Parlez-nous de votre <span className="text-primary italic">flotte</span>.</h1>
            <p className="text-muted-foreground text-pretty">Ces informations nous aident à personnaliser votre espace de gestion.</p>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-extrabold tracking-tight">Dites-nous en plus sur <span className="text-primary italic">vous</span>.</h1>
            <p className="text-muted-foreground text-pretty">Dernière étape avant d&apos;accéder à votre tableau de bord.</p>
          </>
        )}
      </div>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        {step === 1 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Owner Type */}
            <div className="flex p-1 bg-slate-100 rounded-lg">
              <button
                type="button"
                onClick={() => setOwnerType('entreprise')}
                className={`flex-1 py-2.5 text-sm font-bold rounded-md transition-all ${ownerType === 'entreprise' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
              >
                Entreprise
              </button>
              <button
                type="button"
                onClick={() => setOwnerType('particulier')}
                className={`flex-1 py-2.5 text-sm font-bold rounded-md transition-all ${ownerType === 'particulier' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
              >
                Particulier
              </button>
            </div>

            {/* Fleet Size */}
            <div className="space-y-4">
              <label className="text-sm font-semibold">Taille de la flotte</label>
              <div className="flex items-center gap-4">
                <div className="flex-1 relative">
                  <Input 
                    type="number" 
                    min={1} 
                    max={20} 
                    value={fleetSize === '20+' ? '' : fleetSize}
                    onChange={(e) => {
                      if (e.target.value === '') {
                        setFleetSize(1)
                        return
                      }
                      const val = parseInt(e.target.value)
                      if (!isNaN(val) && val >= 1 && val <= 20) {
                        setFleetSize(val)
                      }
                    }}
                    placeholder="Ex: 5"
                    className="pr-12 text-lg h-12"
                    disabled={fleetSize === '20+'}
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm font-medium">véh.</span>
                </div>
                <div className="text-muted-foreground font-semibold">ou</div>
                <button
                  type="button"
                  onClick={() => setFleetSize(fleetSize === '20+' ? 1 : '20+')}
                  className={`h-12 px-6 border-2 rounded-xl text-sm font-bold transition-all ${fleetSize === '20+' ? 'border-primary bg-primary/5 text-primary' : 'border-border hover:bg-muted/50'}`}
                >
                  20+ véh.
                </button>
              </div>
            </div>

            {/* Cleaning Frequency */}
            <div className="space-y-4">
              <label className="text-sm font-semibold">Fréquence du besoin de nettoyage</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                 {["Après chaque location", "Hebdomadaire", "À la demande"].map((freq) => (
                   <div key={freq} className="relative">
                     <input 
                        type="radio" 
                        name="cleaning-frequency" 
                        value={freq} 
                        id={`freq-${freq}`} 
                        checked={cleaningFrequency === freq}
                        onChange={() => setCleaningFrequency(freq)}
                        className="peer sr-only" 
                      />
                     <label htmlFor={`freq-${freq}`} className="flex items-center justify-center p-3 text-xs sm:text-sm font-medium border-2 rounded-2xl cursor-pointer peer-checked:border-primary peer-checked:bg-primary/5 hover:bg-muted/50 transition-all text-center h-full">
                       {freq}
                     </label>
                   </div>
                 ))}
              </div>
            </div>

            {/* Cities */}
            <div className="space-y-4">
              <label className="text-sm font-semibold">Localisation des véhicules</label>
              <Input 
                type="text" 
                placeholder="Ex: Paris, Lyon (Appuyez sur Entrée)" 
                value={cityInput}
                onChange={(e) => setCityInput(e.target.value)}
                onKeyDown={addCity}
              />
              {cities.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {cities.map(city => (
                    <div key={city} className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                      {city}
                      <button type="button" onClick={() => removeCity(city)} className="hover:bg-primary/20 rounded-full p-0.5 transition-colors">
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-4 flex items-center justify-between">
               <Link href="/signup" className="text-sm font-medium text-muted-foreground hover:text-foreground">Annuler</Link>
               <Button className="px-12" size="lg" onClick={handleNext}>
                 Suivant
               </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
            
            {ownerType === 'entreprise' ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Nom de l&apos;entreprise</label>
                    <Input placeholder="Next2You Fleet" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Numéro SIRET</label>
                    <Input placeholder="123 456 789 00012" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Prénom du gérant</label>
                    <Input placeholder="Jean" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Nom du gérant</label>
                    <Input placeholder="Dupont" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Numéro de téléphone</label>
                  <Input type="tel" placeholder="+33 6 12 34 56 78" required />
                </div>
              </>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Prénom</label>
                    <Input placeholder="Jean" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Nom</label>
                    <Input placeholder="Dupont" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Numéro de téléphone</label>
                  <Input type="tel" placeholder="+33 6 12 34 56 78" required />
                </div>
              </>
            )}

            <div className="pt-4 flex items-center justify-between">
               <button type="button" onClick={handleBack} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                 Retour
               </button>
               <Button className="px-10" size="lg" asChild>
                 <Link href="/client">Terminer l&apos;inscription</Link>
               </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}

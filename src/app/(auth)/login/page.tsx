'use client'

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"

export default function LoginPage() {
  const [role, setRole] = useState<'owner' | 'provider'>('owner')

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-extrabold tracking-tight">Bon retour parmi nous.</h1>
        <p className="text-muted-foreground">Connectez-vous pour gérer vos missions et votre {role === 'owner' ? 'flotte' : 'activité'}.</p>
      </div>

      <div className="flex p-1 bg-slate-100 rounded-lg">
        <button
          type="button"
          onClick={() => setRole('owner')}
          className={`flex-1 py-2.5 text-sm font-bold rounded-md transition-all ${role === 'owner' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
        >
          Loueur
        </button>
        <button
          type="button"
          onClick={() => setRole('provider')}
          className={`flex-1 py-2.5 text-sm font-bold rounded-md transition-all ${role === 'provider' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}
        >
          Prestataire
        </button>
      </div>

      <form className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-semibold">Email</label>
          <Input type="email" placeholder="nom@entreprise.com" required />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
             <label className="text-sm font-semibold">Mot de passe</label>
             <Link href="/forgot" className="text-xs text-primary hover:underline">Oublié ?</Link>
          </div>
          <Input type="password" placeholder="••••••••" required />
        </div>
        <Button className="w-full" size="lg">Se connecter</Button>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-muted-foreground tracking-widest">Ou continuer avec</span>
        </div>
      </div>
      <Button variant="outline" className="w-full" size="lg">S&apos;inscrire</Button>
      <p className="text-center text-xs text-muted-foreground">
        En vous connectant, vous acceptez nos <Link href="/terms" className="underline">CGU</Link> et notre <Link href="/privacy" className="underline">Politique de confidentialité</Link>.
      </p>
    </div>
  )
}

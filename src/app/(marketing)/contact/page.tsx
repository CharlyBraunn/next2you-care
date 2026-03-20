import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Card } from "@/components/ui/Card"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full pb-20">
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 text-center max-w-3xl space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">Contactez-<span className="text-accent italic">nous</span></h1>
          <p className="text-xl text-primary-foreground/90">Une question, un projet ou besoin d&apos;une démo personnalisée ?</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-8">
               <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Nos coordonnées</h3>
                  <p className="text-muted-foreground">Discutez avec notre équipe d&apos;experts pour trouver la meilleure solution pour votre flotte.</p>
               </div>
               
               <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-2xl text-primary">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground">Email</p>
                      <p className="font-medium">contact@next2you-care.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-2xl text-primary">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground">Téléphone</p>
                      <p className="font-medium">+33 1 23 45 67 89</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-2xl text-primary">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground">Siège Social</p>
                      <p className="font-medium">24 Rue de la Paix, 75002 Paris</p>
                    </div>
                  </div>
               </div>
            </div>

            <Card className="lg:col-span-2 p-8 rounded-[2rem] border-border/50">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nom Complet</label>
                    <Input placeholder="Jean Dupont" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Adresse Email</label>
                    <Input type="email" placeholder="jean@societe.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Société (Optionnel)</label>
                    <Input placeholder="Next2You Fleet" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Type de profil</label>
                    <select className="flex h-11 w-full rounded-2xl border border-input bg-transparent px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                      <option>Loueur / Gestionnaire</option>
                      <option>Prestataire / Indépendant</option>
                      <option>Autre</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea 
                    className="flex min-h-[150px] w-full rounded-2xl border border-input bg-transparent px-4 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Comment pouvons-nous vous aider ?"
                  />
                </div>
                <Button className="w-full md:w-fit px-12 gap-2">
                   Envoyer le message
                   <Send className="w-4 h-4" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

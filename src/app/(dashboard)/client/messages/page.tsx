import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Search, Send, User, MoreVertical, Paperclip, Phone, Video } from "lucide-react"

export default function MessagesPage() {
  const contacts = [
    { name: "Charly Braunn", lastMsg: "Je suis arrivé sur place.", time: "14:02", active: true, unread: 1 },
    { name: "Sophie Laurent", lastMsg: "Photos envoyées, à bientôt !", time: "11:50", active: false, unread: 0 },
    { name: "Thomas Roux", lastMsg: "C'est possible de décaler ?", time: "Hier", active: false, unread: 0 },
  ]

  return (
    <div className="h-[calc(100vh-10rem)] flex gap-6">
       {/* Sidebar */}
       <Card className="w-80 flex flex-col border-none shadow-sm overflow-hidden bg-white">
          <div className="p-6 space-y-4">
             <h2 className="text-xl font-bold">Messages</h2>
             <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input className="pl-10 h-10 bg-muted/30 border-none" placeholder="Chercher un contact..." />
             </div>
          </div>
          <div className="flex-1 overflow-y-auto divide-y divide-muted/50">
             {contacts.map((c, i) => (
                <div key={i} className={`px-6 py-4 flex gap-3 hover:bg-muted/30 transition-colors cursor-pointer ${c.active ? 'bg-primary/5' : ''}`}>
                   <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center font-bold text-xs shrink-0">
                      {c.name.substring(0, 2).toUpperCase()}
                   </div>
                   <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline mb-0.5">
                         <h4 className="text-sm font-bold truncate">{c.name}</h4>
                         <span className="text-[10px] text-muted-foreground">{c.time}</span>
                      </div>
                      <p className={`text-xs truncate ${c.unread ? 'text-foreground font-bold' : 'text-muted-foreground'}`}>
                         {c.lastMsg}
                      </p>
                   </div>
                </div>
             ))}
          </div>
       </Card>

       {/* Conversation */}
       <Card className="flex-1 flex flex-col border-none shadow-sm overflow-hidden bg-white">
          <div className="px-8 py-4 border-b flex items-center justify-between">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-bold text-xs ring-4 ring-primary/10">
                   CB
                </div>
                <div>
                   <h3 className="text-sm font-bold">Charly Braunn</h3>
                   <div className="flex items-center gap-1.5 text-[10px] text-emerald-600 font-bold uppercase tracking-widest">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></div>
                      En ligne
                   </div>
                </div>
             </div>
             <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground"><Phone className="w-4 h-4" /></Button>
                <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground"><Video className="w-4 h-4" /></Button>
                <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground border-l ml-2"><MoreVertical className="w-4 h-4" /></Button>
             </div>
          </div>

          <div className="flex-1 p-8 overflow-y-auto space-y-6 bg-muted/5">
             <div className="flex justify-center">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground py-1 px-3 bg-muted rounded-full">Aujourd&apos;hui</span>
             </div>
             
             <div className="flex gap-3 max-w-[70%]">
                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center font-bold text-[10px] shrink-0 self-end">CB</div>
                <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm text-sm leading-relaxed">
                   Bonjour ! J&apos;ai bien reçu la mission pour la Peugeot 208 immatriculée AA-123-BB. Je suis en route.
                </div>
             </div>

             <div className="flex gap-3 max-w-[70%] ml-auto flex-row-reverse text-white">
                <div className="bg-primary p-4 rounded-2xl rounded-br-none shadow-md text-sm leading-relaxed">
                   Super, merci Charly. N&apos;oubliez pas de prendre une photo de l&apos;intérieur avant de commencer.
                </div>
             </div>

             <div className="flex gap-3 max-w-[70%]">
                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center font-bold text-[10px] shrink-0 self-end">CB</div>
                <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm text-sm leading-relaxed">
                   Je suis arrivé sur place. C&apos;est fait, photos ajoutées à la mission ! 👍
                </div>
             </div>
          </div>

          <div className="p-6 border-t">
             <div className="flex gap-4 items-center bg-muted/30 p-2 rounded-2xl border-2 border-transparent focus-within:border-primary/20 focus-within:bg-white transition-all">
                <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground shrink-0"><Paperclip className="w-4 h-4" /></Button>
                <input 
                   placeholder="Écrire un message..." 
                   className="flex-1 bg-transparent border-none text-sm focus:outline-none"
                />
                <Button className="h-10 w-10 p-0 rounded-xl shrink-0">
                   <Send className="w-4 h-4" />
                </Button>
             </div>
          </div>
       </Card>
    </div>
  )
}

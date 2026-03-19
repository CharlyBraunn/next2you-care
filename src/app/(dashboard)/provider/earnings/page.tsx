import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Wallet, TrendingUp, Download, ArrowUpRight, Calendar, CreditCard } from "lucide-react"

export default function EarningsPage() {
  const transactions = [
    { date: "19 Mars", mission: "M-482", amount: "+45.00€", status: "Confirmé" },
    { date: "18 Mars", mission: "M-480", amount: "+40.00€", status: "Confirmé" },
    { date: "17 Mars", mission: "M-478", amount: "+35.00€", status: "Confirmé" },
    { date: "15 Mars", mission: "M-475", amount: "+45.00€", status: "Confirmé" },
  ]

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-extrabold tracking-tight">Vos <span className="text-accent italic">Revenus</span></h1>
        <Button variant="outline" className="gap-2 rounded-xl">
           <Download className="w-4 h-4" /> Export PDF
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <Card className="border-none bg-accent text-accent-foreground p-6 rounded-[2rem] flex flex-col justify-between shadow-xl shadow-accent/20">
            <div className="flex justify-between items-start">
               <div className="bg-white/20 p-2 rounded-xl">
                  <Wallet className="w-5 h-5" />
               </div>
               <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2 py-1 rounded-full">Disponible</span>
            </div>
            <div className="mt-8">
               <p className="text-4xl font-black">450.00€</p>
               <p className="text-sm opacity-80 mt-1">Prêt pour virement</p>
            </div>
            <Button variant="secondary" className="w-full mt-6 bg-accent-foreground text-accent hover:bg-accent-foreground/90 font-bold rounded-xl">
               Demander un virement
            </Button>
         </Card>
         
         <Card className="border-none p-6 rounded-[2rem] flex flex-col justify-between bg-white shadow-sm">
            <div className="flex justify-between items-start">
               <div className="bg-primary/10 text-primary p-2 rounded-xl">
                  <TrendingUp className="w-5 h-5" />
               </div>
               <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                  +18% <ArrowUpRight className="w-3 h-3" />
               </div>
            </div>
            <div className="mt-8">
               <p className="text-4xl font-black">1 240.00€</p>
               <p className="text-sm text-muted-foreground mt-1">Gagné en Mars</p>
            </div>
         </Card>

         <Card className="border-none p-6 rounded-[2rem] flex flex-col justify-between bg-white shadow-sm border border-dashed border-muted-foreground/20">
            <div className="flex flex-col items-center justify-center h-full text-center space-y-3">
               <div className="bg-muted p-4 rounded-full">
                  <CreditCard className="w-6 h-6 text-muted-foreground" />
               </div>
               <div>
                  <p className="font-bold text-sm">Compte de paiement</p>
                  <p className="text-xs text-muted-foreground">Termine par ****4215</p>
               </div>
               <Button variant="link" className="text-accent-foreground font-bold h-auto p-0 text-xs">Modifier</Button>
            </div>
         </Card>
      </div>

      <Card className="border-none shadow-sm pb-6">
         <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Transactions récentes</CardTitle>
            <Button variant="ghost" className="text-xs font-bold text-accent-foreground">Voir tout</Button>
         </CardHeader>
         <CardContent className="p-0">
            <div className="divide-y divide-muted/50">
               {transactions.map((t, i) => (
                  <div key={i} className="px-6 py-5 flex items-center justify-between hover:bg-muted/30 transition-colors">
                     <div className="flex items-center gap-4">
                        <div className="bg-muted p-2.5 rounded-xl">
                           <Calendar className="w-4 h-4 text-muted-foreground" />
                        </div>
                        <div>
                           <p className="text-sm font-bold">Mission {t.mission}</p>
                           <p className="text-xs text-muted-foreground">{t.date}</p>
                        </div>
                     </div>
                     <div className="text-right">
                        <p className="font-bold text-emerald-600">{t.amount}</p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{t.status}</p>
                     </div>
                  </div>
               ))}
            </div>
         </CardContent>
      </Card>
    </div>
  )
}

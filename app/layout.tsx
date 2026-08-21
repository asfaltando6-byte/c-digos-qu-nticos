import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase:new URL("https://codigos-manifestacao.ivan-fts007.chatgpt.site"),
  title:"400 Códigos de Manifestação",
  description:"400 códigos organizados por intenção, com significado simbólico, orientação de uso e quatro bônus digitais.",
  icons:{icon:[{url:"/favicon-400.png",type:"image/png",sizes:"256x256"}],shortcut:"/favicon-400.png",apple:"/favicon-400.png"},
  openGraph:{title:"400 Códigos de Manifestação",description:"Pare de depender de códigos soltos: encontre a sequência, o significado simbólico e a orientação de uso.",type:"website",images:[{url:"/og.png",width:1200,height:630,alt:"400 Códigos de Manifestação"}]},
  twitter:{card:"summary_large_image",title:"400 Códigos de Manifestação",description:"Códigos organizados por intenção, com significado simbólico e orientação de uso.",images:["/og.png"]}
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}

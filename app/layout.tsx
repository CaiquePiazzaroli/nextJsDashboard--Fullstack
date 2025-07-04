import '@/app/ui/global.css'; //Importando o css para o root layout
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* antialised é uma class do tailwind */}
      {/* Alem disso, está sendo passada a fonte inter para todo elemento dentro do body */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

import { Inter, Lusitana } from 'next/font/google'; //Importa a fonte Inter do next, no módulo font

export const inter = Inter({ subsets: ['latin'] }); //Especifica o subset
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
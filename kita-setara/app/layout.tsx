import type { Metadata } from 'next';
import './globals.css';
import {Header,Footer} from '@/components/site';
export const metadata:Metadata={title:'Kita Setara — Hak yang Setara, Kesempatan yang Sama',description:'Website edukasi hak dan kewajiban warga negara dalam lingkungan pekerjaan.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="id"><body><Header/>{children}<Footer/></body></html>}

//===== Import Fonts =====
import { Sora } from "next/font/google";
const sora = Sora({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-sora'
});
//===== Import Components =====
import { Header, Nav } from "@/components";
//===== Import Css =====
import "./globals.css";
//===== Meta Data =====
export const metadata = {
  metadataBase: new URL('https://dev-farooq-portfolio.vercel.app/'),
  //===== Meta Tags =====
  title: "Farooq Aziz | Front-End Developer",
  description: "Innovative Senior Front-End Developer, my focus is on creating clean, well-crafted interfaces that not only look great but also provide a seamless user experience.",
  //===== OG Tags =====
  openGraph: {
    title: "Farooq Aziz | Front-End Developer",
    description: "Innovative Senior Front-End Developer with 3 years of experience delivering standout digital solutions across various industries.",
    url: '/',
    siteName: '',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/' },
  //===== GEO Tags =====
  other: {},
  //===== Google Varification =====
  verification: {
    other: {
      "": [''],
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
        <Nav />
        <Header />
        {children}
      </body>
    </html>
  );
}

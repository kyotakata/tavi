import { Header } from "./_components/Header";
import "./globals.css";
import { Roboto_Serif, Noto_Sans_JP } from 'next/font/google'

const robotoSerif = Roboto_Serif({ subsets: ['latin'] })
const notoSansJP = Noto_Sans_JP({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${robotoSerif.className} ${notoSansJP.className}`}
    >
      <Header />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import { Providers } from '@/components/providers'
import ToasterApp from '@/components/ui/Toaster/Toaster'
import StyledComponentsRegistry from '@/lib/styled-components-registry'
import { GlobalStyles } from '@/styles/globalStyles'
import type { Metadata } from 'next'
import { Fredoka, Jersey_10, Pixelify_Sans } from 'next/font/google'

// Fonts
const jersey_10 = Jersey_10({
  weight: '400',
  subsets: ['latin'],
  variable: '--secondary-font',
})

// Fonts
const pixelify_sans = Pixelify_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--tertiary-font',
})

// Fonts
const fredoka = Fredoka({
  weight: '400',
  subsets: ['latin'],
  variable: '--primary-font',
})

// Metadata
export const metadata: Metadata = {
  title: 'Universo Educativo',
  description: 'Aplicação Next.js criada com RNT CLI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${fredoka.variable} ${pixelify_sans.variable} ${jersey_10.variable}`} data-scroll-behavior="smooth">
      <body>
        <StyledComponentsRegistry>

          <Providers>
            <GlobalStyles />
            <ToasterApp />
            <Header />
            {children}
            <Footer />
          </Providers>

        </StyledComponentsRegistry>
      </body>
    </html>
  )
}


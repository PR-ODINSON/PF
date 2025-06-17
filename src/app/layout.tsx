import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { AnimationProvider } from '@/components/providers/AnimationProvider'
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider'
import Navigation from '@/components/Navigation'
import ScrollIndicator from '@/components/ScrollIndicator'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  metadataBase: new URL('https://prithviraj-verma.vercel.app'),
  title: {
    default: 'Prithviraj Verma | Full Stack Developer & AI/ML Engineer',
    template: '%s | Prithviraj Verma'
  },
  description: 'Full Stack Developer and AI/ML Engineer specializing in emotion recognition, machine learning, and modern web technologies. Currently working on PPG signal analysis and generative AI.',
  keywords: [
    'Full Stack Developer',
    'AI/ML Engineer',
    'Emotion Recognition',
    'Machine Learning',
    'React',
    'Next.js',
    'TypeScript',
    'Python',
    'Prithviraj Verma'
  ],
  authors: [{ name: 'Prithviraj Verma' }],
  creator: 'Prithviraj Verma',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://prithviraj-verma.vercel.app',
    title: 'Prithviraj Verma | Full Stack Developer & AI/ML Engineer',
    description: 'Full Stack Developer and AI/ML Engineer specializing in AIML Research and modern web technologies.',
    siteName: 'Prithviraj Verma Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prithviraj Verma | Full Stack Developer & AI/ML Engineer',
    description: 'Full Stack Developer and AI/ML Engineer specializing in AIML Research and modern web technologies.',
    creator: '@prithviraj_dev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <AnimationProvider>
              <ScrollIndicator />
              <Navigation />
              <main className="relative overflow-x-hidden">
                {children}
              </main>
              <Toaster
                position="bottom-right"
                toastOptions={{
                  duration: 4000,
                  style: {
                    background: 'var(--toast-bg)',
                    color: 'var(--toast-text)',
                    border: '1px solid var(--toast-border)',
                  },
                }}
              />
            </AnimationProvider>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  )
} 
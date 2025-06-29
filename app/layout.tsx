import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { WhatsAppButton } from '@/components/ui/whatsapp-button';
import { Analytics } from '@/components/analytics';
import { JsonLd } from '@/components/json-ld';
import { CookieConsent } from '@/components/cookie-consent';
import { ProgressBar } from '@/components/progress-bar';
import { BackToTop } from '@/components/back-to-top';
import { PreloadResources } from '@/components/preload-resources';
import { ThemeProvider } from '@/components/theme-provider';
import { IntroAnimation } from '@/components/intro-animation';
import { allKeywords } from '@/lib/keywords';

// Optimized font loading with display swap for better performance
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  preload: false, // Secondary font, load after primary
});

// Comprehensive SEO metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://egyherbsglobal.com'),
  title: {
    default: 'Egy Herbs Global - Premium Egyptian Herbs & Spices | Organic Quality Since 2010',
    template: '%s | Egy Herbs Global - Premium Egyptian Herbs & Spices'
  },
  description: 'Discover premium Egyptian herbs, spices, and seeds sourced directly from Egypt\'s fertile lands. Organic quality, sustainable farming, and global delivery. 15+ years of excellence in herbal products.',
   keywords: allKeywords,
  authors: [{ name: 'Egy Herbs Global', url: 'https://egyherbsglobal.com' }],
  creator: 'Egy Herbs Global',
  publisher: 'Egy Herbs Global',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: 'Agriculture & Food',
  classification: 'Business',
  
  // Open Graph metadata for social sharing
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://egyherbsglobal.com',
    siteName: 'Egy Herbs Global',
    title: 'Egy Herbs Global - Premium Egyptian Herbs & Spices',
    description: 'Premium quality Egyptian herbs, spices, and seeds sourced directly from Egypt\'s fertile lands. Organic quality and sustainable farming practices.',
    images: [
      {
        url: 'https://ik.imagekit.io/pcet3dvcu/Screenshot%20(108).png?updatedAt=1751142632607',
        width: 1200,
        height: 630,
        alt: 'Egy Herbs Global - Premium Egyptian Herbs and Spices',
        type: 'image/jpeg',
      },
      {
        url: 'https://ik.imagekit.io/pcet3dvcu/Screenshot%20(106).png?updatedAt=1751142633024',
        width: 1200,
        height: 1200,
        alt: 'Egy Herbs Global Logo',
        type: 'image/jpeg',
      }
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    site: '@egyherbsglobal',
    creator: '@egyherbsglobal',
    title: 'Egy Herbs Global - Premium Egyptian Herbs & Spices',
    description: 'Premium quality Egyptian herbs, spices, and seeds sourced directly from Egypt\'s fertile lands.',
    images: ['https://ik.imagekit.io/pcet3dvcu/Screenshot%20(106).png?updatedAt=1751142633024/global/twitter-card.jpg'],
  },

  // Additional metadata for better SEO
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

  // Verification for search engines
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
    },
  },

  // App-specific metadata
  applicationName: 'Egy Herbs Global',
  referrer: 'origin-when-cross-origin',
  
  // Alternate languages (if you support multiple languages)
  alternates: {
    canonical: 'https://egyherbsglobal.com',
    languages: {
      'en-US': 'https://egyherbsglobal.com',
      'ar-EG': 'https://egyherbsglobal.com/ar',
    },
  },

  // Additional structured data
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Egy Herbs Global',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#10b981',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#10b981',
  },
};

// Viewport configuration for responsive design
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#10b981' },
    { media: '(prefers-color-scheme: dark)', color: '#059669' },
  ],
  colorScheme: 'light dark',
};

// Root layout component with comprehensive features
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Preload critical resources */}
        <PreloadResources />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//egyherbsglobal-770136110.imgix.net" />
        
        {/* Preconnect to critical external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://egyherbsglobal-770136110.imgix.net" />
        
        {/* Favicon and app icons - Multiple sizes for better display */}
        <link rel="icon" type="image/png" sizes="16x16" href="/leafIcon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/leafIcon.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/leafIcon.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/leafIcon.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/leafIcon.png" />
        <link rel="icon" type="image/png" sizes="128x128" href="/leafIcon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/leafIcon.png" />
        <link rel="icon" type="image/png" sizes="256x256" href="/leafIcon.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/leafIcon.png" />
        
        {/* Apple touch icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/leafIcon.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/leafIcon.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/leafIcon.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/leafIcon.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/leafIcon.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/leafIcon.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/leafIcon.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/leafIcon.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/leafIcon.png" />
        
        {/* Shortcut icon for older browsers */}
        <link rel="shortcut icon" href="/leafIcon.png" />
        
        {/* Web app manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Additional meta tags for better SEO */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="EG" />
        <meta name="geo.placename" content="Egypt" />
        <meta name="geo.position" content="26.8206;30.8025" />
        <meta name="ICBM" content="26.8206, 30.8025" />
        
        {/* Structured data for organization */}
        <JsonLd />
      </head>
      
      <body 
        className={`${inter.className} antialiased min-h-screen bg-background text-foreground`}
        suppressHydrationWarning
      >
        {/* Theme provider for dark/light mode support */}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {/* Elegant Intro Animation */}
          <IntroAnimation />
          
          {/* Progress bar for page transitions */}
          <ProgressBar />
          
          {/* Skip to main content for accessibility */}
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-emerald-600 text-white px-4 py-2 rounded-md z-50 transition-all duration-200"
          >
            Skip to main content
          </a>
          
          {/* Main layout structure */}
          <div className="flex min-h-screen flex-col">
            {/* Header with navigation */}
            <header className="sticky top-0 z-50">
              <Navbar />
            </header>
            
            {/* Main content area */}
            <main 
              id="main-content" 
              className="flex-1"
              role="main"
            >
              {children}
            </main>
            
            {/* Footer */}
            <footer>
              <Footer />
            </footer>
          </div>
          
          {/* Floating action buttons and widgets */}
          <WhatsAppButton 
            phoneNumber="+201222297357" 
            position="bottom-right"
            message="Hello! I'm interested in your premium Egyptian herbs and spices. Can you provide more information?"
          />
          
          {/* Back to top button */}
          <BackToTop />
          
          {/* Toast notifications */}
          <Toaster />
          
          {/* Cookie consent banner */}
          <CookieConsent />
          
          {/* Analytics and tracking */}
          <Analytics />
        </ThemeProvider>
        
        {/* Performance monitoring script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance monitoring
              if ('performance' in window && 'PerformanceObserver' in window) {
                const observer = new PerformanceObserver((list) => {
                  for (const entry of list.getEntries()) {
                    if (entry.entryType === 'largest-contentful-paint') {
                      console.log('LCP:', entry.startTime);
                    }
                    if (entry.entryType === 'first-input') {
                      console.log('FID:', entry.processingStart - entry.startTime);
                    }
                    if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
                      console.log('CLS:', entry.value);
                    }
                  }
                });
                
                observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
              }
              
              // Service worker registration for PWA capabilities
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js')
                    .then((registration) => {
                      console.log('SW registered: ', registration);
                    })
                    .catch((registrationError) => {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { MainSidebar } from '@/components/main-sidebar'
import { FloatingNav } from '@/components/floating-nav'
import { SidebarProvider } from '@/components/ui/sidebar'
import QueryProvider from '@/components/QueryProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TaskFlow Dashboard',
  description: 'Modern task management dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} dark`}>
      <QueryProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
       
          <SidebarProvider>
            <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
              <MainSidebar />
              <div className="flex flex-col">
                <FloatingNav />
                <main className="flex-1 overflow-y-auto pt-16">
                  {children}
                </main>
              </div>
            </div>
          </SidebarProvider>
        </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  )
}


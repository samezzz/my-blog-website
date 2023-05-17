import './globals.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Samuel's Blog",
  description: 'Created by Samess',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-[#0a0a0a] min-h-screen">
        <Navbar />
          <main className="px-4 md:px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
            {children}
          </main>
        <Footer />
      </body>
    </html>
  )
}

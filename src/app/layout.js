import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hello from Cyrus Zhou',
  description: "Hi, my name is Cyrus Zhou, and this is my welcome page. On this page you can find my introduction, my blog, and my projects from GitHub. Hope you enjoy my website!",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-full bg-black">{children}</body>
    </html>
  )
}

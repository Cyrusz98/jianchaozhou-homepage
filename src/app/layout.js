import './globals.css'
import { Inter } from 'next/font/google'
import Bar from "@/app/components/bar";
import Content from "@/app/components/content";

export const metadata = {

  title: 'Hello from Cyrus Zhou',
  description: "Hi, my name is Cyrus Zhou, and this is my welcome page. On this page you can find my introduction, my personal insights and experiences, and what I am doing thesedays. Hope you enjoy my website!",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-full bg-black">{children}</body>
    </html>
  )
}
export default function Page() {
  return (
      <Content>
          <Bar/>
          <div className="h-1/3 flex items-center justify-center mt-28">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/meanimal.jpg" alt="Me" className="lg:w-1/5 w-1/3 h-auto rounded-full"/>
          </div>
          </Content>
    )
}
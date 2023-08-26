import './globals.css';
import { Inter } from '@next/google-fonts';

export const metadata = {
  title: 'Hello from Cyrus',
  description: "Hi, my name is Cyrus, and this is my welcome page. On this page you can find my media platform, my insights and past experiences. Hope you enjoy my website!",
}

export default function RootLayout({ children }) {
  return (
    <div>
      <Inter /> {/* 应用 Inter 字体 */}
      {children}
    </div>
  );
}

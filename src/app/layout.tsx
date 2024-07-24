import type { Metadata } from "next";
import { globalFont } from '@/config/fonts'
import "@/globals.css";

interface Props extends Children {
  params: { lang: string }
}

export default function RootLayout({ children, params: { lang } }: Readonly<Props>) {
  return (
    <html lang={lang}>
      <body className={`${globalFont.className} antialiased h-screen overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Doit App | Task Manager",
  description: "Task Manager App to manage your tasks and projects",
};
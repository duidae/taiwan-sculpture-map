import type {Metadata} from "next"
import {Inter} from "next/font/google"
import {APP_NAME, APP_DESC} from "@/app/constant"
import "./globals.css"

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESC
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

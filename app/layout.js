import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../app/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme-provider";
import { FloatingChat } from "@/components/floatingChat";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "zenux-Studio",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <head>
            <link rel="icon" href="/logo1.png" sizes="any" />
          </head>
          <body className={`${inter.className}`}>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            <FloatingChat />
          </body>
        </ThemeProvider>
      </html>
    </ClerkProvider>
  );
}

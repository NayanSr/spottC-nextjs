import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "SPOTT",
  description: "Discover and create amazing events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-linear-to-br from-gray-900 via-zinc-900 to-stone-900 flex flex-col min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider
            appearance={{
              theme: dark,
            }}
          >
            <ConvexClientProvider>
              {/* Header */}
              <Header />
              <main className="border-t-2  flex-1 container relative mx-auto pt-40 md:pt-20">
                {/* glow */}
                <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                  <div className="absolute top-0 left-1/6 w-96 h-80 bg-pink-600/30 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 right-1/6 w-96 h-80 bg-yellow-600/30 rounded-full blur-3xl"></div>
                </div>
                <div> {children}</div>
              </main>

              {/* footer */}
              <footer className="border-t-4 border-gray-600 py-2 px-8 w-full max-w-7xl mx-auto">
                Here is footer
              </footer>
              <Toaster richColors />
            </ConvexClientProvider>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

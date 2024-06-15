import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MiniMe",
  description:
    "A Open-Source URL shortner service to share your long url easily.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}

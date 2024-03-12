import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Provider from "@/lib/ThemeProvider/Provider";
import '@rainbow-me/rainbowkit/styles.css';

const bodyFont = IBM_Plex_Mono({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700"] });

export const metadata = {
  title: "Merlin ",
  description: "Merlin chain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

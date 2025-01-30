import { Lekton, Schibsted_Grotesk } from "next/font/google";
import "../styles/globals.css";

const lekton = Lekton({
  variable: "--font-lekton",
  subsets: ["latin"],
  weight: ["400", "700"] 
});

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
  weight: ["400", "600", "700"] 
});

export const metadata = {
  title: "Marlowe Reyes Portfolio",
  description: "Digital Portfolio for the UX/UI & graphic designs of Marlowe Reyes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.ico" />
      </head>
      <body
        className={`${lekton.variable} ${schibstedGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

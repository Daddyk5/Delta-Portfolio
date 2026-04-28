import "./globals.css";
import type { ReactNode } from "react";
import Nav from "../components/Nav";
import AudioHUD from "../components/AudioHUD";
import SystemBoot from "@/components/Systembot";
import { AudioProvider } from "../hooks/useAudio";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bg font-body text-text">
        <AudioProvider>
          <SystemBoot />
          <Nav />
          {children}
          <AudioHUD />
        </AudioProvider>
      </body>
    </html>
  );
}

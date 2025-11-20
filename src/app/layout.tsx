import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

// --- Metadata Configuration ---
export const metadata: Metadata = {
  title: "Starbucks Reviewer",
  description: "Claim Your Bearista Cup",
  icons: {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/d864f204-e1ba-40f7-aac1-205adffe8fde/generated_images/starbucks-coffee-logo-icon-circular-gree-70d7ed9e-20251120143904.jpg",
    shortcut: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/d864f204-e1ba-40f7-aac1-205adffe8fde/generated_images/starbucks-coffee-logo-icon-circular-gree-70d7ed9e-20251120143904.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
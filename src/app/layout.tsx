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
    // This is the correct way for the primary favicon using an external link
    icon: "https://i.imgur.com/F4YVx5o.png",
    // It's also good practice to include a 'shortcut' for compatibility
    shortcut: "https://i.imgur.com/F4YVx5o.png",
    // You can also specify an 'apple-icon' for iOS devices
    // apple: "https://i.imgur.com/F4YVx5o.png",
  },
};
// ------------------------------

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
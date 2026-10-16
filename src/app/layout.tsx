import type { Metadata } from "next";
import { Shell } from "@/components/shell";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Cloudnotes | AWS Cloud Practitioner study desk",
    template: "%s | Cloudnotes",
  },
  description:
    "Read AWS Cloud Practitioner notes, search service concepts, and work through practice questions with saved study progress.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}

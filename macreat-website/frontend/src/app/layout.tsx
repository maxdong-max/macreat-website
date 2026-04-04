import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Macreat - Biomass Pellet Machine Manufacturer',
  description: 'Macreat is a leading manufacturer and supplier of pellet machines and biomass energy equipment since 1960.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
import { ReactNode } from 'react';
import './globals.css';
import Navbar from '../components/Navbar'; // adjust path if needed

export const metadata = {
  title: 'Next Ethereum Connect',
  description: 'Connect Wallet Example with App Router',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-transparent">
        <div className="relative w-full bg-[#030713]">
          <header className="absolute left-1/2 transform -translate-x-1/2 z-50 text-grey">
            <Navbar />
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}

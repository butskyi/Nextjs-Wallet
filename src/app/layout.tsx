import { ReactNode } from 'react';
import Link from 'next/link';
import './globals.css';
import Image from 'next/image';

export const metadata = {
  title: 'Next Ethereum Connect',
  description: 'Connect Wallet Example with App Router',
};
type RootLayoutProps = {
  children: ReactNode;
};
export default function RootLayout({ children }:RootLayoutProps) {
  return (
    <html lang="en">
      <body className=' bg-transparent'> 
        <div className='relative w-full  bg-[#030713]'>
          <header className="fixed text-grey  left-1/2 transform -translate-x-1/2">
            <nav className="flex items-center justify-center ">
              <div className="flex items-center justify-between w-full md:w-auto">
                <button
                  className="block md:hidden focus:outline-none"
                  id="menu-toggle"
                >
                  <Image src="/images/menu-icon.svg" alt="Open Menu" className="h-6" width={17} height={17} />
                </button>
              </div>
              <div className="flex justify-center items-center w-[700px] mx-auto rounded-b-[20px]	bg-[linear-gradient(124deg,rgba(255,255,255,0)_-22.38%,rgba(255,255,255,0.04)_70.38%)] backdrop-blur-[21px] max-w-[774px] py-[20px] pb-[26px]">
                <Link
                  href="/organization"
                  className="flex items-center px-3  text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase"
                >
                  <Image src="/images/user2.svg" alt="Menu Icon" width={17} height={17} />
                  <span className="ml-2 font-bold">ORGANIZATIONS</span>
                </Link>
                <Link
                  href="/user-panel"
                  className="flex items-center px-3  text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase"
                >
                  <Image src="/images/menu-icon.svg" alt="Menu Icon" width={17} height={17} />
                  <span className="ml-2 font-bold">USER-PANEL</span>
                </Link>
                <Link
                  href="/other"
                  className="flex items-center px-3  text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase"
                >
                  <Image src="/images/user2.svg" alt="Menu Icon" width={17} height={17} />
                  <span className="ml-2 font-bold">OTHER</span>
                </Link>
                
              </div>           
          
            </nav>
          </header>
          <main className="">{children}</main>
        </div>
      </body>
    </html>
  );
}

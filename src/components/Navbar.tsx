'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const linkClasses = (path: string) =>
    `flex items-center px-3 text-base font-medium transition-all duration-700 hover:translate-y-2 uppercase ${
      isActive(path) ? 'text-white' : 'text-[#8c8c8c]'
    }`;

  return (
    <nav className="flex w-full items-center justify-center ">
      <div className="flex items-center md:justify-between justify-end w-screen md:w-auto">
        <button className="block md:hidden focus:outline-none" id="menu-toggle">
          <Image src="/images/menu-icon.svg" alt="Open Menu" className="h-6" width={17} height={17} />
        </button>
      </div>
      <div className="hidden md:flex justify-center items-center w-[700px] mx-auto rounded-b-[20px]
        bg-[linear-gradient(124deg,rgba(255,255,255,0)_-22.38%,rgba(255,255,255,0.04)_70.38%)] backdrop-blur-[21px] max-w-[774px] py-[20px] pb-[26px]">
        <Link href="/organization" className={linkClasses('/organization')}>
          <Image src="/images/user2.svg" alt="Menu Icon" width={17} height={17} />
          <span className="ml-2 font-bold">ORGANIZATIONS</span>
        </Link>
        <Link href="/user-panel" className={linkClasses('/user-panel')}>
          <Image src="/images/menu-icon.svg" alt="Menu Icon" width={17} height={17} />
          <span className="ml-2 font-bold">USER-PANEL</span>
        </Link>
        <Link href="/other" className={linkClasses('/other')}>
          <Image src="/images/user2.svg" alt="Menu Icon" width={17} height={17} />
          <span className="ml-2 font-bold">OTHER</span>
        </Link>
      </div>
    </nav>
  );
}

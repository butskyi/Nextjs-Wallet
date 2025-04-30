// filepath: g:\Next-Ethereum\saints\src\app\user-panel\page.tsx
'use client'
import Image from 'next/image';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import RainbowKitCustomProvider from '../../components/RainbowKitCustomProvider';

const queryClient = new QueryClient();

export default function AboutPage() {
  return (
    <WagmiProvider>
      <QueryClientProvider client={queryClient}>
        <RainbowKitCustomProvider>
          <>
            <section className="w-full h-[953px] bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center my-auto pt-[120px] pb-[230px]"
              style={{ backgroundImage: "url('/images/heroBg.png')" }}>
              <div className="w-1/2 text-center">
                <div className="w-[180px] border border-black rounded-lg bg-black text-white px-5 py-3 mb-8 text-base mx-auto text-center">
                  Tronlink wallet connection
                </div>
                <ConnectButton />
                <div className="hero-text">
                  <span className="text-[#8c8c8c] text-[25px] mb-[25px] font-semibold">Unlocking Celestial Treasures</span>
                  <h1 className='font-genos text-[100px] font-[1000] text-white mb-[50px]'>7 <span className='text-[#bba490] uppercase '>s a i n t s</span></h1>
                  <p className='text-white text-[20px] font-[300]'>
                    Embark on a transformative journey of enlightenment and discovery
                    with 7 Saints, where spirituality meets cryptocurrency in a
                    harmonious union. Our platform offers a sacred sanctuary for
                    seekers of divine wisdom, powered by the revolutionary TRX
                    blockchain technology.
                  </p>
                </div>
              </div>
            </section>
            <section className="relative w-full h-screen flex justify-center mt-[-150px]">
              <div className='grid grid-cols-2 gap-4'>
                <div className="card w-[636px] max-h-[727px] px-7 py-[150px] text-white rounded-[20px] border-2 border-[rgba(255,255,255,0.1)] 
            bg-[linear-gradient(124deg,rgba(255,255,255,0)_-22.38%, rgba(255,255,255,0.04)_70.38%)] backdrop-blur-[21px] flex flex-col  justify-between">
                  <div className='flex space-x-4'>
                    <h1 className='uppercase text-3xl'>DEPOSIT SECTION</h1>
                    <figure>
                      <Image src="/images/withdraw.svg" alt="Shoes" width={30} height={30} />
                    </figure>
                  </div>
                  <h2 className="">The deposit amount is 700 TRX.</h2>
                  <input type="email" placeholder="Email" className="input input-bordered w-full" />
                  <button className="btn btn-primary bg-amber-700">Subscribe</button>
                  <h2 className="">The deposit amount is 700 TRX.</h2>
                  <h2 className="">The deposit amount is 700 TRX.</h2>
                  <ol>
                    <li>Enter the Referrer Trx Wallet address in the designated field.</li>
                    <li>Ensure that your TronLink wallet is connected and ready for the transaction.</li>
                    <li>Click on the "Sacrifice" button to initiate the deposit process.</li>
                  </ol>
                </div>
                <div className="card w-[636px] max-h-[727px] p-7  text-white rounded-[20px] border-2 border-[rgba(255,255,255,0.1)] 
          bg-[linear-gradient(124deg,rgba(255,255,255,0)_-22.38%,rgba(255,255,255,0.04)_70.38%)] backdrop-blur-[21px] flex flex-col  justify-between">
                  <h2 className="card-title">WITHDRAWAL SECTION</h2>
                  <h2 className="card-title">0 TRX <span>( Your current Trx balance )</span> </h2>
                  <input type="email" placeholder="Email" className="input input-bordered w-full" />
                  <p>Enter your email below:</p>
                  <ol>
                    <li>To initiate a withdrawal, ensure that you have accumulated a minimum balance of 7000 TRX.</li>
                    <li>Complete Mission 1 and Mission 2 to become eligible for withdrawal.</li>
                    <li>You must have referred at least one user within the last 7 days to qualify for withdrawal.</li>
                    <li>Once the withdrawal conditions are met, click on the "Withdraw" button to begin the withdrawal process.</li>
                  </ol>
                  <ul>
                    <li>Withdrawals are processed automatically once the withdrawal conditions are met.</li>
                    <li>Your TRX balance will be transferred to your connected TronLink wallet.</li>
                    <li>Please allow up to 24 hours for the withdrawal to reflect in your wallet.</li>
                  </ul>
                </div>
              </div>
              <Image src="/images/shape-icon.svg" alt="Menu Icon" width={615} height={647} className='absolute top-20' />
            </section>
          </>
        </RainbowKitCustomProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
'use client';
import Image from 'next/image';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import RainbowKitCustomProvider from '../../components/RainbowKitCustomProvider';

export default function AboutPage() {
  return (
    <RainbowKitCustomProvider>
      <div className='relative w-full overflow-visible'>
        <section
          className="w-full h-auto bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center my-auto pt-[120px]  pb-[100px]"
          style={{ backgroundImage: "url('/images/heroBg.png')" }}
        >
          <div className="flex flex-col items-center justify-center md:w-1/2 text-center md:pt-20 pt-0 w-[300px]">
            <div className="flex w-[300px] text-white px-5 py-3 mb-8 text-base mx-auto justify-center items-center">
                <ConnectButton/>
            </div>
            
            <div className="flex flex-col space-y-8">
              <span className="text-[#8c8c8c] xl:text-[25px] text-[20px] mb-[25px] font-semibold">
                Unlocking Celestial Treasures
              </span>
              <h1 className="font-genos 2xl:text-8xl xl:text-7xl md:text-6xl text-4xl font-[1000] text-white mb-[50px]">
                7 <span className="text-[#bba490] uppercase ">s a i n t s</span>
              </h1>
              <p className="text-white xl:text-[20px] md:text-[15px] md:font-[300] text-[10px] ">
                Embark on a transformative journey of enlightenment and discovery
                with 7 Saints, where spirituality meets cryptocurrency in a
                harmonious union. Our platform offers a sacred sanctuary for
                seekers of divine wisdom, powered by the revolutionary TRX
                blockchain technology.
              </p>
            </div>
          </div>
        </section>
        <section className="relative w-full h-auto flex justify-center md:pt-[-100px] mb-[180px]">
          <div className='relative z-20 grid xl:grid-cols-2 grid-cols-1 2xl:gap-30 xl:gap-10 gap-5 md:mx-[150px] mx-[20px] md:w-full w-[300px]'>
            <div className="card max-h-[727px] md:px-10 2xl:py-[150px] md:py-[100px] py-10 text-white rounded-[20px] border-2 border-[rgba(255,255,255,0.1)] 
              bg-white/10 backdrop-blur-2xl flex flex-col md:items-start items-center  xl:justify-between space-y-4">
              <div className='flex md:flex-row flex-col-reverse items-center md:space-x-4 '>
                <h1 className='uppercase md:text-3xl text-[12px] font-semibold'>DEPOSIT SECTION</h1>
                <figure className='mb-3'>
                    <img src="/images/withdraw.svg" className='w-10 h-10 ' />
                </figure>
              </div>
              <h2 className="text-[#a0aec0] font-bold md:text-[18px] text-[7px]">The deposit amount is 700 TRX.</h2>
              <input type="email" placeholder="Enter referr address" className="input rounded-xl border-2 border-white/10 
                bg-gradient-to-r from-transparent via-white/4 to-transparent backdrop-blur-lg h-12 md:px-20 md:py-4  text-sm font-extrabold text-white" />
              <button className="btn btn-primary rounded-[15px] bg-[#bba490] max-w-[350px] py-[8px] px-20 text-black font-bold md:text-[18px] text-[8px]">Subscribe</button>
              <h2 className="text-[#a0aec0] md:text-[18px] text-[7px]"> &nbsp;&nbsp;&nbsp;Please note : A account can only deposit once.</h2>
              <h2 className="text-[#a0aec0] md:text-[18px] text-[7px]">The deposit amount is 700 TRX.</h2>
              <ol className='list-decimal pl-5 text-white text-sm space-y-4 md:text-[18px] text-[7px]'>
                <li>Enter the Referrer Trx Wallet address in the designated field.
                </li>
                <li>Ensure that your TronLink wallet is connected and ready for the transaction.
                </li>
                <li>Click on the "Sacrifice" button to initiate the deposit process.
                </li>
              </ol>
            </div>
            <div className="flex flex-col justify-between max-h-[727px] 2xl:p-17 p-12 text-white rounded-[20px]
               border-2 border-[rgba(255,255,255,0.1)] bg-white/10 backdrop-blur-2xl space-y-3">
                <h2 className="2xl:text-3xl md:text-2xl text-[12px] font-black">WITHDRAWAL SECTION</h2>
                <h2 className="2xl:text-3xl md:text-2xl text-[12px] font-black">0 TRX <span className='md:text-xl text-[8px] text-[#a0aec0]'>( Your current Trx balance )</span> </h2>
                <button className="btn btn-primary rounded-[15px] border-2 border-[rgba(255,255,255,0.1)] max-w-[350px] md:py-[10px] py-2 text-[#a0aec0] md:text-[15px] text-[8px] font-bold">Withdraw</button>
                <p className="text-[#a0aec0] md:text-[18px] text-[7px]">&nbsp;&nbsp;&nbsp;Please note : A minimum of 7000 TRX is required for withdrawl.</p>
                <p className='text-[#a0aec0] md:text-[18px] text-[7px]'>Withdrawl Instructions</p>
                <ol className='list-decimal xl:pl-5 pl-3 text-white text-sm space-y-3 md:text-[18px] text-[7px]'>
                  <li>
                  To initiate a withdrawal, ensure that you have accumulated a minimum balance of 7000 TRX.
                  </li>
                  <li>Complete Mission 1 and Mission 2 to become eligible for withdrawal.
                  </li>
                  <li>
                  You must have referred at least one user within the last 7 days to qualify for withdrawal.
                  </li>
                  <li>
                  Once the withdrawal conditions are met, click on the "Withdraw" button to begin the withdrawal process.
                  </li>
                </ol>
                <ul className='list-disc xl:pl-5 pl-3 text-[#a0aec0] text-sm space-y-2  leading-4 md:text-[18px] text-[7px]'>
                  <li>
                     Withdrawals are processed automatically once the withdrawal conditions are met.
                  </li>
                  <li>Your TRX balance will be transferred to your connected TronLink wallet.
                  </li>
                  <li>Please allow up to 24 hours for the withdrawal to reflect in your wallet.
                  </li>
                </ul>
            </div>
          </div>
          <Image src="/images/shape-icon.svg" alt="Menu Icon" width={615} height={647} className='absolute top-20' />
        </section>
        <section className="relative w-full flex justify-center md:pb-[200px] pb-[20px] px-[40px] z-20 overflow-visible">
          <div className='grid xl:grid-cols-2 grid-cols-1 2xl:gap-40 gap-20 items-end justify-items-end'>
            <div className='flex flex-col space-y-15'>
              <div className=" 
                  w-full h-auto                  
                  pr-[200px] md:pr-[400px] xl:pr-[300px] 2xl:pr-[400px] pl-[40px]
                  md:py-[70px] py-[40px]   
                  text-white 
                  rounded-[20px] 
                  border-2 border-[rgba(255,255,255,0.1)] 
                  flex flex-col justify-between text-left space-y-8 
                  bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: "url('/images/balance-card-bg.png')" }}>
                  <h3 className="text-[#a0aec0] xl:font-semibold md:text-[20px] text-[12px]">Hi User001</h3>
                  <h2 className="text-[#a0aec0] 2xl:text-[30px] md:text-[25px] text-[16px] md:leading-10 leading-5 font-[1000]"> Your current TRX <br/>balance</h2>
                  <h1 className="text-white 2xl:text-[40px] md:text-[30px] text-[20px] md:leading-10 leading-5 md:font-[1000] font-[600]">1000 TRX</h1>
              </div>
              <div className=" 
              w-full h-auto px-10 
              md:py-[70px] py-[40px]
               text-white rounded-[20px] border-2 border-[rgba(255,255,255,0.1)] 
                flex flex-col justify-between  bg-cover bg-center bg-no-repeat space-y-7"
                style={{ backgroundImage: "url('/images/mission-bg.png')" }}>
                
                <h2 className="text-[#a0aec0] md:text-[30px] text-[20px] md:leading-10 leading-5 md:font-[1000] font-[600]"> Mission Status</h2>
                <div className='flex items-center space-x-4'>
                  <figure>
                    <img  src="/images/user.png" alt="Shoes" className='md:w-[54px] md:h-[54px] w-[25px] h-[25px]' />
                  </figure>
                  <h2 className='uppercase font-semibold md:text-2xl text-[10px]'>Debbie Reese</h2>
                </div>
                <div className='flex flex-row justify-between md:w-2/3 w-full'>
                  <div className='flex flex-col md:space-y-4 space-y-2'>
                    <p className="text-[#a0aec0] md:text-[15px] text-[8px] "> Mission</p>
                    <div className='flex items-center space-x-4'>
                      <figure>
                        <img  src="/images/ethereum.svg" alt="Shoes" className='md:w-[15px] md:h-[24px] w-[10px] h-[15px]' />
                      </figure>
                      <h2 className='uppercase font-semibold md:text-[15px] text-[10px]'>Mission 01</h2>
                    </div>
                    <div className='flex items-center space-x-4'>
                      <figure>
                      <img  src="/images/ethereum.svg" alt="Shoes" className='md:w-[15px] md:h-[24px] w-[10px] h-[15px]' />
                      </figure>
                      <h2 className='uppercase font-semibold md:text-[15px] text-[10px]'>Mission 02</h2>
                    </div>
                  </div>
                  <div className='flex flex-col md:space-y-4 space-y-2'>
                  <p className="text-[#a0aec0] md:text-[15px] text-[8px] "> Time left
                  </p>
                    <h2 className='uppercase font-semibold md:text-[15px] text-[10px]'>02h 32m 44s</h2>
                    <h2 className='uppercase font-semibold md:text-[15px] text-[10px]'>PENDING
                    </h2>
                  </div>
                  <div className='flex flex-col md:space-y-4 space-y-2'>
                    <p className="text-[#a0aec0] md:text-[15px] text-[8px]"> Referrals</p>
                    <h2 className='uppercase font-semibold text-black md:text-[15px] text-[10px]'>0/1
                    </h2>
                    <h2 className='uppercase font-semibold text-black md:text-[15px] text-[10px]'>0/7
                    </h2>
                  </div>
                </div>         
              </div>
            </div>
         
            <div className="md:flex flex-col  xl:w-[550px] xl:max-h-[350px] w-full h-[250px] p-20 text-white rounded-[40px]
               border-2 border-[rgba(255,255,255,0.1)] bg-white/10 backdrop-blur-2xl space-y-15 items-end hidden">
                <h2 className="text-white md:text-[55px] leading-10 font-[1000] "> 7 <span className='uppercase text-[#bba490]'>s a i n t s</span> </h2>
                <div className='flex items-center space-x-4'>
                  <figure>
                    <Image src="/images/telegram.png" alt="Shoes" width={40} height={40} />
                  </figure>
                  <h2 className='uppercase font-semibold text-3xl'>Join Telegram</h2>
                </div>
            </div>
            <div className='md:hidden flex w-full space-x-4 pt-[100px]'>
              <figure>
                <Image src="/images/telegram.png" alt="Shoes" width={20} height={20} />
              </figure>
              <h2 className='uppercase font-semibold text-[10px] text-white'>Join Telegram</h2>
            </div>
          </div>
          
        </section>
        
        <div className='relative w-full text-center z-30 pb-[50px]'>
          <h2 className='uppercase font-semibold md:text-[15px] text-[8px] text-white'>All content © [Current Year] 7 Saints. All rights reserved.</h2>
        </div>
        <img src="/images/saint-sacred-img.png" className='absolute bottom-0 right-0 z-10 ' />
        <Image src="/images/saint-group-bg.png" alt="" width={1903} height={533} className='absolute bottom-0 right-0 z-0' />
      </div>
    </RainbowKitCustomProvider>
  );
}

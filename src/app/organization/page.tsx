'use client'
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <section
        className="w-full h-auto bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center my-auto pt-[120px]  pb-[100px]"
        style={{ backgroundImage: "url('/images/heroBg.png')" }}
      >
        <div className="flex flex-col items-center justify-center md:w-1/2 text-center md:pt-20 pt-0 w-[300px]">
        
          
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
        <div className="relative z-10 card grid xl:grid-cols-3 grid-cols-1 gap-10 border-2 rounded-[20px]  border-[rgba(255,255,255,0.1)] 
          bg-white/10 backdrop-blur-2xl 2xl:py-[120px] py-[70px] md:mx-[120px] mx-[20px] 2xl:px-[120px] px-[40px]">
            <div className="card relative z-10 2xl:mr-[-100px] xl:mr-[-50px] text-white rounded-[20px] flex flex-col justify-between py-[0px] space-y-3">
              <h1 className='uppercase xl:text-2xl md:text-xl text-[12px] font-semibold'>WELCOME TO THE ORGANIZATION PANEL OF 7 SAINTS.</h1>
              <h2 className="text-[#a0aec0] font-bold md:text-xl text-[10px]">The deposit amount is 700 TRX.</h2>
              <input type="email" placeholder="Enter referr address" className="input rounded-xl border-2 border-white/10 
                bg-gradient-to-r from-transparent via-white/4 to-transparent backdrop-blur-lg  px-5 md:py-4 py-2 text-sm font-extrabold text-white" />
              <input type="email" placeholder="Enter referr address" className="input rounded-xl border-2 border-white/10 
              bg-gradient-to-r from-transparent via-white/4 to-transparent backdrop-blur-lg px-5 md:py-4 py-2  text-sm font-extrabold text-white" />

              <h2 className="text-[#a0aec0] md:text-xl text-[10px]">Your Spiritual Network.</h2>
              <ol className='list-decimal pl-5 text-white text-sm space-y-4 md:text-xl text-[10px]'>
                <li>Enter the Referrer Trx Wallet address in the designated field.
                </li>
                <li>Ensure that your TronLink wallet is connected and ready for the transaction.
                </li>
                <li>Click on the "Sacrifice" button to initiate the deposit process.
                </li>
              </ol>
            </div>
            <div className="card relative z-10 col-span-2 px-20 py-[80px] 2xl:ml-[150px] xl:ml-[50px] text-white rounded-[20px] border-2 border-[rgba(255,255,255,0.1)] 
                bg-[linear-gradient(127deg,_#10232f_28.26%,_#061622_91.2%)] 
                backdrop-blur-[84.7674px] pt-[28px] xl:pr-[43px] pr-[23px] pb-[62px] xl:pl-[63px] pl-[23px] flex flex-col justify-between">
                <div className='flex justify-between'>
                  <h1 className='uppercase md:text-2xl text-[10px] font-semibold'>Referral Tracking
                  </h1>
                  <button className='border-2 border-gray-500 md:p-4 p-2  rounded-[20px] '>
                    <img src="/images/dots.svg" alt="" className='lg:w-[30px] lg:h-[20px] w-[20px] ' />
                  </button>
                  
                </div>
                <div className='flex items-center justify-between'>
                  <div className="card text-white md:rounded-[20px] flex flex-col justify-between bg-cover bg-center bg-no-repeat 
                    2xl:w-[308px] lg:h-[132px] xl:w-[250px] lg:w-[250px] md:w-[150px] md:h-[90px] w-[120px] h-[50px]"
                    style={{ backgroundImage: "url('/images/ref-img1.png')" }}>
                    <h1 className='md:text-xl text-[10px] text-gray-400 font-semibold pt-4 pl-5'>invited</h1>
                  </div>
                  <div className="card  text-white rounded-[20px] flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat 
                  2xl:w-[273px] xl:w-[200px] lg:w-[210px] 2xl:h-[292px] lg:h-[222px] md:w-[170px] md:h-[180px] w-[120px] h-[130px]"
                    style={{ backgroundImage: "url('/images/hour.svg')" }}>
                    <div className='text-2xl'>
                      <h4 className='lg:text-2xl text-[12px]'>Referrals</h4>
                      <span className='lg:text-7xl md:text-3xl text-[20px]'>-</span>
                      <span className='lg:text-7xl md:text-3xl text-[20px]'>/</span>
                      <span className='lg:text-7xl md:text-3xl text-[20px]'>∞</span>
                      <p className='lg:text-2xl text-[12px]'>out of</p>
                    </div>
                  </div>
               </div>
            </div>
        </div>
        <Image src="/images/shape-icon.svg" alt="Menu Icon" width={615} height={647} className='absolute top-20' />
      </section>
      <section className='w-full flex flex-col items-center justify-center my-30'>
        <h1 className='text-white pb-10 xl:text-6xl lg:text-5xl md:text-3xl text-xl font-[1000]'>CELESTIAL <span className='text-[#bba490]'>HIERARCHY</span> </h1>
        <ul className='list-disc list-inside pl-5 text-white lg:text-xl md:text-[16px] text-[10px] text-center '>
          <li>Ascend through the celestial hierarchy as you grow your spiritual network.</li>
          <li>Each referral strengthens the bonds of our interconnected souls, leading us closer to enlightenment.</li>
        </ul>
      </section>
      <section
        className="relative flex items-center lg:mt-[400px] md:mt-[300px] mt-[100px]  "
      >
        <div className='relative flex flex-col md:space-y-5 space-y-3 z-20 ml-[100px] '>
        <h2 className='md:block hidden uppercase font-semibold text-6xl text-white mb-20'>7 <span className='text-[#bba490]' >S A I N T S</span> </h2>
          <div className='flex items-center space-x-4'>
            <figure>
              <img src="/images/box-icon.svg" alt="" className='md:w-[34px] md:h-[34px] w-[15px] h-[15px]' />
            </figure>
            <h2 className='uppercase font-semibold md:text-2xl text-[12px] text-gray-400'> USER PANEL</h2>
          </div>
          <div className='flex items-center space-x-4'>
            <figure>
              <img src="/images/user-icon.svg" alt="" className='md:w-[34px] md:h-[34px] w-[15px] h-[15px]' />
            </figure>
            <h2 className='uppercase font-semibold md:text-2xl text-[12px] text-gray-400'>ORGANIZATIONS</h2>
          </div>
          <div className='flex items-center space-x-4'>
            <figure>
              <img src="/images/withdraw.svg" alt="" className='md:w-[34px] md:h-[34px] w-[15px] h-[15px]' />
            </figure>
            <h2 className='uppercase font-semibold md:text-2xl text-[12px] text-gray-400'>Withdraw</h2>
          </div>
          <div className='flex items-center space-x-4'>
            <figure>
            
              <img src="/images/deposit-icon.svg" alt="" className='md:w-[34px] md:h-[34px] w-[15px] h-[15px]' />
            </figure>
            <h2 className='uppercase font-semibold md:text-2xl text-[12px] text-gray-400'>Deposit</h2>
          </div>
          <h2 className='uppercase font-semibold md:text-xl text-[12px] text-gray-400 my-15'>ALL CONTENT © [CURRENT YEAR] 7 SAINTS. ALL RIGHTS RESERVED.</h2>
        </div>
        
        <img src="/images/saints-bg.png" className='md:block hidden absolute bottom-0 right-0 z-10' />
        <img src="/images/saint-group-bg.png" className='md:hidden block absolute bottom-0 right-0 z-10' />
        <Image src="/images/saint-img.png" alt="" width={1303} height={533} className='absolute bottom-0 right-0 z-10' />
      </section>
    </>
      
  );
}

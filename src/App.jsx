import './App.css'
// Images
import home_main from './assets/images/home-main.png'
import home_big from './assets/images/home-big.png'
import home_small from './assets/images/home-small.png'
import { Link } from 'react-router-dom'
// Components
import Header from './components/Header'
import Typography from './components/Typography'
import CountUp from 'react-countup'
import Shadow from './components/Shadow'
import Title from './components/Title'
import DropList from './components/DropList'

function App() {

  return (
    <>
      <Header />
      <main className='bg-[#09090A] overflow-hidden'>

        {/* Hero Section */}
        <section className="home pt-[136px] pb-[20px] relative">
          <Shadow style={'top-[84px] left-[46px]'}/>
          <div className="container flex flex-col lg:flex-row gap-5 justify-between items-stretch">
            <div className='flex flex-col justify-center items-start relative z-1'>
              <svg className='absolute -top-[20px]  sm:top-[48px] left-[80px] lg:left-[130px] animate-bounce ' width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="8.48535" width="12" height="12" transform="rotate(-45 0 8.48535)" fill="url(#paint0_linear_1_92)" />
                <defs>
                  <linearGradient id="paint0_linear_1_92" x1="6" y1="8.48535" x2="6" y2="20.4854" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9A6BFF" />
                    <stop offset="1" stopColor="#BC9DFF" />
                  </linearGradient>
                </defs>
              </svg>
              <svg className='absolute -top-[40px] sm:top-0 right-[40px] md:right-[80px] laptop:-right-[45px] animate-spin-slow' width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.2" d="M35.7444 55.3441L55.3431 35.7455L48.1702 8.9728L21.3975 1.79986L1.79884 21.3985L8.97281 48.1702L35.7444 55.3441Z" stroke="url(#paint0_linear_1_52)" strokeWidth="2" strokeMiterlimit="10" />
                <defs>
                  <linearGradient id="paint0_linear_1_52" x1="25.9454" y1="65.1432" x2="2.5918" y2="2.69807" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F68080" />
                    <stop offset="0.338542" stopColor="#9A6BFF" />
                    <stop offset="0.973958" stopColor="#1FDCE9" />
                  </linearGradient>
                </defs>
              </svg>
              <svg className='absolute bottom-[91px] right-[40px] sm:left-[25%] lg:left-[50%] -translate-x-[50%] animate-bounce animation-pulse' width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="8.48535" width="12" height="12" transform="rotate(-45 0 8.48535)" fill="url(#paint0_linear_1_93)" />
                <defs>
                  <linearGradient id="paint0_linear_1_93" x1="6" y1="8.48535" x2="6" y2="20.4854" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F68080" />
                    <stop offset="1" stopColor="#FF9494" />
                  </linearGradient>
                </defs>
              </svg>
              <img src={home_big} alt="home image" className="absolute z-0 bottom-[144px] right-[40px] laptop:-right-[28px] border border-purple p-[10px] rounded-full hidden md:flex animate-pulse" />
              <img src={home_small} alt="home image" className='max-w-[85px] z-0 absolute bottom-[111px] right-[180px] laptop:right-[123px] border border-purple p-[10px] hidden md:flex rounded-full after:w-[145px] after:height-[145px] animate-pulse' />
              <div className="max-w-full lg:max-w-[759px] w-full text-4xl sm:text-5xl xl:text-6xl leading-20 font-bold font-outfit z-1 text-center lg:text-start">Discover, collect, and sell extraordinary
                <span className='bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent'>NFTs</span>
              </div>
              <Typography style={'text-center lg:text-start mx-auto lg:mx-0'}>
                Our marketplace is the world’s first and
                largest NFT market for independent creators worldwide
              </Typography>

              <div className="my-[40px] flex mx-auto lg:mx-0 gap-[12px]">
                <Link className='bg-[#1E1B33] hover:bg-linear border hover:border-purple border-[#E7E7E766] px-[32px] py-[12px] rounded-lg' to={'/'}>Explore</Link>
                <Link className='bg-[#1E1B33] hover:bg-linear border hover:border-purple border-[#E7E7E766] px-[32px] py-[13px] rounded-lg'>Create</Link>
              </div>
              <div className="flex items-center mx-auto lg:mx-0 mb-5 lg:mb-0 gap-[8px]">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="#7040F2" />
                  <path d="M22.5 15.134C23.1667 15.5189 23.1667 16.4811 22.5 16.866L13.5 22.0622C12.8333 22.4471 12 21.966 12 21.1962V10.8038C12 10.034 12.8333 9.55292 13.5 9.93782L22.5 15.134Z" fill="white" />
                </svg>

                <p>Learn more about Nftico</p>
              </div>
            </div>
            <div className='relative flex items-center justify-center'>
              <img className='w-full max-w-full sm:max-w-[450px] lg:max-w-full' src={home_main} alt="Home Main" />
              <svg className='absolute top-[35%] -translate-y-[50%] -left-[83px] hidden lg:flex animate-bounce-x' width="166" height="166" viewBox="0 0 166 166" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_1_64)">
                  <circle cx="83" cy="79" r="43" fill="#05021D" />
                </g>
                <g clipPath="url(#clip0_1_64)">
                  <path d="M59.3503 78.2154C59.3503 77.7505 59.7268 77.3733 60.1925 77.3733H103.928L91.6148 62.5227C91.3183 62.1657 91.3663 61.6335 91.7259 61.337C92.0838 61.0406 92.6152 61.0903 92.9116 61.4482C92.9116 61.4482 106.49 77.6891 106.57 77.86C106.63 77.9897 106.656 78.1303 106.647 78.2676C106.664 78.4815 106.594 78.692 106.45 78.8629L92.9764 94.8267C92.6767 95.1821 92.1461 95.2276 91.7908 94.9286C91.4346 94.6297 91.3882 94.1 91.6872 93.7429L104.001 79.0575H60.1925C59.7276 79.0575 59.3503 78.6811 59.3503 78.2154Z" fill="#AE53DD" />
                </g>
                <defs>
                  <filter id="filter0_d_1_64" x="0" y="0" width="166" height="166" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="20" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0156863 0 0 0 0 0.00392157 0 0 0 0 0.109804 0 0 0 0.24 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_64" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_64" result="shape" />
                  </filter>
                  <clipPath id="clip0_1_64">
                    <rect width="48" height="35" fill="white" transform="translate(59 61)" />
                  </clipPath>
                </defs>
              </svg>


            </div>
          </div>
        </section>

        {/* Numbers section */}
        <section className='pt-[20px] md:pt-[80px]'>
          <div className="container flex flex-col xl:flex-row items-center justify-between border-b border-[#E7E7E73D] pb-[80px]">
            <Typography style={'mt-0 text-center xl:text-start'}>
              We will take all the worry and guesswork out of your blockchain and cryptocurrency concerns.
            </Typography>
            <ul className='flex flex-row grow flex-wrap md:flex-nowrap items-center justify-between gap-x-0 md:gap-[15px] gap-y-4 md:gap-y-4 mt-[30px] xl:mt-0'>
              <li className='flex flex-col items-center justify-center gap-[12px] -tracking-[1.2%] w-1/2 md:w-1/4'>
                <div className='bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent text-[36px] leading-[40px]'>
                  <CountUp end={30000} duration={2} className='bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent' />+
                </div>
                <p >World Arts</p>
              </li>
              <li className='flex flex-col items-center justify-center gap-[12px] -tracking-[1.2%] w-1/2 md:w-1/4'>
                <div className='text-purple text-[36px] leading-[40px]'>
                  <CountUp end={18000} duration={2} className='text-purple' />+
                </div>
                <p >Digital Artists</p>
              </li>
              <li className='flex flex-col items-center justify-center gap-[12px] -tracking-[1.2%] w-1/2 md:w-1/4'>
                <div className='text-purple text-[36px] leading-[40px]'>
                  <CountUp end={22000} duration={2} className='text-purple' />+
                </div>
                <p >Live Auctions</p>
              </li>
              <li className='flex flex-col items-center justify-center gap-[12px] -tracking-[1.2%] w-1/2 md:w-1/4'>
                <div className='text-purple text-[36px] leading-[40px]'>
                  <CountUp end={50000} duration={2} className='text-purple' />+
                </div>
                <p >Unique Products</p>
              </li>
            </ul>
          </div>
        </section>

        {/* Drops */}
        <section className='pt-[50px] md:pt-[168px] pb-[132px] relative'>
          <Shadow style={'top-[88px] right-[2px]'} />
          <div className="container">
            <Title>
              Selected notable drops
            </Title>
            <DropList/>
          </div>
        </section>
      </main>
    </>
  )
}

export default App

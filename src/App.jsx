import './App.css'
import Header from './components/Header'
import home_main from './assets/images/home-main.png'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <main className='bg-[#09090A]'>
        <section className="home pt-[136px] pb-[20px] relative">
          <div className="w-[450px] h-[392px] rounded-full absolute top-[84px] left-[46px] bg-pink blur-large"></div>
          <div className="container flex justify-between items-start">
            <div className='flex flex-col justify-center items-start relative'>
              <svg className='absolute -top-[40px] left-[130px]' width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="8.48535" width="12" height="12" transform="rotate(-45 0 8.48535)" fill="url(#paint0_linear_1_92)" />
                <defs>
                  <linearGradient id="paint0_linear_1_92" x1="6" y1="8.48535" x2="6" y2="20.4854" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9A6BFF" />
                    <stop offset="1" stopColor="#BC9DFF" />
                  </linearGradient>
                </defs>
              </svg>
              <svg className='absolute -top-[51px] -right-[45px]' width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.2" d="M35.7444 55.3441L55.3431 35.7455L48.1702 8.9728L21.3975 1.79986L1.79884 21.3985L8.97281 48.1702L35.7444 55.3441Z" stroke="url(#paint0_linear_1_52)" strokeWidth="2" strokeMiterlimit="10" />
                <defs>
                  <linearGradient id="paint0_linear_1_52" x1="25.9454" y1="65.1432" x2="2.5918" y2="2.69807" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F68080" />
                    <stop offset="0.338542" stopColor="#9A6BFF" />
                    <stop offset="0.973958" stopColor="#1FDCE9" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="max-w-[759px] text-6xl leading-20 font-bold font-outfit">Discover, collect, and sell extraordinary
                <span className='bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent'>NFTs</span>
              </div>
              <p className='max-w-[621px] text-2xl font-light leading-[37.44px] mt-[20px] '>
                Our marketplace is the world’s first and
                largest NFT market for independent creators worldwide
              </p>

              <div className="my-[40px] flex gap-[12px]">
                <Link className='bg-linear px-[32px] py-[12px] rounded-lg' to={'/'}>Explore</Link>
                <Link className='bg-[#1E1B33] border border-[#E7E7E766] px-[32px] py-[13px] rounded-lg'>Create</Link>
              </div>
              <div className="flex items-center gap-[8px]">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="#7040F2" />
                  <path d="M22.5 15.134C23.1667 15.5189 23.1667 16.4811 22.5 16.866L13.5 22.0622C12.8333 22.4471 12 21.966 12 21.1962V10.8038C12 10.034 12.8333 9.55292 13.5 9.93782L22.5 15.134Z" fill="white" />
                </svg>

                <p>Learn more about Nftico</p>
              </div>
            </div>
            <div className='relative'>
              <img className='w-full' src={home_main} alt="Home Main" />
              <svg className='absolute top-[50%] -left-[83px] -translate-y-[50%]' width="166" height="166" viewBox="0 0 166 166" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      </main>
    </>
  )
}

export default App

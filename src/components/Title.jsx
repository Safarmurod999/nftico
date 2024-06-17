import React from 'react'

const Title = ({ children }) => {
    return (
        <>
            <div className='relative font-medium text-[44px] leading-[48px] text-center z-10'>{children}</div>
            <svg className='absolute left-[50%] top-[40px] md:top-[138px] -translate-x-[50%] z-0' width="209" height="70" viewBox="0 0 209 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.528 68V0.223997H11.088L15.6 13.76V68H0.528ZM47.28 68L7.344 16.832L11.088 0.223997L51.024 51.392L47.28 68ZM47.28 68L43.248 54.464V0.223997H58.32V68H47.28ZM70.059 68V0.223997H85.131V68H70.059ZM81.579 41.408V28.448H115.467V41.408H81.579ZM81.579 13.184V0.223997H117.003V13.184H81.579ZM139.792 68V1.184H154.864V68H139.792ZM118.576 13.376V0.223997H176.08V13.376H118.576ZM188.113 69.152C185.361 69.152 182.641 68.8 179.953 68.096C177.329 67.392 174.865 66.4 172.561 65.12C170.321 63.776 168.401 62.24 166.801 60.512L175.153 52.064C176.689 53.728 178.513 55.04 180.625 56C182.737 56.896 185.041 57.344 187.537 57.344C189.265 57.344 190.577 57.088 191.473 56.576C192.433 56.064 192.913 55.36 192.913 54.464C192.913 53.312 192.337 52.448 191.185 51.872C190.097 51.232 188.689 50.688 186.961 50.24C185.233 49.728 183.409 49.184 181.489 48.608C179.569 48.032 177.745 47.232 176.017 46.208C174.289 45.184 172.881 43.776 171.793 41.984C170.705 40.128 170.161 37.792 170.161 34.976C170.161 31.968 170.929 29.376 172.465 27.2C174.001 24.96 176.177 23.2 178.993 21.92C181.809 20.64 185.105 20 188.881 20C192.849 20 196.497 20.704 199.825 22.112C203.217 23.456 205.969 25.472 208.081 28.16L199.729 36.608C198.257 34.88 196.593 33.664 194.737 32.96C192.945 32.256 191.185 31.904 189.457 31.904C187.793 31.904 186.545 32.16 185.713 32.672C184.881 33.12 184.465 33.792 184.465 34.688C184.465 35.648 185.009 36.416 186.097 36.992C187.185 37.568 188.593 38.08 190.321 38.528C192.049 38.976 193.873 39.52 195.793 40.16C197.713 40.8 199.537 41.664 201.265 42.752C202.993 43.84 204.401 45.312 205.489 47.168C206.577 48.96 207.121 51.328 207.121 54.272C207.121 58.816 205.393 62.432 201.937 65.12C198.545 67.808 193.937 69.152 188.113 69.152Z" fill="url(#paint0_linear_1_111)" />
                <defs>
                    <linearGradient id="paint0_linear_1_111" x1="-14.8" y1="65.6059" x2="194.37" y2="61.8405" gradientUnits="userSpaceOnUse">
                        <stop offset="0.115154" stopColor="#06045B" />
                        <stop offset="1" stopColor="#E01E5A" />
                    </linearGradient>
                </defs>
            </svg></>

    )
}

export default Title
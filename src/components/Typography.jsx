import React from 'react'

const Typography = ({ children,style }) => {
    return (
        <p className={`max-w-[621px] text-2xl font-light leading-[37.44px] mt-[20px] relative z-1 ${style}`}>
            {children}
        </p>

    )
}

export default Typography
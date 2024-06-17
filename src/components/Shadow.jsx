import React from 'react'

const Shadow = ({style}) => {
    return (
        <div className={`w-[450px] h-[392px] rounded-full absolute bg-pink blur-large z-0 ${style}`}></div>
    )
}

export default Shadow
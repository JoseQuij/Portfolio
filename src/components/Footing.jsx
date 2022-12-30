import React from 'react'

const Footing = () => {
  return (
    <div className='flex justify-between items-center  w-full h-20 px-4 text-white bg-black'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4'>
            <p className='font-bold'>Portfolio</p>
            <p className='flex flex-col justify-center align-center font-bold inline text-white '>
            &copy; 2023 josequijije5@gmail.com
            </p>
        </div>
    </div>
  )
}

export default Footing;
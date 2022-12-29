import React from 'react'

const Portfolio = () => {

   /* const Portfolios = [
        {
            id:1,
            src: arrayDestruct
        },
        {
            id:2,
            src: arrayDestruct
        },
        {
            id:3,
            src: arrayDestruct
        },
        {
            id:4,
            src: arrayDestruct
        },
        {
            id:5,
            src: arrayDestruct
        },
        {
            id:6,
            src: arrayDestruct
        },
    ];
    from down below to map @video 1:20:40 ProgrammingwithYash
         {
                Portfolio.map(({id,src})) => {
                    //insert here
                }
            }; 
         
    */

  return (
    <div name="Portfolio" className='bg-gradient-to-b from-black to-cyan-800 text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 max-auto flex flex-col justify-center w-full h-full'>
           <div className='pb-8 '>
            <p className='text-4xl font-bold inline boder-b-4 border-gray-500'>Portfolio</p>
            <p className='py-6'>Check out some of my work right here</p>
           </div>

           
           
           <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            <div className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={''} alt='' className='rounded-md duration-200 hover:scale-105'/>
                <div className='flex itme justify-center'>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                </div>
            </div>
           </div>
        </div>

    </div>
  )
}

export default Portfolio;
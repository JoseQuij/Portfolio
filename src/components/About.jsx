import React from 'react'

const About = () => {
  return (
    <div name='About' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>   
            <div className='pb-8'>
                <p className='text-4xl font-bold inline boder-b-3 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
              I am a hard working, honest individual. I am a good timekeeper, always willing to learn new skills. I am friendly, helpful and polite, have a good sense of humour. I am able to work independently in busy environments and also within a team setting. I am outgoing and tactful, and able to listen effectively when solving problems.
            </p>
            <br/>
            <p className='text-xl'>On my free time I like to look at new programming technologies, look at the current economy situation in other countries, study foreign languages, exercise or watch Netflix!.</p>
        </div>;
    </div>
  )
};

export default About;
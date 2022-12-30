import React from 'react';
import html from "../assets/html.png";
import Css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import nextjs from "../assets/nextjs.png";
import Node from "../assets/node.png";
import ReactImage from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Java from "../assets/Java.png"
import GithubImage from "../assets/githubima.png";

const Experience = () => {
    
    const techs = [
        {
            id:1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id:2,
            src: Css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id:3,
            src: javascript,
            title: 'JAVASCRIPT',
            style: 'shadow-yellow-500'
        },
        {
            id:4,
            src: ReactImage,
            title: 'REACT',
            style: 'shadow-blue-600'
        },
        {
            id:5,
            src: Tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id:6,
            src: nextjs,
            title: 'Next JS',
            style: 'shadow-white'
        },
        {
            id:7,
            src: Node,
            title: 'Node',
            style: 'shadow-green-500'
        },
        {
            id:8,
            src: Java,
            title: 'Java',
            style: 'shadow-red-500'
        },
        {
            id:9,
            src: GithubImage,
            title: 'GitHub',
            style: 'shadow-white'
        },
    ];

  return (
    <div name='Experience' className='bg-gradient-to-b from-cyan-800 to-black w-full h-screen '>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies I have experience with.</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                {
                    techs.map(({id, src, title, style}) => (
                            <div 
                                key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt='' className='w-20 mx-auto'/>
                        <p className='mt-4'>{title}</p>
                    </div>
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default Experience;
import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg';
import installNode from '../assets/portfolio/installNode.jpg';
import navbar from '../assets/portfolio/navbar.jpg';
import reactParallax from '../assets/portfolio/reactParallax.jpg';
import reactSmooth from '../assets/portfolio/reactSmooth.jpg';
import reactWeather from '../assets/portfolio/reactWeather.jpg';

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: arrayDestruct,
            href: 'https://www.linkedin.com/in/sapereza/',
        },
        {
            id: 2,
            src: installNode,
            href: 'https://www.linkedin.com/in/sapereza/',
        },
        {
            id: 3,
            src: navbar,
            href: 'https://www.linkedin.com/in/sapereza/',
        },
        {
            id: 4,
            src: reactParallax,
            href: 'https://www.linkedin.com/in/sapereza/',
        },
        {
            id: 5,
            src: reactSmooth,
            href: 'https://www.linkedin.com/in/sapereza/',
        },
        {
            id: 6,
            src: reactWeather,
            href: 'https://www.linkedin.com/in/sapereza/',
        },
    ]


  return (
    <div name="portfolio" className="bg-gradient-to-b from-red-500 via-red-500 to-rose-400 w-full text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-6 mt-10 md:mt-0">
                <h1 className="text-3xl font-bold inline border-b-4 p-2 border-white">Portfolio</h1>
                <p className="py-6 text-xl">Take a look at some of my work here:</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

                {portfolios.map(({id, src, href}) => 
                    (

                        <div key={id}  className="shadow-md shadow-stone-600 rounded-lg">
                            <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
                            <div className="flex items-center justify-center">
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                <a href={href}>Demo</a>
                                </button>
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                            </div>
                        </div>
                    ))
                }
            </div> 
        </div>
    </div>
  )
}

export default Portfolio
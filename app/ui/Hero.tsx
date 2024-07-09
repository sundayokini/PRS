import React from 'react'

const Hero = () => {
  return (
    <section className='flex flex-col justify-center items-center gap-3 px-4 md:px-6 lg:px-8 xl:px-16'>
      <h1 className="text-white font-bold text-center text-xl">
            Welcome to <span className="text-yellow-500  font-bold font-serif">PRS
                </span>, a comprehensive personnel record system that empowers your workforce.</h1>
                <p className='text-pretty text-xs text-center font-normal'>
                Transform your HR operations with our innovative Personnel Record System, and experience the benefits of a well-managed, motivated, and thriving workforce. Explore the future of HR management today!
                </p>

                <button className='self-center p-3 bg-cyan-500 text-white shadow-md w-fit rounded-full'>View employees</button>
        
    </section>
  )
}

export default Hero;
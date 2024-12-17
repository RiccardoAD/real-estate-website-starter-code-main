import React from 'react'
import homeImge from '../../public/homeImage.jpg'
const Home = () => {
  return (
    <div className='relative h-[100vh]'>
        <img src={homeImge} className='w-full h-full object-cover' alt="" />
      <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-black/30 
      flex items center justify-center' >
    <div className='text-center text-white max-w-5xl px-4'>
        <h1 className='text-5xl sm:text-6xl md:text-7xl font-bold mb-4 
        bg-gradient-to-r
        
        from-sky-300 via-sky-300 to-indigo-300
        bg-clip-text text-trasparent
        
        '
        > Where luxury meet lyfestyles</h1>
    </div>
      </div>
    </div>
  )
}

export default Home

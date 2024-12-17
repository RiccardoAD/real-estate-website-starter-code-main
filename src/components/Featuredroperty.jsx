import React from 'react'
import properties from '../properties'
import { FaBath, FaBed, FaHeart, FaLocationDot, FaRuler } from 'react-icons/fa6'

const Featuredroperty = (
{setSelectedProperty}

) => {
  return (
    
      <section className=' max-w-7xl  mx-auto py-16 px-4'>
<h2 className='text-3xl font-bold mb-8'>Feature products </h2>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

    {properties.map((properties)=>(
       < div key={properties.id} className="bg-white
        rounded-2xl drop-shadow-lg overflow-hidden
        hover:shadow-xl hover: scale-105 transition-all duration-300 relative group cursor-pointer"
        
        onClick={()=> setSelectedProperty(properties)}
        >



         <div className='relative'>
            <img src={properties.image} className='w-full h-72 object-cover
             group-hover:scale-105 transition-transform duration-300' alt="" />
              <button className='absolute top-4 right-4 p-2 rounded-full bg-white/70
              hover:bg-white transition-colors duration-200'>
                <FaHeart className='text-gray-600 hover:text-red-500
                transition-colors duration-200' /></button>
                </div>

            <div className="p-6">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-3 ">
               <FaLocationDot className='text-blue-600' />
               <span>{properties.location}</span>
               </div>

              <div className="text-2xl font-bold text-blue-500 mb-2">
              {properties.price}
              </div>  
              <h3 className='text-xl 
              font-semibold mb-4 text-gray-800'>{properties.title}</h3>
        
            <div className="flex justify-between items-center p-3
            bg-blue-50 rounded-lg">
                
                <div className="flex items-center gap-2">
                   <FaBed className='text-blue-600'/> 
                   <span className='text-gray-600'>{properties.beds}</span>
                </div>
               
                <div className="flex items-center gap-2">
                   <FaBath className='text-blue-600'/> 
                   <span className='text-gray-600'>{properties.baths}</span>
                </div>
               
                <div className="flex items-center gap-2">
                   <FaRuler className='text-blue-600'/> 
                   <span className='text-gray-600'>{properties.sqft}</span>
                </div>
               
               
               
</div>
</div>
</div>

                
                 
       
    ))}




 </div>

</section>
    
  )
}

export default Featuredroperty

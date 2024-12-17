import React from 'react'
import { useState } from 'react';

import { FaBed, FaChevronLeft, FaChevronRight, FaHeart, FaLocationDot, FaX } from 'react-icons/fa6';
import { FaBath, FaRuler } from 'react-icons/fa6';
// import properties from '../properties';

const PropertyModal = ({onClose, properties}) => {


 const[currentProperty, setCurrentProperty] = useState(0);
 const[currentImageIndex,setCurrentImageIndex]= useState(0);
 const[isFavourite,setIsFavourite]= useState(false)


if(!properties || properties.length ===0)
{
    return null;
}
// const currentProperty = properties[currentPropertyIndex];
const images = currentProperty.images || [];

const nextImage=()=>{
    setCurrentImageIndex((prev)=> 
        (prev === images.length - 1 ? 0 : prev + 1  
    ))

}

const prevImage=()=>{

    setCurrentImageIndex((prev)=> 
        (prev === 0 ? images.length - 1 : prev-1   
    ))
}

  return (
    <div className='fixed inset-0 bg-black/70 
    backdrop-blur-md flex items-center justify-center z-50 p-4 '
     onClick={onClose}> 
     <div className='relative bg-ehite rounde-3xl max-w-xl w-full md:max-h-[90vh]
     overflow-y-auto shadow-2xl' onClick={(e)=>e.stopPropagation()}>

{/* Image Slider */}
        <div className="relative h-[300px] md:h-[400px]">
   <img src={images[currentImageIndex]} className='w-full
   h-full object-cover' alt="" />

   <button onClick={prevImage} className='absolute
   left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rpunded-full
   hover:bg-white'>
    <FaChevronLeft size = {20} />

   </button>
   <button onClick={nextImage} className='absolute
   right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rpunded-full
   hover:bg-white'>
    <FaChevronRight size = {20} />

   </button>

   <button onClick={onClose} className='absolute  text-white top-10 right-5 
   -translate-y-1/2 bg-red-500 p-2 rounded-full'>
    <FaX size={20} />
   </button>


   <div className="absolute bottom-4
   right-4 gap-4">

    <button onClick={()=> setIsFavourite(!isFavourite)}
        className={`bg-white/80 p-2 rounded-full ${isFavourite ? 'text-red-500' : 'text-gray-500'}`}>
        <FaHeart />
    </button>
               <div className="bg-black/50 text-white px-3 py-1 rounded-full">
       {currentImageIndex + 1}/{images.length}
               </div>


   </div>


        </div>

        <div className="p-6">
            <div className="flex itemes-center gap-2 text-grey-500
            text-sm mb-3 ">
                <FaLocationDot  className='text-blue-600'/>
                <span>{currentProperty.location}</span>
            </div>
           <h2 className='text-2xl font-bold text-gray-800 mb-2'>{currentProperty.title}</h2> 
         <div className="font-bold text-blue-300">{currentProperty.price}</div>
        </div>
        
        <div className="flex
             gap-6 mb-6 p-4 bg-gray-50 rounded-lg 
        ">

            <div className="flex mb-6 p-4 bg-gray-50 rounded-lg gap-6">
                               <FaBed className='text-blue-600'/> 
                               <span className='text-gray-600'>{currentProperty.beds}</span>
                            </div>
                           
                            <div className="flex items-center gap-2">
                               <FaBath className='text-blue-600'/> 
                               <span className='text-gray-600'>{currentProperty.baths}</span>
                            </div>
                           
                            <div className="flex items-center gap-2">
                               <FaRuler className='text-blue-600'/> 
                               <span className='text-gray-600'>{currentProperty.sqft}</span>
                            </div>




             </div>

         <div className="mb-6">
            <h3 className='font-semibold mb-2 '>
                </h3>
                <p className="text-grey-600">
                    </p>{currentProperty.description}
                
         </div>

   </div>
     </div>
    </div>
  )
}

export default PropertyModal

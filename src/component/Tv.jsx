import React from 'react'

function Tv() {
  return (<>
    <div className='ml-48'>
    <div className='ml-72 mt-7'>
      <p className=' text-white uppercase text-2xl  font-semibold'>TV Worth Switching For</p>
    </div>
    <button className='bg-red-600 rounded-lg h-full p-2 ml-72 mt-10 text-white hover:scale-105 duration-300  '>ORDER ONLINE</button>
    </div>
    <div className=' flex justify-center  mr-5'>
        <p className='text-[20px] text-white mt-4 mr-4'>*$300  offers  are  courtesy  of  PlanetDISH , call  for  full offer  details </p>
    </div>
    <div className='bg-red-600 flex justify-center text-white mt-4  '>
        <p className='text-2xl'> Swich to Dish & Get Up to a $300 Gift Card!*</p>
    </div>
    </>
    
  )
}

export default Tv

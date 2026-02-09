import React from 'react'

const App = () => {
  return (
 <div>
    <div className='bg-violet-300 h-10 w-full border-2 border-violet-600 rounded-md my-4 p-10 flex justify-center items-center'>
    {/* without jit we would use text-xl,2xl,20 which id predefine but can do text-77,mt-66 but with jit its possible using-[]*/}
     {/* <h1 className='text-xl text-white font-mono font-extrabold'>Hello Tailwind</h1> */}
     <h1 className='text-[20px] text-white text-center font-mono font-extrabold sm:mt-1 sm:text-[70px]'>Flexbox vs Grid</h1>
   </div>

   {/* flexbox */}

   {/* <div className='flex flex-col justify-center items-center space-y-6 mt-2'>
    <div className='h-16 w-16 rounded-full bg-blue-500'></div>
    <div className='h-16 w-16 rounded-full bg-orange-500'></div>
    <div className='h-16 w-16 rounded-full bg-green-500'></div>
   </div> */}

{/* space-y-4 sm:space-y-0 sm:space-x-4 mt-4 */}
<div className='flex justify-evenly flex-col sm:flex-row mt-50'>
     <div className='border border-white text-white flex-1 bg-amber-400 sm:bg-red-300'>box</div>
   <div className='border border-white text-white flex-1'>box</div>
</div>
   

      {/* <div className='grid grid-cols-5 gap-2mx-2 mt-2'>
    <div className='h-16 rounded-full bg-blue-500'></div>
    <div className='h-16 rounded-full bg-orange-500'></div>
    <div className='h-16 rounded-full bg-green-500'></div>
   </div> */}
 </div>
  )
}

export default App
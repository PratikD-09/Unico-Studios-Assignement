import React from 'react'
import Navbar from '../../components/Navbar/Navbar'

export default function Home() {
  return (
    <div className='font-mont'>
        <Navbar/>
        <div className='Header flex-col h-[156px] font-mont justify-items-center'>
            <div className='Heading h-[156px] text-[128px] tracking-[-5px] '>Intentional Impect</div>
        </div>
            <div className='flex relative mt-[0px] justify-center font-mont'>
                <div className=' absolute left-[19%] w-[148px] h-[50px] border-solid-black text-[16px]'>
                    Digital strategy. 
                    Creative impact. 
                    Real results
                </div>
                <div className='w-[465px] h-[60px] absolute font-mont '>
                From campaigns to design, we create strategies that engage and visuals that captivate. Elevate your brand with a complete digital experience.
                </div>
            </div>
          
       
    </div>
  )
}

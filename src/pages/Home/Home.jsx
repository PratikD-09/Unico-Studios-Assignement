import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import img1Lap from '../../images/img1Lap.png'
import viewmore from '../../images/viewmorebtn.png'
import img2lap from '../../images/img2lap.png'
import bgimg from '../../images/bgimg.png'
import c1SVG from '../../images/card1SVG.svg'
import c2SVG from '../../images/card2SVG.svg'
import c3SVG from '../../images/card3SVG.svg'
import card5img from '../../images/cardIMG.png' 
import c4svg from '../../images/card4SVG.svg'

export default function Home() {
  return (
    <div className='font-mont'>
        <Navbar/>
        <div className='Header w-[80.5vw ] flex-col h-[156px] font-mont justify-items-center'>
            <div className='Heading h-[156px] text-[10vw] tracking-[-5px] '>Intentional Impect</div>
        </div>
        
          <div className='flex w-[100%] h-[60px] justify-center font-mont mt-3'>
                <div className=' ml-[-18vw] mr-[14vw]  w-[10.2vw] h-[50px] border-solid-black text-[1.1vw]'>
                    Digital strategy. 
                    Creative impact. 
                    Real results
                </div>
                <div className='w-[465px] h-[60px]  font-mont  '>
                From campaigns to design, we create strategies that engage and visuals that captivate. Elevate your brand with a complete digital experience.
                </div>
          </div>
          <div className=' relative h-[554px] bg-[#2B2B2B] mt-[120px] rounded-[50px] flex '>
            <div className=' text-[16px] text-white mt-[24px] ml-[35px] '>Our Letest Work</div>
            <div className=' absolute w-[650px] h-[448px] ml-[35px] mt-[65px] rounded-[34px]'> 
              <h3 className='text-white absolute mt-[26px] ml-5' >Website Designe</h3>
              <h3 className='text-white absolute mt-[26px] ml-[212px]'>Website Development</h3>
              
                <img className='z-0' src={img1Lap} alt=""/>
                <h3 className=' absolute text-[32px] text-white w-[275px] h-[78px] mt-[-98px] ml-[60px]'>HAZE PRODUCTION</h3>
                <button className='flex items-center justify-center w-[201px] h-[47px] rounded-full bg-white  mt-[-65px] ml-[400px] translate-x-1 '><p className='m-2'>View more</p> <img src={viewmore} alt="" /></button>
            </div>

            <div className=' absolute w-[47vw] h-[473px] ml-[720px] mt-[39px] rounded-[34px]'>
            <h3 className='text-white absolute mt-[26px] ml-5' >Website Designe</h3>
            <h3 className='text-white absolute mt-[26px] ml-[212px]'>Website Development</h3>
                <img className='z-0' src={img2lap} alt=""/>
                <h3 className=' absolute text-[32px] text-white w-[275px] h-[78px] mt-[-98px] ml-[60px]'>SMART WELTH.AI</h3>
                <button className='flex items-center justify-center w-[201px] h-[47px] rounded-full bg-white  mt-[-65px] ml-[440px] translate-x-1 '><p className='m-2'>View more</p> <img src={viewmore} alt="" /></button>
            </div>
          </div>
          <div className='h-[650px] relative bg-cover translate-x-0' style={{ backgroundImage: `url(${bgimg})` }}>
              <div className='flex'>
                <div className='flex-col'>
                  <div className='flex w-[408px] h-[146px] text-[4vw] font-semibold m-20'>
                    <h1 >What do we do?</h1>
                  </div>
                  <div className='flex-col w-[414px] h-[184px]  m-20'>
                    <h1 className='text-[4vw] font-semibold' >Who we are?</h1>
                    <p className='w-[404px] text-justify'>We’re a digital marketing agency focused on delivering creative, data-driven solutions that help brands grow. We specialize in social media, SEO, and web design, creating strategies that drive results and make your brand stand out.</p>

                  </div>
                    
                </div>
                <div className='flex-col m-10 h-[484px] w-[100%] translate-x-1'>
                  <div className='h-[132px] mb-10 w-full bg-[#2B2B2B] rounded-[43px] p-1 pl-6'>
                    <h1 className='w-[198px] h-[39px] text-[32px] text-center p-2 text-white'>We design</h1>
                    <p className='p-4 text-[16px] text-white'>We create it all. Sit back, relax, and watch your vision come to life. Stunning design, clear messaging, and flawless execution.</p>
                  </div>


                  <div className='h-[132px] mb-10 w-full bg-[#2B2B2B] rounded-[43px] p-1 pl-6'>
                    <h1 className='w-[198px] h-[39px] text-[32px] text-center p-2 text-white'>We Build</h1>
                    <p className='p-4 text-[16px] text-white'>Built for the future. We turn complex ideas into seamless, scalable digital experiences</p>
                  </div>
                  

                  <div className='h-[132px] mb-10 w-full bg-[#2B2B2B] rounded-[43px] p-1 pl-6'>
                    <h1 className='w-[198px] h-[39px] text-[32px] text-center p-2 text-white'>We Grow</h1>
                    <p className='p-4 text-[16px] text-white'>Marketing that works. We connect your brand with the right audience through strategy, creativity, and impact</p>
                  </div>
                  
                  
                </div>
              </div>
          </div>
      <div className='flex justify-center'>
        <div className=' flex justify-items-center w-[1188px] h-[811px]  '>
            <div className='flex-col w-[396px] bg-white'>
                <div className='border-2 border-black w-[380px] h-[479px] rounded-[20px] shadow-bottom-only'>
                    <div className='flex w-80 h-[400px] m-7 mt-[80px] flex-col  '>
                        <h1 className=' flex justify-items-center justify-center h-[49px] text-[40px] font-semibold text-center mb-4'>UI/UX</h1>
                        <div className='flex justify-items-center justify-center'>

                        <img className='w-[187px] h-[177px] mb-4' src={c1SVG} alt="" />
                        </div>

                    <p className='text-black text-[16px] font-light text-justify'>Enhance user experiences with intuitive UI/UX design. We focus on crafting visually appealing websites and apps that engage and retain users.</p>
                    </div>
                </div>




                <div className='border-2 border-black w-[380px] h-[320px] rounded-[20px] shadow-bottom-only mt-[30px]'>
                    <div className='flex w-80 h-[400px] m-7 mt-[20px] flex-col  '>
                        <h1 className=' flex justify-items-center justify-center h-[49px] text-[40px] font-semibold text-center mb-4'>UI/UX</h1>
                        <div className='flex justify-items-center justify-center'>

                        <img className='w-[94px] h-[89px] mb-4' src={c2SVG} alt="" />
                        </div>

                    <p className='text-black text-[16px] font-light text-justify'>Bring your concepts to life with our 3D design services. From realistic modeling to engaging animations, we create immersive visuals that captivate audiences.</p>
                    </div>
                </div>
            </div>
            <div className='w-[396px] bg-white'>
              <div className='border-2 border-black w-[380px] h-[185px]  rounded-[20px] shadow-bottom-only'>
                  <h1 className='h-[49px] text-[40px] font-semibold mb-4 p-4 ml-6'>40+</h1>
                  <h2 className="Trusted Clients text-[24px] ml-9 mt-10">Trusted Clients</h2>
                  <p className='text-black text-[16px] font-light text-justify ml-9'>in tech, lifestyle, and beyond </p>
              </div>


              <div className='border-2 border-black w-[380px] h-[160px]  rounded-[20px] shadow-bottom-only mt-[30px] '>
                  <h1 className='h-[49px] text-[40px] font-semibold p-4 ml-6 mb-4'>12+</h1>
                  <h2 className="Trusted Clients text-[24px] ml-9 mt-4">Experts</h2>
                  <p className='text-black text-[16px] font-light text-justify ml-9 mb-6 w-[300px]'>A talented team turning creative ideas into reality </p>

              </div>

              <div className='border-2 border-black w-[380px] h-[420px]  rounded-[20px] shadow-bottom-only mt-[30px]'>
                    <div className='flex w-80 h-[400px] m-7 mt-[40px] flex-col  '>
                        <h1 className=' flex justify-items-center justify-center h-[49px] text-[40px] font-semibold text-center mb-4'>UI/UX</h1>
                        <div className='flex justify-items-center justify-center'>

                        <img className='w-[187px] h-[177px] mb-4' src={c1SVG} alt="" />
                        </div>

                    <p className='text-black text-[16px] font-light text-justify'>Enhance user experiences with intuitive UI/UX design. We focus on crafting visually appealing websites and apps that engage and retain users.</p>
                    </div>
              </div>
            </div>
            <div className='w-[396px] bg-white'>
              

            <div className='border-2 border-black w-[380px] h-[479px] rounded-[20px] shadow-bottom-only'>
                    <div className='flex w-80 h-[400px] m-7 mt-[80px] flex-col  '>
                        <h1 className=' flex justify-items-center justify-center h-[49px] text-[40px] font-semibold text-center mb-4'>Marketing</h1>
                        <div className='flex justify-items-center justify-center'>

                        <img className='w-[187px] h-[177px] mb-4' src={c3SVG} alt="" />
                        </div>

                    <p className='text-black text-[16px] font-light text-justify'>Unlock your brand’s potential with tailored digital marketing strategies. From SEO and social media to email marketing, we drive traffic and engagement that converts.</p>
                    </div>
                </div>




                <div className='border-2 border-black w-[380px] h-[320px] rounded-[20px] shadow-bottom-only mt-[30px]'>
                    <div className='flex w-80 h-[400px] m-7 mt-[20px] flex-col  '>
                        <h1 className=' flex justify-items-center justify-center h-[49px] text-[40px] font-semibold text-center mb-4'>UI/UX</h1>
                        <div className='flex justify-items-center justify-center'>

                        <img className='w-[94px] h-[89px] mb-4' src={c4svg} alt="" />
                        </div>

                    <p className='text-black text-[16px] font-light text-justify'>Bring your concepts to life with our 3D design services. From realistic modeling to engaging animations, we create immersive visuals that captivate audiences.</p>
                    </div>
                </div>

            </div>
        </div>
      </div>




      <div className='h-[600px] bg-[#2B2B2B] mt-[120px] rounded-[50px] '>
        <div className='flex gap-[50vw]'>
          <h1 className='text-white text-[48px] m-10'>Our Work</h1>
          <button className='flex items-center justify-center w-[275px] h-[47px] rounded-full bg-white m-10 text-[19px] translate-x-1 '>Explore more of our work</button>
        </div>
        <div className='flex '>
          <div className='w-[25vw] h-96  ml-20'>
            <div>
              <img src= {img1Lap} alt="" />
            </div>
            <h2 className='text-[32px] mt-7 text-white'>Haze Productions</h2>
            <div >
              <span className='text-[16px]  text-white'>Web Design</span>
              <span className='text-[16px] ml-3 text-white'>Web Development</span>
              <span className='text-[16px] ml-3 text-white'>SMM</span>
            </div>
          </div>

          <div className='w-[25vw] h-96  ml-20'>
            <div>
              <img src= {card5img} alt="" />
            </div>
            <h2 className='text-[32px] mt-7 text-white'>Haze Productions</h2>
            <div >
              <span className='text-[16px]  text-white'>Web Design</span>
              <span className='text-[16px] ml-3 text-white'>Web Development</span>
              <span className='text-[16px] ml-3 text-white'>SMM</span>
            </div>
          </div>

          <div className='w-[25vw] h-96  ml-20'>
            <div>
              <img src= {img2lap} alt="" />
            </div>
            <h2 className='text-[32px] mt-7 text-white'>Haze Productions</h2>
            <div >
              <span className='text-[16px]  text-white'>Web Design</span>
              <span className='text-[16px] ml-3 text-white'>Web Development</span>
              <span className='text-[16px] ml-3 text-white'>SMM</span>
            </div>
          </div>
          
        </div>


      </div>

          
    </div>
  )
}

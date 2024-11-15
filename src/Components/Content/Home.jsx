import React, { useEffect } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import img from '../../assets/Profile.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'


function Home() {
  
  //for animation of the content in a component
  useEffect(() => {
    AOS.init({duration: 1000})
  }, [1000])

  const social = [
    {
      link: 'https://www.linkedin.com/in/harsh-mehta-0541b0203',
      icon: <FaLinkedinIn/>,
    },
    {
      link: 'https://github.com/HarshhMehta',
      icon: <AiFillGithub/>,
    },
   
    {
      link: 'https://www.instagram.com/haaarshh___',
      icon: <FaInstagram/>,
    }
  ]

  return (
    <div id='Home' className=' bg-white text-black dark:bg-slate-900 dark:text-white lg:px-56 lg:py-0 px-10 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center'>
      <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center '>
        <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-8 leading-normal uppercase'>
          Hey folks! <span className='text-fuchsia-500'>Harsh Here..</span>
        </h1>
        <p data-aos='fade-left'>I'm a dedicated Front-end developer Based in Indore, currently in Vadodara, India. With a passion for crafting stunning and interactive web experiences, I am constantly expanding my expertise in web development. With a diverse skill set, I aim to contribute innovatively to every project.</p>
        <div data-aos='fade-up' className='flex mt-8 gap-2'>
          <div className='flex items-center justify-center'>
            
            <div className='flex space-x-2'>
              {social.map((social, index) => (
                <a key={index} target="_blank" href={social.link} className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2'>
                <div className='text-[28px]'>
                {social.icon}
                </div>
              </a>
              ))}

            </div>
          </div>
        </div>
      </div>
      <img data-aos='fade-up' src={img} width={290} height={290} alt="" className='rounded-full border-2 p-1 border-fuchsia-500 img_glow' />
    </div>
  )
}

export default Home

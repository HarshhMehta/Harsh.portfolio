import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import img from '../../assets/Profile.jpg'
import Resume from '../../assets/Resume.pdf'


function About() {

  //for animation of the content in a component
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [1000])

  return (
    <div id='About' className='bg-white text-black dark:bg-slate-900 dark:text-white lg:px-56 lg:py-0 px-10 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center'>
      <img data-aos='fade-down' src={img} width={290} height={290} alt="" className='rounded border-2 p-1 border-fuchsia-500 img_glow' />
      <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center'>
        <h1 data-aos='fade-right' className='text-[52px] font-semibold mb-8 leading-normal text-fuchsia-500 uppercase'>
          About Me
        </h1>
        <p data-aos='fade-left '>
          Hello, I'm Harsh, a front-end developer. I have a passion for building innovative web applications. I am pursuing a master's degree in Parul University with a specialization in Full Stack Web Development, Proficient in web development. During my time at university, I developed a keen interest in web development and decided to pursue it as a career.
          <br />
          I have experience working with HTML, CSS, JavaScript, React, PHP,  SQL, Git, and GitHub, and I'm always looking to expand my skill set. Eager to leverage this comprehensive skill set and contribute to innovative projects in the dynamic field of web development Apart From this i also interest in graphic design..
          <br />
          When I'm not coding, you can find me exploring new locations for an outing, hiking, or strumming my guitar and drawing inspiration from nature. I firmly believe in work-life balance and strive to maintain a healthy lifestyle.
        </p>
        <div className='flex mt-8 gap-2 space-x-2 items-center justify-center'>
          <a href={Resume} target="_blank">
            <div className='nano-button shadow-xl hover:shadow-fuchsia-800/50 border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase overflow-hidden'>
              Resume
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About

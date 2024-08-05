//Components
import ParticlesContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'

// Former Motion
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation'

// Varients
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <>
      <div className='bg-primary/30 h-full'>
        {/* Text */}
        <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
          <div className='text-center flex flex-col justify-start pt-24 md:pt-40 xl:text-left h-full container mx-auto'>
            {/* Title */}
            <motion.h1
              variants={fadeIn('down', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h1 text-accent mb-3 md:mb-5'
            >
              Farooq Aziz <br /> {''}
              <span className='text-[24px] md:text-[50px] lg:text-[60px] text-white'>
                <TypeAnimation sequence={[
                  'Front-End Developer',
                  2000,
                  'React JS Developer',
                  2000
                ]}
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </motion.h1>
            {/* SubTitle */}
            <motion.p
              variants={fadeIn('down', 0.3)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='max-w-xl xl:max-w-xl mx-auto xl:mx-0 mb-3 md:mb-10 xl:mb-12'
            >
              Front-End Developer with 2 years of experience with all stages of the development cycle for dynamic web projects. I'm passionate about creating engaging and intuitive for websites. I'm always looking for new ways to innovate and push the boundaries of what's possible.
            </motion.p>
            {/* Btn */}
            <div className='flex justify-center xl:hidden relative'>
              <ProjectsBtn />
            </div>
            <motion.div
              variants={fadeIn('down', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='hidden xl:flex'
            >
              <ProjectsBtn />
            </motion.div>
          </div>
        </div>
        {/* Image */}
        <div className='w-[1200px] h-full absolute right-0 bottom-0'>
          {/* Bg Image */}
          <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
          {/* Particles */}
          <ParticlesContainer />
          {/* Avtar Img */}
          {/* <motion.div
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            animate='show'
            exit='hidden'
            transition={{ duration: 1, ease: 'easeInOut' }}
            className='w-full h-full max-w-[400px] max-h-[475px] absolute -bottom-32 lg:bottom-0 lg:right-[14%]'
          >
            <Avatar />
          </motion.div> */}
        </div>
      </div>
    </>
  )
};

export default Home;

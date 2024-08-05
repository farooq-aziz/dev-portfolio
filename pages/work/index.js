// Components
import WorkSlider from '../../components/WorkSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'
// Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from '../../variants'

const Work = () => {
  return (
    <>
      <div className='h-full bg-primary/60 mt-4 md:mt-0 pb-24 md:pb-0 flex items-start md:items-center overflow-x-hidden'>
        <Circles />
        <div className='container mx-auto'>
          <div className='flex flex-col xl:flex-row gap-x-8 mt-20 relative z-20'>
            {/* Text */}
            <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
              <motion.h2
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='text-[30px] font-bold md:h2 xl:mt-12'
              >
                My Work
                <span className='text-accent'>.</span>
              </motion.h2>
              <motion.p
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='mb-4 max-w[400px] mx-auto lg:mx-0 text-[14px] md:text-[16px]'
              >
                Explore my portfolio, a showcase of my extensive experience in web development. I've crafted a diverse range of projects, interactive web applications, single-page applications, responsive & cross-browser websites, including e-commerce websites. See my work and discover how I can elevate your online presence.
              </motion.p>
            </div>

            {/* Slider */}
            <motion.div
              variants={fadeIn('down', 0.6)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='w-full xl:max-w-[65%]'
            >
              <WorkSlider />
            </motion.div>
          </div>
        </div>
        <Bulb />
      </div>
    </>
  )
};

export default Work;

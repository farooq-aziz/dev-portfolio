// Components
import ServiceSlider from '../../components/ServiceSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'


// Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from '../../variants'

const Services = () => {
  return (
    <>
      <div className='h-full bg-primary/60 pt-20 md:pt-0 lg:pt-28 flex items-start md:items-center overflow-x-hidden'>
        <Circles />
        <div className='container mx-auto'>
          <div className='flex flex-col xl:flex-row gap-x-8'>
            {/* Text */}
            <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 mt-5 md:mt-20 xl:mt-0'>
              <motion.h2
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='text-[30px] font-bold md:h2 xl:mt-8'
              >
                My Services
                <span className='text-accent'>.</span>
              </motion.h2>
              <motion.p
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='mb-0 md:mb-4 max-w[400px] mx-auto lg:mx-0 text-[14px] md:text-[16px]'
              >
                Explore how my front-end development expertise can turn your ideas into stunning realities. Checkout my services to see how I can help bring your vision to life—whether you’re looking to revamp your existing site or build a new one from scratch. I’m here to make your project a success.
              </motion.p>
            </div>

            {/* Slider */}
            <motion.div
              variants={fadeIn('down', 0.6)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='pb-[100px] w-full xl:max-w-[65%]'
            >
              <ServiceSlider />
            </motion.div>
          </div>
        </div>
        <Bulb />
      </div>
    </>
  )
};

export default Services;


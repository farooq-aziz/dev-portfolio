// Components
import TestimonialSlider from '../../components/TestimonialSlider';
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'

// Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from '../../variants'

const Testimonials = () => {
  return (
    <>
      <div className='h-full bg-primary/60 text-center overflow-x-hidden'>
        <div className='container mx-auto h-full flex flex-col justify-center'>
          {/* Title */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='text-[30px] md:text-[45px] font-bold lg:h2 mb-0 md:mb-8 xl:mb-0'
          >
            What Clients
            <span className='text-accent'> Say.</span>
          </motion.h2>
          {/* Slider */}
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            <TestimonialSlider />
          </motion.div>
        </div>
      </div>
      <Circles />
    </>
  )
};

export default Testimonials;

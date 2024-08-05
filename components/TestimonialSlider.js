// Swiper 
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper Required Modules
import { Navigation, Pagination } from "swiper";

// Swiper Style
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Icons
import { FaQuoteLeft } from "react-icons/fa";

// Images
import Image from "next/image";

// Testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Marketing Director',
    message: "Delighted with Farooq Aziz's React and Next.js expertise! Our site exceeded expectations. Highly recommended!",
  },
  {
    image: '/t-avt-2.png',
    name: 'Anna bella ',
    position: 'CEO',
    message: "Thanks to Farooq Aziz, our site shines! Smooth process, excellent work.",
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Co-Founder',
    message: "Kudos to Farooq Aziz for our flawless ecommerce site! Highly impressed with their expertise.",
  },
];

const TestimonialSlider = () => {
  return (
    <>
      <Swiper
        navigation={true}
        pagination={{
          clickable: true
        }}
        modules={[Navigation, Pagination]}
        className='sm:h-[400px] client'
      >
        {
          testimonialData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center lg:flex-row gap-x-8 h-full px-4 md:px-16 mt-8 md:mt-8">
                  {/* Avatar, Name, Position */}
                  <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                    <div className="flex flex-col justify-center text-center">
                      {/* Avatar */}
                      <div className="mb-2 mx-auto">
                        <Image
                          src={person.image}
                          width={100}
                          height={100}
                          alt="Person"
                        />
                      </div>
                      {/* Name */}
                      <div className="text-lg">
                        {person.name}
                      </div>
                      {/* Position */}
                      <div className="text-[12px] uppercase font-extralight tracking-widest my-2 lg:my-0">
                        {person.position}
                      </div>
                    </div>
                  </div>
                  {/* Quote, Message */}
                  <div className="lg:flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                    {/* Quote Icon */}
                    <div className="mb-4 hidden md:flex">
                      <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                    </div>
                    {/* Quote Message */}
                    <div className="xl:text-lg text-center lg:text-left">
                      {person.message}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  )
};

export default TestimonialSlider;

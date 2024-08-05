// Link
import Link from "next/link";

// Swiper 
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper Required Modules
import { FreeMode, Pagination } from "swiper";

// Swiper Style
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Icons
import {
  RxDesktop,
  RxReader,
  RxArrowTopRight,
  RxMobile,
} from "react-icons/rx";

// Icons
import {
  FaLaptopCode,
  FaCode,
  FaMobileAlt
} from "react-icons/fa";

// Data
const serviceData = [
  {
    icon: <FaCode />,
    title: 'Front-End Development',
    description: 'Implement front-end development solutions using HTML, CSS, and JavaScript to enhance user experiences.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Web Applications',
    description: 'Build interactive web applications using JavaScript, React.js, and Next.js to provide dynamic user experiences.',
  },
  {
    icon: <FaLaptopCode />,
    title: 'Single-Page Applications (SPAs)',
    description: 'Create SPAs using React.js, enabling seamless and speedy navigation without page reloads.',
  },
  {
    icon: <RxDesktop />,
    title: 'E-commerce Website Development',
    description: 'Design and develop e-commerce websites with smooth shopping experiences using React.js or Next.js.',
  },
  {
    icon: <RxReader />,
    title: 'PSD / XD to HTML',
    description: 'Converting a PSD & XD Document into an HTML file to make a great looking and highly functional website.',
  }
];

const ServiceSlider = () => {
  return (
    <>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15
          }
        }}
        freeMode={true}
        pagination={{
          clickable: true
        }}
        modules={[FreeMode, Pagination]}
        className='h-[240px] sm:h-[350px] servcSlider'
      >
        {
          serviceData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-4 md:px-6 py-4 md:py-8 flex flex-col gap-x-6 sm:gap-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
                  {/* Icons */}
                  <div className="text-4xl text-accent mb-4">{item.icon}</div>
                  {/* Title & Desc */}
                  <div className="mb-4 md:mb-8">
                    <div className="mb-2 text-[16px] xl:text-lg">{item.title}</div>
                    <p className="max-w-[350px] leading-normal text-[14px] xl:text-[16px]">{item.description}</p>
                  </div>
                  {/* Icons */}
                  <div className="text-3xl">
                    <Link href="/contact">
                      <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
                    </Link>
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

export default ServiceSlider;

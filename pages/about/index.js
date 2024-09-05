import react, { useState } from "react";

// Icons
import {
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiUnity,
  SiCsharp,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiGithub,
  SiFirebase,
  SiAdobephotoshop,
  SiAdobexd,
} from "react-icons/si";


//  Data
const aboutData = [
  {
    title: 'Skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <SiHtml5 />,
          <SiCss3 />,
          <SiJavascript />,
          <SiReact />,
          <SiNextdotjs />,
          <SiBootstrap />,
          <SiTailwindcss />,
          <SiUnity />,
          <SiCsharp />,
          <SiGithub />,
          <SiFirebase />,
          <SiAdobephotoshop />,
          <SiAdobexd />,
        ],
      },
    ],
  },

  {
    title: 'Expericence',
    info: [
      {
        title: 'Senior React JS Developer',
        Company: 'Crystallite Digital Pvt, Karachi',
        stage: '2023 - Current',
        details: [
          "Developed and maintained advanced UIs with React.js and Next.js, focusing on reusability and performance optimization.",
          "Utilized Next.js for server-side rendering and static site generation across diverse sectors, such as eCommerce & Video Animation Sites.",
          "Integrated RESTful APIs and GraphQL for dynamic data handling and real-time updates, enhancing responsiveness and engagement."
        ]
      },
      {
        title: 'Senior Front-End Developer',
        Company: 'Crystallite Digital Pvt, Karachi',
        stage: '2022 - 2023',
        details: [
          "Developed websites for Real Estate, Hotel Management, Amazon SEO Company, eBook Publishers, and Digital Marketing Agencies.",
          "Created multiple responsive websites for mobile and desktop devices using HTML, CSS and JS as well as third-party libraries such as jQuery.",
          "Mentored junior developers and led code reviews, promoting best practices and improving team productivity."
        ]
      },
      {
        title: 'Junior Front-End Developer',
        Company: 'Web Experts, Karachi',
        stage: '2021 - 2022',
        details: [
          "Developed and executed front-end development strategies, resulting in website performance and cross-browser compatibility.",
          "Built websites for Healthcare (Hospitals & Pharmacies) as well as platforms for Web and Mobile App Development Company.",
          "Tested and debugged code to ensure compatibility and stability, resulting in website errors and improved website functionality."
        ]
      },
      {
        title: 'Front-End Developer (Intern)',
        Company: 'ZM Global, Karachi',
        stage: '2021 - 2021',
        details: [
          "Assisted in the creation and implementation of user interface components, enhancing user engagement and experience.",
          "Worked with senior developers to integrate responsive design techniques, ensuring seamless performance across devices.",
          "Assisted in the optimization of front-end assets, contributing to a more efficient and faster-loading website."
        ]
      },
    ],
  },

  {
    title: 'Education',
    info: [
      {
        title: 'Bachelor of Science - Software Engineering',
        Company: 'Indus University, Karachi',
        stage: '2018 - 2022',
      },
      {
        title: 'Intermediate - Computer Science',
        Company: 'Govt Atta Shad Degree Collage, Quetta',
        stage: '2014 - 2016',
      },
      {
        title: 'Matriculation in Science',
        Company: 'KGH High School, Quetta',
        stage: '2012 - 2014',
      },
    ],
  },

  {
    title: 'Certification',
    info: [
      {
        title: 'Advance Game Development (Unity)',
        Company: 'NeXskill, Karachi',
        stage: 'In Process',
      },
      {
        title: 'Web & Mobile App Development',
        Company: 'Jawan Pakistan, Karachi',
        stage: '2022',
      },
      {
        title: 'JavaScript',
        Company: 'kandi.openweaver.com',
        stage: '2022',
      },
      {
        title: 'Html5 & Css3',
        Company: 'pirple.com',
        stage: '2021',
      },
      {
        title: 'WordPress',
        Company: 'Digiskills Training Program',
        stage: '2020',
      },
      {
        title: 'SEO (Search Engine Optimization)',
        Company: 'Digiskills Training Program',
        stage: '2020',
      },
      {
        title: 'Freelancing',
        Company: 'Digiskills Training Program',
        stage: '2020',
      },
      {
        title: 'Graphic Design',
        Company: 'Digiskills Training Program',
        stage: '2020',
      },
      {
        title: ' E-Commerce Management',
        Company: 'Digiskills Training Program',
        stage: '2020',
      },
      {
        title: 'Certified Information Technology - (CIT)',
        Company: 'Global Computer Institute',
        stage: '2017',
      },
    ],
  },
];

// Components
import Circles from '../../components/Circles'
import Bulb from '../../components/Bulb'

// Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from '../../variants'

// Counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className='h-full bg-primary/60 text-center xl:text-left overflow-x-hidden'>
        <Circles />
        {/* About me */}
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='hidden xl:flex absolute bottom-0 -left-[370px]'
        >
        </motion.div>
        <div className='container mx-auto h-auto lg:h-full flex flex-col items-center xl:flex-row gap-x-6 pt-24 md:pt-28 lg:pt-8'>
          {/* Text */}
          <div className='flex-1 flex flex-col justify-center'>
            <motion.h2
              variants={fadeIn('right', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='text-[30px] font-bold md:h2'
            >
              About <span className='text-accent'>Me</span>.
            </motion.h2>
            <motion.p
              variants={fadeIn('right', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='max-w-xl xl:max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-0 text-[14px] md:text-[16px] text-justify'
            >
              I excel in HTML, CSS, and JavaScript, with a strong focus on developing responsive, user-friendly, and cross-browser compatible websites. My skill set includes top frameworks and tools like Bootstrap, Tailwind CSS, MUI, React.js, and Next.js, enabling me to build sleek, high-performance websites that make an impact.
            </motion.p>
            {/* Counters */}
            <motion.div
              variants={fadeIn('right', 0.6)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
            >
              <div className='flex flex-1 xl:gap-x-6'>
                {/* Experience */}
                <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 xl:after:right-[40px]'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={3} duration={5} /> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                    Years of experience
                  </div>
                </div>
                {/* Clients */}
                <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 xl:after:right-[40px]'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={15} duration={5} /> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                    Satisfied Clients
                  </div>
                </div>
                {/* Projects */}
                <div className='relative flex-1'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <CountUp start={0} end={25} duration={5} /> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                    Finished Projects
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          {/* Info */}
          <motion.div
            variants={fadeIn('left', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex flex-col w-full xl:max-w-[48%] h-[350px] relative'
          >
            <div className='flex gap-x-3 md:gap-x-8 mx-auto xl:mx-0 mb-6 mt-0 md:mt-4 lg:mt-0'>
              {aboutData.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className={`${index === itemIndex ? "text-accent capitalize text-[14px] md:text-[16px] xl:text-lg font-semibold relative after:w-[100%] after:h-[2px] after:bg-accent after:absolute after:-bottom-1 after:left-0 after:transition-all after:duration-300" : "cursor-pointer capitalize text-[14px] md:text-[16px] xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 after:transition-all after:duration-300"}`}
                    onClick={() => setIndex(itemIndex)}
                  >
                    {item.title}
                  </div>
                )
              })}
            </div>
            <div className='w-full md:w-[60%] mx-auto lg:w-full pb-[135px] md:pb-[100px] pt-3 lg:pb-0 flex flex-col gap-y-4 xl:gap-y-5 items-start mt-2 xl:mt-0 overflow-y-scroll'>
              {aboutData[index].info.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className='flex-1 flex flex-col max-w-max gap-y-0 md:gap-y-1 lg:gap-y-0 gap-x-2 items-start text-white/60'
                  >
                    {/* Title */}
                    <div className='font-bold text-[14px] md:text-[15px] lg:text-[20px] mb-0'>{item.title}</div>
                    <div className='text-[14px] md:text-[15px] lg:text-[16px] mb-0'>{item.Company}</div>
                    <div className='text-[14px] md:text-[15px] lg:text-[16px] mb-0'>{item.stage}</div>
                    {item.details && item.details.length > 0 && (
                      <ul className='ps-4 mt-2 flex flex-col gap-1'>
                        {item.details.map((detailsItem, detailsItemIndex) => (
                          <li key={detailsItemIndex} className="list-disc text-[15px] mb-0">{detailsItem}</li>
                        ))}
                      </ul>
                    )}
                    {/* Icons */}
                    {item.icons && item.icons.length > 0 && (
                      <div className='flex flex-wrap gap-y-5 md:gap-y-8 gap-x-16 md:gap-x-10 mt-3 xl:mt-5'>
                        {item.icons.map((icon, iconIndex) => (
                          <div key={iconIndex}>
                            <span className='text-2xl xl:text-4xl text-white'>{icon}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
            <div className="mouseScroll">
              <div className="mouse"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
};

export default About;

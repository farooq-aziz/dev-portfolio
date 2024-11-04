//===== Imports
import { motion } from 'framer-motion';

//=====  Data
const experience = [
    {
        title: 'Senior React JS Developer',
        company: 'Crystallite Digital Pvt, Karachi',
        stage: '2023 - Current',
        details: [
            "Developed and maintained advanced UIs with React.js and Next.js, focusing on reusability and performance optimization.",
            "Utilized Next.js for server-side rendering and static site generation across diverse sectors, such as eCommerce & Video Animation Sites.",
            "Integrated RESTful APIs and GraphQL for dynamic data handling and updates, enhancing responsiveness and engagement."
        ]
    },
    {
        title: 'Senior Front-End Developer',
        company: 'Crystallite Digital Pvt, Karachi',
        stage: '2022 - 2023',
        details: [
            "Developed websites for Real Estate, Hotel Management, Amazon SEO Company, eBook Publishers, and Digital Marketing Agencies.",
            "Created multiple responsive websites for mobile and desktop devices using HTML, CSS and JS as well as third-party libraries such as jQuery.",
            "Mentored junior developers and led code reviews, promoting best practices and improving team productivity."
        ]
    },
    {
        title: 'Junior Front-End Developer',
        company: 'WebExperts, Karachi',
        stage: '2021 - 2022',
        details: [
            "Developed and executed front-end development strategies, resulting in website performance and cross-browser compatibility.",
            "Built websites for Healthcare (Hospitals & Pharmacies) as well as platforms for Web and Mobile App Development Company.",
            "Tested and debugged code to ensure compatibility and stability, resulting in website errors and improved website functionality."
        ]
    },
    {
        title: 'Front-End Developer (Intern)',
        company: 'ZM Global, Karachi',
        stage: '2021 - 2021',
        details: [
            "Assisted in the creation and implementation of user interface components, enhancing user engagement and experience.",
            "Worked with senior developers to integrate responsive design techniques, ensuring seamless performance across devices.",
            "Assisted in the optimization of front-end assets, contributing to a more efficient and faster-loading website."
        ]
    },
];

const ExpericenceCards = ({ onMouseMove, style }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 w-full xl:w-[95%]">
            {experience.map(({ title, company, stage, details }, index) => (
                <div key={index} onMouseMove={onMouseMove} className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600">
                    <div className="pointer-events-none">
                        <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
                        <motion.div className="absolute inset-0 z-10 bg-gradient-to-br opacity-20 via-zinc-100/50 transition duration-1000 group-hover:opacity-50" style={style} />
                        <motion.div className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100" style={style} />
                    </div>
                    <div className="relative w-full h-full p-4 md:p-8">
                        <div className='font-bold text-[14px] md:text-[15px] lg:text-[20px] mb-0'>{title}</div>
                        <div className='text-[14px] md:text-[15px] lg:text-[16px] mb-0'>{company}</div>
                        <div className='text-[14px] md:text-[15px] lg:text-[16px] mb-0'>{stage}</div>
                        {details && details.length > 0 && (
                            <ul className='ps-4 mt-2 flex flex-col gap-1'>
                                {details.map((detail, detailsItemIndex) => (
                                    <li key={detailsItemIndex} className="list-disc text-[15px] text-left mb-0">{detail}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ExpericenceCards;

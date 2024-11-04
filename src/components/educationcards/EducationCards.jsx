//===== Imports
import { motion } from 'framer-motion';

//=====  Data
const education = [
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
];

const EducationCards = ({ onMouseMove, style }) => {
    return (
        <div className="grid grid-cols-12 gap-x-6 gap-y-6 lg:gap-y-12 w-full xl:w-[95%] h-full">
            <div onMouseMove={onMouseMove} className="col-span-12 md:col-span-6 xl:col-span-4 overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group hover:border-zinc-400/50 border-zinc-600 w-full">
                <div className="pointer-events-none">
                    <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
                    <motion.div className="absolute inset-0 z-10 bg-gradient-to-br opacity-20 via-zinc-100/50 transition duration-1000 group-hover:opacity-50" style={style} />
                    <motion.div className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100" style={style} />
                </div>
                <div className="relative w-full h-full p-4 md:p-8">
                    <div className='font-bold text-[14px] md:text-[15px] lg:text-[20px] mb-0'>Bachelor of Science In <br /> Software Engineering</div>
                    <div className='text-[14px] md:text-[15px] lg:text-[16px] mb-0'>Indus University, Karachi</div>
                    <div className='text-[14px] md:text-[15px] lg:text-[16px] mb-0'>2018 - 2022</div>
                </div>
            </div>
            <div onMouseMove={onMouseMove} className="col-span-12 md:col-span-6 xl:col-span-4 overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group hover:border-zinc-400/50 border-zinc-600 w-full">
                <div className="pointer-events-none">
                    <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
                    <motion.div className="absolute inset-0 z-10 bg-gradient-to-br opacity-20 via-zinc-100/50 transition duration-1000 group-hover:opacity-50" style={style} />
                    <motion.div className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100" style={style} />
                </div>
                <div className="relative w-full h-full p-4 md:p-8">
                    <div className='font-bold text-[14px] md:text-[15px] lg:text-[20px] mb-0'>Intermediate In <br /> Computer Science</div>
                    <div className='text-[14px] md:text-[15px] lg:text-[16px] mb-0'>Atta Shad Degree Collage, Quetta</div>
                    <div className='text-[14px] md:text-[15px] lg:text-[16px] mb-0'>2014 - 2016</div>
                </div>
            </div>
            <div onMouseMove={onMouseMove} className="col-span-12 md:col-span-6 xl:col-span-4 overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group hover:border-zinc-400/50 border-zinc-600 w-full">
                <div className="pointer-events-none">
                    <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
                    <motion.div className="absolute inset-0 z-10 bg-gradient-to-br opacity-20 via-zinc-100/50 transition duration-1000 group-hover:opacity-50" style={style} />
                    <motion.div className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100" style={style} />
                </div>
                <div className="relative w-full h-full p-4 md:p-8">
                    <div className='font-bold text-[14px] md:text-[15px] lg:text-[20px] mb-0'>Matriculation In <br /> Science</div>
                    <div className='text-[14px] md:text-[15px] lg:text-[16px] mb-0'>KGH High School, Quetta</div>
                    <div className='text-[14px] md:text-[15px] lg:text-[16px] mb-0'>2012 - 2014</div>
                </div>
            </div>
        </div>
    )
};
export default EducationCards;

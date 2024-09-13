"use client"
//===== Imports
import React from "react";
//===== Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from '../variants'
//===== Counter
import CountUp from "react-countup";
//===== Components
import { CertificationCards, EducationCards, ExpericenceCards, SkillCards } from "@/components";

const About = () => {
    return (
        <>
            <div className='bg-gradient-to-tl from-black via-zinc-600/20 to-black h-full relative'>
                {/* About me */}
                <div className='bg-gradient-to-tl from-black via-zinc-600/20 to-black'>
                    <div className='container mx-auto h-auto lg:h-full flex flex-col items-start gap-x-6 pt-8 md:pt-28 lg:pt-8'>
                        {/* Text */}
                        <div className='flex flex-col justify-center h-screen relative'>
                            <motion.h2
                                variants={fadeIn('right', 0.2)}
                                initial='hidden'
                                animate='show'
                                exit='hidden'
                                className='text-[30px] font-bold md:h2 text-center'
                            >
                                About <span className='text-accent'>Me</span>.
                            </motion.h2>
                            <motion.p
                                variants={fadeIn('right', 0.4)}
                                initial='hidden'
                                animate='show'
                                exit='hidden'
                                className='w-[80%] mx-auto mb-6 xl:mb-12 px-0 text-[14px] md:text-[16px] text-center'
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
                                <div className='flex justify-center flex-1 xl:gap-x-6'>
                                    {/* Experience */}
                                    <div className='relative flex flex-col items-center w-full after:w-[1px] after:h-full after:bg-slate-600 after:absolute after:top-0 after:right-0 xl:after:right-[0px]'>
                                        <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-4'>
                                            <CountUp start={0} end={3} duration={5} /> +
                                        </div>
                                        <div className='text-xs text-center uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                                            Years of experience
                                        </div>
                                    </div>
                                    {/* Clients */}
                                    <div className='relative flex flex-col items-center w-full after:w-[1px] after:h-full after:bg-slate-600 after:absolute after:top-0 after:right-0 xl:after:right-[0px]'>
                                        <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-4'>
                                            <CountUp start={0} end={15} duration={5} /> +
                                        </div>
                                        <div className='text-xs text-center uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                                            Satisfied Clients
                                        </div>
                                    </div>
                                    {/* Projects */}
                                    <div className='relative flex flex-col items-center w-full'>
                                        <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-4'>
                                            <CountUp start={0} end={25} duration={5} /> +
                                        </div>
                                        <div className='text-xs text-center uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                                            Finished Projects
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <div className="mouseScroll">
                                <div className="mouse"></div>
                            </div>
                        </div>
                        {/* Info */}
                        <motion.div
                            variants={fadeIn('left', 0.4)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            className='flex flex-col gap-y-24 w-full relative pt-[50px] pb-[100px]'
                        >
                            <div className='w-full flex flex-col gap-y-4 xl:gap-y-6 items-start'>
                                <div
                                    className="cursor-default capitalize text-[14px] md:text-[30px] font-semibold text-accent relative before:w-[8px] before:h-[8px] before:rounded-full before:bg-white before:absolute before:top-[35%] before:left-[-20%] after:w-full after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 mb-4"
                                >
                                    Skills
                                </div>
                                <SkillCards />
                            </div>
                            <div class="w-[95%] h-px bg-slate-600"></div>
                            <div className='w-full flex flex-col gap-y-4 xl:gap-y-6 items-start'>
                                <div
                                    className="cursor-default capitalize text-[14px] md:text-[30px] font-semibold text-accent relative before:w-[8px] before:h-[8px] before:rounded-full before:bg-white before:absolute before:top-[35%] before:left-[-10%] after:w-full after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 mb-4"
                                >
                                    Expericence
                                </div>
                                <ExpericenceCards />
                            </div>
                            <div class="w-[95%] h-px bg-slate-600"></div>
                            <div className='w-full flex flex-col gap-y-4 xl:gap-y-5 items-start'>
                                <div
                                    className="cursor-default capitalize text-[14px] md:text-[30px] font-semibold text-accent relative before:w-[8px] before:h-[8px] before:rounded-full before:bg-white before:absolute before:top-[35%] before:left-[-10%] after:w-full after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 mb-4"
                                >
                                    Education
                                </div>
                                <EducationCards />
                            </div>
                            <div class="w-[95%] h-px bg-slate-600"></div>
                            <div className='w-full flex flex-col gap-y-4 xl:gap-y-5 items-start'>
                                <div
                                    className="cursor-default capitalize text-[14px] md:text-[30px] font-semibold text-accent relative before:w-[8px] before:h-[8px] before:rounded-full before:bg-white before:absolute before:top-[35%] before:left-[-10%] after:w-full after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 mb-4"
                                >
                                    Certification
                                </div>
                                <CertificationCards />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default About;
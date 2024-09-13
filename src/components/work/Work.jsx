"use client"
//===== Imports
import React from "react";
//===== Components
import { FolioCards } from "@/components";
//===== Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from '../variants'

const Work = () => {
    return (
        <>
            <div className='bg-gradient-to-tl from-black via-zinc-600/20 to-black h-full relative'>
                {/* About me */}
                <div className='bg-gradient-to-tl from-black via-zinc-600/20 to-black pt-[150px] 2xl:pt-[200px]'>
                    <motion.div
                        variants={fadeIn('right', 0.2)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='hidden xl:flex absolute bottom-0 -left-[370px]'
                    >
                    </motion.div>
                    <div className='container mx-auto h-auto lg:h-full flex flex-col items-center'>
                        {/* Text */}
                        <div className='flex flex-col justify-center'>
                            <motion.h2
                                variants={fadeIn('right', 0.2)}
                                initial='hidden'
                                animate='show'
                                exit='hidden'
                                className='text-[30px] font-bold md:h2'
                            >
                                My Work <span className='text-accent'>.</span>
                            </motion.h2>
                            <motion.p
                                variants={fadeIn('right', 0.4)}
                                initial='hidden'
                                animate='show'
                                exit='hidden'
                                className='w-[95%] mx-auto xl:mx-0 mb-6 xl:mb-12 px-0 text-[14px] md:text-[16px] text-justify'
                            >
                                Explore my portfolio, where you'll find a vibrant showcase of my web development expertise. I've had the pleasure of creating a diverse range of dynamic projects across various industries. Dive in and discover how my innovative approach can transform and elevate your online presence.
                            </motion.p>
                            <div class="w-[95%] h-px bg-slate-600"></div>
                        </div>
                        {/* Portfolio */}
                        <motion.div
                            variants={fadeIn('down', 0.6)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            className='w-full mt-14'
                        >
                            <FolioCards />
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Work;
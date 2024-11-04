'use client'
//===== Imports
import React from 'react'
import Link from "next/link";
//===== Icons
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt, FaDownload } from 'react-icons/fa'
//===== Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from '../variants'

const Socials = () => {
    const opnen = () => {
        window.open('../Farooq Aziz Resume.pdf', '_blank');
    }
    return (
        <>
            <div className='flex items-center gap-x-6 text-lg'>
                <Link href={'tel:03162300835'} className='hover:text-accent transition-all duration-300'>
                    <motion.div
                        variants={fadeIn('right', 0.2)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                    >
                        <FaPhoneAlt className="text-[20px] lg:text-[20px]" />
                    </motion.div>
                </Link>
                <Link href={'mailto:farooqazizbaloch@gmail.com'} className='hover:text-accent transition-all duration-300'>
                    <motion.div
                        variants={fadeIn('right', 0.2)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                    >
                        <FaEnvelope className="text-[20px] lg:text-[25px]" />
                    </motion.div>
                </Link>
                <Link href={'http://www.linkedin.com/in/farooq-aziz-b09b40223'} target="_blank" className='hover:text-accent transition-all duration-300'>
                    <motion.div
                        variants={fadeIn('down', 0.2)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                    >
                        <FaLinkedin className="text-[20px] lg:text-[25px]" />
                    </motion.div>
                </Link>
                <Link href={'https://github.com/farooq-aziz'} target="_blank" className='hover:text-accent transition-all duration-300'>
                    <motion.div
                        variants={fadeIn('left', 0.2)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                    >
                        <FaGithub className="text-[20px] lg:text-[25px]" />
                    </motion.div>
                </Link>
                <button onClick={opnen} className='hover:text-accent transition-all duration-300'>
                    <motion.div
                        variants={fadeIn('left', 0.2)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                    >
                        <FaDownload className="text-[20px] lg:text-[25px]" />
                    </motion.div>
                </button>
            </div>
        </>
    )
}

export default Socials

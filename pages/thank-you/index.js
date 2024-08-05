import react, { useState } from "react";
import Link from "next/link";
// Components
import Circles from '../../components/Circles'
import Bulb from '../../components/Bulb'
// Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from '../../variants'

const ThankYou = () => {
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
                            className='text-[30px] font-bold md:h2 text-center'
                        >
                            Thank <span className='text-accent'>You</span>.
                        </motion.h2>
                        <Link
                            variants={fadeIn('right', 0.4)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            href="/"
                            className='w-max text-[16px] mx-auto py-2 px-4 border-2 border-accent'
                        >
                            Back To Home
                        </Link>
                    </div>
                </div>
                <Bulb />
            </div>
        </>
    )
};

export default ThankYou;

"use client"
//===== Imports
import React, { useState } from "react";
import Image from "next/image";
//===== Icons
import { BsArrowRight, BsCodeSlash, BsLaptop, BsStar } from "react-icons/bs";
//===== Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from '../variants'
//===== Images
import card1 from 'media/thumbnils/card-1.PNG'
import card2 from 'media/thumbnils/card-2.PNG'
import card3 from 'media/thumbnils/card-3.PNG'
import card4 from 'media/thumbnils/card-4.PNG'
import card5 from 'media/thumbnils/card-5.PNG'
import card6 from 'media/thumbnils/card-6.PNG'
import card7 from 'media/thumbnils/card-7.PNG'
import card8 from 'media/thumbnils/card-8.PNG'
import card9 from 'media/thumbnils/card-9.PNG'
import card10 from 'media/thumbnils/card-10.PNG'
import card11 from 'media/thumbnils/card-11.PNG'
import card12 from 'media/thumbnils/card-12.PNG'
import card13 from 'media/thumbnils/card-13.PNG'
import card14 from 'media/thumbnils/card-14.PNG'
import card15 from 'media/thumbnils/card-15.PNG'
import card16 from 'media/thumbnils/card-16.PNG'
import card17 from 'media/thumbnils/card-17.PNG'
import card18 from 'media/thumbnils/card-18.PNG'
import card19 from 'media/thumbnils/card-19.PNG'
import card20 from 'media/thumbnils/card-20.PNG'
import card21 from 'media/thumbnils/card-21.PNG'
import card22 from 'media/thumbnils/card-22.PNG'
import card23 from 'media/thumbnils/card-23.png'
import card24 from 'media/thumbnils/card-24.PNG'
import card25 from 'media/thumbnils/card-25.PNG'
import card26 from 'media/thumbnils/card-26.PNG'
import card27 from 'media/thumbnils/card-27.png'
import card28 from 'media/thumbnils/card-28.PNG'
import card29 from 'media/thumbnils/card-29.png'
import card30 from 'media/thumbnils/card-30.PNG'
import card31 from 'media/thumbnils/card-31.png'
//==== Email Templates
import template1 from 'media/thumbnils/template1.PNG'
import template2 from 'media/thumbnils/template2.png'
import template3 from 'media/thumbnils/template3.png'
import template4 from 'media/thumbnils/template4.png'
import template5 from 'media/thumbnils/template5.png'
import template6 from 'media/thumbnils/template6.png'
import template7 from 'media/thumbnils/template7.png'


//===== Data
const all = [
    {
        title: 'title',
        path: card23,
        url: 'https://crystallitedigital.com/',
        tags: ['React.JS', 'Next.JS', 'Tailwind'],
    },
    {
        title: 'title',
        path: card24,
        url: 'https://infinityanimations.com/',
        tags: ['React.JS', 'Next.JS', 'Tailwind'],
    },
    {
        title: 'title',
        path: card25,
        url: 'https://amazonsquare.vercel.app/',
        tags: ['React.JS', 'Next.JS', 'Tailwind'],
    },
    {
        title: 'title',
        path: card26,
        url: 'https://www.realestateagents.com/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card29,
        url: 'https://fsf-mart-pk.netlify.app/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card30,
        url: 'https://new-brand-phi.vercel.app/',
        tags: ['React.JS', 'Next.JS', 'Tailwind'],
    },
    {
        title: 'title',
        path: card28,
        url: 'https://www.lazaret4.hr/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card18,
        url: 'https://farooqaziz.netlify.app/work/cryptocurrency-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card19,
        url: 'https://farooqaziz.netlify.app/work/coffee-shop-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card3,
        url: 'https://farooqaziz.netlify.app/work/spa-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card15,
        url: 'https://farooqaziz.netlify.app/work/ecommerce-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card5,
        url: 'https://farooqaziz.netlify.app/work/shipping-company-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card21,
        url: 'https://farooqaziz.netlify.app/work/bakery-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card7,
        url: 'https://farooqaziz.netlify.app/work/security-guard-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card8,
        url: 'https://farooqaziz.netlify.app/work/real-estate-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card9,
        url: 'https://farooqaziz.netlify.app/work/preschool-website-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card10,
        url: 'https://farooqaziz.netlify.app/work/physical-therapy-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card11,
        url: 'https://farooqaziz.netlify.app/work/photo-studio-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card12,
        url: 'https://farooqaziz.netlify.app/work/laboratory-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card13,
        url: 'https://farooqaziz.netlify.app/work/hair-salon-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card27,
        url: 'https://barbaracamp.com/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card14,
        url: 'https://farooqaziz.netlify.app/work/gym-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card4,
        url: 'https://farooqaziz.netlify.app/work/solar-energy-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card16,
        url: 'https://farooqaziz.netlify.app/work/driving-school-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card17,
        url: 'https://farooqaziz.netlify.app/work/dental-clinic-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card1,
        url: 'https://farooqaziz.netlify.app/work/travel-agency-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card22,
        url: 'https://farooqaziz.netlify.app/work/ac-repair-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card20,
        url: 'https://farooqaziz.netlify.app/work/cctv-camera-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card6,
        url: 'https://farooqaziz.netlify.app/work/seo-agency-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card2,
        url: 'https://farooqaziz.netlify.app/work/tourist-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card31,
        url: 'https://prescription-pk.netlify.app/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    }
]
// ==============
const websites = [
    {
        title: 'title',
        path: card23,
        url: 'https://crystallitedigital.com/',
        tags: ['React.JS', 'Next.JS', 'Tailwind'],
    },
    {
        title: 'title',
        path: card24,
        url: 'https://infinityanimations.com/',
        tags: ['React.JS', 'Next.JS', 'Tailwind'],
    },
    {
        title: 'title',
        path: card25,
        url: 'https://amazonsquare.vercel.app/',
        tags: ['React.JS', 'Next.JS', 'Tailwind'],
    },
    {
        title: 'title',
        path: card26,
        url: 'https://www.realestateagents.com/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card30,
        url: 'https://new-brand-phi.vercel.app/',
        tags: ['React.JS', 'Next.JS', 'Tailwind'],
    },
    {
        title: 'title',
        path: card28,
        url: 'https://www.lazaret4.hr/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card18,
        url: 'https://farooqaziz.netlify.app/work/cryptocurrency-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card3,
        url: 'https://farooqaziz.netlify.app/work/spa-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card5,
        url: 'https://farooqaziz.netlify.app/work/shipping-company-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card7,
        url: 'https://farooqaziz.netlify.app/work/security-guard-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card8,
        url: 'https://farooqaziz.netlify.app/work/real-estate-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card9,
        url: 'https://farooqaziz.netlify.app/work/preschool-website-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card10,
        url: 'https://farooqaziz.netlify.app/work/physical-therapy-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card11,
        url: 'https://farooqaziz.netlify.app/work/photo-studio-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card12,
        url: 'https://farooqaziz.netlify.app/work/laboratory-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card13,
        url: 'https://farooqaziz.netlify.app/work/hair-salon-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card14,
        url: 'https://farooqaziz.netlify.app/work/gym-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card4,
        url: 'https://farooqaziz.netlify.app/work/solar-energy-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card16,
        url: 'https://farooqaziz.netlify.app/work/driving-school-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card17,
        url: 'https://farooqaziz.netlify.app/work/dental-clinic-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card1,
        url: 'https://farooqaziz.netlify.app/work/travel-agency-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card22,
        url: 'https://farooqaziz.netlify.app/work/ac-repair-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card20,
        url: 'https://farooqaziz.netlify.app/work/cctv-camera-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card6,
        url: 'https://farooqaziz.netlify.app/work/seo-agency-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card2,
        url: 'https://farooqaziz.netlify.app/work/tourist-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
]
// ==================
const landingPages = [
    {
        title: 'title',
        path: card29,
        url: 'https://fsf-mart-pk.netlify.app/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card19,
        url: 'https://farooqaziz.netlify.app/work/coffee-shop-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card15,
        url: 'https://farooqaziz.netlify.app/work/ecommerce-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card21,
        url: 'https://farooqaziz.netlify.app/work/bakery-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card27,
        url: 'https://barbaracamp.com/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card31,
        url: 'https://prescription-pk.netlify.app/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    }
]
// ==================
const ecommerce = [
    {
        title: 'title',
        path: card29,
        url: 'https://fsf-mart-pk.netlify.app/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card19,
        url: 'https://farooqaziz.netlify.app/work/coffee-shop-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card15,
        url: 'https://farooqaziz.netlify.app/work/ecommerce-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card21,
        url: 'https://farooqaziz.netlify.app/work/bakery-website/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card27,
        url: 'https://barbaracamp.com/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    },
    {
        title: 'title',
        path: card31,
        url: 'https://prescription-pk.netlify.app/',
        tags: ['HTML', 'Bootstrap', 'JavaScript'],
    }
]
// ==================
const email = [
    {
        title: 'title',
        path: template1,
        url: 'https://farooqaziz.netlify.app/work/jumpto1-email-template-helloween/',
        tags: ['HTML', 'CSS'],
    },
    {
        title: 'title',
        path: template2,
        url: 'https://farooqaziz.netlify.app/work/infinityanimations-email-template-helloween/',
        tags: ['HTML', 'CSS'],
    },
    {
        title: 'title',
        path: template3,
        url: 'https://farooqaziz.netlify.app/work/h&w-email-template-2/',
        tags: ['HTML', 'CSS'],
    },
    {
        title: 'title',
        path: template4,
        url: 'https://farooqaziz.netlify.app/work/h&w-email-template-1/',
        tags: ['HTML', 'CSS'],
    },
    {
        title: 'title',
        path: template5,
        url: 'https://farooqaziz.netlify.app/work/bitswits-email-template/',
        tags: ['HTML', 'CSS'],
    },
    {
        title: 'title',
        path: template6,
        url: 'https://farooqaziz.netlify.app/work/infinityanimations-email-template-thankyou/',
        tags: ['HTML', 'CSS'],
    },
    {
        title: 'title',
        path: template7,
        url: 'https://farooqaziz.netlify.app/work/infinityanimations-email-template/',
        tags: ['HTML', 'CSS'],
    }
]

const FolioCards = () => {
    // ===========================
    const [activeTab, setActiveTab] = useState("All");
    const [selectedWorkUrl, setSelectedWorkUrl] = useState(null);

    const handleTabClick = (tabId, workUrl) => {
        setActiveTab(tabId);
        setSelectedWorkUrl(workUrl);
    };

    return (
        <>
            <div className="w-full xl:w-[95%]">
                <motion.div
                    variants={fadeIn('down', 0.6)}
                    initial='hidden'
                    whileInView='show'
                    exit='hidden'
                    className="tabs flex flex-wrap justify-center lg:justify-around gap-8 md:gap-16 gap-y-5 md:gap-y-8 lg:gap-0 mb-12"
                >
                    <button
                        className={`tab ${activeTab === "All" ? "active text-accent border-accent" : ""} btn border border-white/50 px-5 h-[40px] transition-all duration-300 flex items-center justify-center gap-x-2 overflow-hidden hover:border-accent hover:text-accent group`}
                        onClick={() => handleTabClick("All")}
                    >
                        <BsStar />
                        <span className="mb-[-5px]">All</span>
                    </button>
                    <button
                        className={`tab ${activeTab === "Websites" ? "active text-accent border-accent" : ""} btn border border-white/50 px-5 h-[40px] transition-all duration-300 flex items-center justify-center gap-x-2 overflow-hidden hover:border-accent hover:text-accent group`}
                        onClick={() => handleTabClick("Websites")}
                    >
                        <BsCodeSlash />
                        <span className="mb-[-2px]">Websites</span>

                    </button>
                    <button
                        className={`tab ${activeTab === "Landing Pages" ? "active text-accent border-accent" : ""} btn border border-white/50 px-5 h-[40px] transition-all duration-300 flex items-center justify-center gap-x-2 overflow-hidden hover:border-accent hover:text-accent group`}
                        onClick={() => handleTabClick("Landing Pages")}
                    >
                        <BsCodeSlash />
                        <span className="mb-[-2px]">Landing Pages</span>

                    </button>
                    <button
                        className={`tab ${activeTab === "ECommerce" ? "active text-accent border-accent" : ""} btn border border-white/50 px-5 h-[40px] transition-all duration-300 flex items-center justify-center gap-x-2 overflow-hidden hover:border-accent hover:text-accent group`}
                        onClick={() => handleTabClick("ECommerce")}
                    >
                        <BsLaptop />
                        <span className="mb-[-4px]">ECommerce</span>
                    </button>
                    <button
                        className={`tab ${activeTab === "Email Templates" ? "active text-accent border-accent" : ""} btn border border-white/50 px-5 h-[40px] transition-all duration-300 flex items-center justify-center gap-x-2 overflow-hidden hover:border-accent hover:text-accent group`}
                        onClick={() => handleTabClick("Email Templates")}
                    >
                        <BsLaptop />
                        <span className="mb-[-4px]">Email Templates</span>
                    </button>
                </motion.div>
                {/* =================== */}
                <div className="workslider mb-24 xl:mb-12">
                    {activeTab === "All" && (
                        <motion.div
                            variants={fadeIn('right', 0.6)}
                            initial='hidden'
                            whileInView='show'
                            exit='hidden'
                            className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
                            {
                                all.map((item, index) => {
                                    const tags = item.tags || [];

                                    return (
                                        <div key={index} className="w-full mx-auto relative rounded-lg overflow-hidden flex items-center justify-center group shadow-custom">
                                            <div className="flex items-center justify-center relative overflow-hidden group">
                                                {/* Images */}
                                                <Image priority src={item.path} width={500} height={400} alt="Work" className="w-full" />
                                                {/* Overlay Gradient */}
                                                <div className="absolute inset-0 bg-gradient-to-tl from-black via-zinc-600 to-black opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                                                {/* Title */}
                                                <div className="w-full absolute bottom-0 translate-y-full group-hover:-translate-y-5 transition-all duration-700">
                                                    <div className="flex items-center justify-between px-5">
                                                        <div className="flex items-center gap-x-2">
                                                            {tags.map((tag, tagIndex) => (
                                                                <div key={tagIndex} className={`text-[8px] md:text-[14px] leading-tight border p-2 rounded-md translate-y-[500%] group-hover:translate-y-0 transition-all duration-700 delay-${tagIndex * 100} cursor-default`}>
                                                                    {tag}
                                                                </div>
                                                            ))}
                                                        </div>
                                                        {/* Icons */}
                                                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-xl border-2 rounded-full p-2 translate-y-[500%] group-hover:translate-y-0 transition-all duration-700 delay-200">
                                                            <BsArrowRight className="rotate-[-35deg] hover:rotate-0 transition-all duration-300" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </motion.div>
                    )}

                    {activeTab === "Websites" && (
                        <motion.div
                            variants={fadeIn('right', 0.6)}
                            initial='hidden'
                            whileInView='show'
                            exit='hidden'
                            className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
                            {
                                websites.map((item, index) => {
                                    const tags = item.tags || [];

                                    return (
                                        <div key={index} className="w-full mx-auto relative rounded-lg overflow-hidden flex items-center justify-center group shadow-custom">
                                            <div className="flex items-center justify-center relative overflow-hidden group">
                                                {/* Images */}
                                                <Image priority src={item.path} width={500} height={400} alt="Work" className="w-full" />
                                                {/* Overlay Gradient */}
                                                <div className="absolute inset-0 bg-gradient-to-tl from-black via-zinc-600 to-black opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                                                {/* Title */}
                                                <div className="w-full absolute bottom-0 translate-y-full group-hover:-translate-y-5 transition-all duration-700">
                                                    <div className="flex items-center justify-between px-5">
                                                        <div className="flex items-center gap-x-2">
                                                            {tags.map((tag, tagIndex) => (
                                                                <div key={tagIndex} className={`text-[8px] md:text-[14px] leading-tight border p-2 rounded-md translate-y-[500%] group-hover:translate-y-0 transition-all duration-700 delay-${tagIndex * 100} cursor-default`}>
                                                                    {tag}
                                                                </div>
                                                            ))}
                                                        </div>
                                                        {/* Icons */}
                                                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-xl border-2 rounded-full p-2 translate-y-[500%] group-hover:translate-y-0 transition-all duration-700 delay-200">
                                                            <BsArrowRight className="rotate-[-35deg] hover:rotate-0 transition-all duration-300" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </motion.div>
                    )}

                    {activeTab === "Landing Pages" && (
                        <motion.div
                            variants={fadeIn('right', 0.6)}
                            initial='hidden'
                            whileInView='show'
                            exit='hidden'
                            className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
                            {
                                landingPages.map((item, index) => {
                                    const tags = item.tags || [];

                                    return (
                                        <div key={index} className="w-full mx-auto relative rounded-lg overflow-hidden flex items-center justify-center group shadow-custom">
                                            <div className="flex items-center justify-center relative overflow-hidden group">
                                                {/* Images */}
                                                <Image priority src={item.path} width={500} height={400} alt="Work" className="w-full" />
                                                {/* Overlay Gradient */}
                                                <div className="absolute inset-0 bg-gradient-to-tl from-black via-zinc-600 to-black opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                                                {/* Title */}
                                                <div className="w-full absolute bottom-0 translate-y-full group-hover:-translate-y-5 transition-all duration-700">
                                                    <div className="flex items-center justify-between px-5">
                                                        <div className="flex items-center gap-x-2">
                                                            {tags.map((tag, tagIndex) => (
                                                                <div key={tagIndex} className={`text-[8px] md:text-[14px] leading-tight border p-2 rounded-md translate-y-[500%] group-hover:translate-y-0 transition-all duration-700 delay-${tagIndex * 100} cursor-default`}>
                                                                    {tag}
                                                                </div>
                                                            ))}
                                                        </div>
                                                        {/* Icons */}
                                                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-xl border-2 rounded-full p-2 translate-y-[500%] group-hover:translate-y-0 transition-all duration-700 delay-200">
                                                            <BsArrowRight className="rotate-[-35deg] hover:rotate-0 transition-all duration-300" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </motion.div>
                    )}

                    {activeTab === "ECommerce" && (
                        <motion.div
                            variants={fadeIn('right', 0.6)}
                            initial='hidden'
                            whileInView='show'
                            exit='hidden'
                            className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
                            {
                                ecommerce.map((item, index) => {
                                    const tags = item.tags || [];

                                    return (
                                        <div key={index} className="w-full mx-auto relative rounded-lg overflow-hidden flex items-center justify-center group shadow-custom">
                                            <div className="flex items-center justify-center relative overflow-hidden group">
                                                {/* Images */}
                                                <Image priority src={item.path} width={500} height={400} alt="Work" className="w-full" />
                                                {/* Overlay Gradient */}
                                                <div className="absolute inset-0 bg-gradient-to-tl from-black via-zinc-600 to-black opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                                                {/* Title */}
                                                <div className="w-full absolute bottom-0 translate-y-full group-hover:-translate-y-5 transition-all duration-700">
                                                    <div className="flex items-center justify-between px-5">
                                                        <div className="flex items-center gap-x-2">
                                                            {tags.map((tag, tagIndex) => (
                                                                <div key={tagIndex} className={`text-[8px] md:text-[14px] leading-tight border p-2 rounded-md translate-y-[500%] group-hover:translate-y-0 transition-all duration-700 delay-${tagIndex * 100} cursor-default`}>
                                                                    {tag}
                                                                </div>
                                                            ))}
                                                        </div>
                                                        {/* Icons */}
                                                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-xl border-2 rounded-full p-2 translate-y-[500%] group-hover:translate-y-0 transition-all duration-700 delay-200">
                                                            <BsArrowRight className="rotate-[-35deg] hover:rotate-0 transition-all duration-300" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </motion.div>
                    )}

                    {activeTab === "Email Templates" && (
                        <motion.div
                            variants={fadeIn('right', 0.6)}
                            initial='hidden'
                            whileInView='show'
                            exit='hidden'
                            className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
                            {
                                email.map((item, index) => {
                                    const tags = item.tags || [];

                                    return (
                                        <div key={index} className="w-full mx-auto relative rounded-lg overflow-hidden flex items-center justify-center group shadow-custom">
                                            <div className="flex items-center justify-center relative overflow-hidden group w-full h-full">
                                                {/* Images */}
                                                <Image priority src={item.path} width={500} height={400} alt="Work" className="w-full h-full" />
                                                {/* Overlay Gradient */}
                                                <div className="absolute inset-0 bg-gradient-to-tl from-black via-zinc-600 to-black opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                                                {/* Title */}
                                                <div className="w-full absolute bottom-0 translate-y-full group-hover:-translate-y-5 transition-all duration-700">
                                                    <div className="flex items-center justify-between px-5">
                                                        <div className="flex items-center gap-x-2">
                                                            {tags.map((tag, tagIndex) => (
                                                                <div key={tagIndex} className={`text-[8px] md:text-[14px] leading-tight border p-2 rounded-md translate-y-[500%] group-hover:translate-y-0 transition-all duration-700 delay-${tagIndex * 100} cursor-default`}>
                                                                    {tag}
                                                                </div>
                                                            ))}
                                                        </div>
                                                        {/* Icons */}
                                                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-xl border-2 rounded-full p-2 translate-y-[500%] group-hover:translate-y-0 transition-all duration-700 delay-200">
                                                            <BsArrowRight className="rotate-[-35deg] hover:rotate-0 transition-all duration-300" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </motion.div>
                    )}
                </div>
            </div>
        </>
    )
}

export default FolioCards

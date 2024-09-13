"use client"
//===== Imports
import React, { useState } from "react";
import Image from "next/image";
//===== Icons
import { BsArrowRight, BsCodeSlash, BsLaptop, BsStar } from "react-icons/bs";
//===== Images
import thumb1 from 'media/thumb1.PNG'
import thumb2 from 'media/thumb2.PNG'
import thumb3 from 'media/thumb3.PNG'
import thumb4 from 'media/thumb4.PNG'
import thumb5 from 'media/thumb5.png'
import thumb6 from 'media/thumb6.png'
import thumb7 from 'media/thumb7.PNG'
import thumb8 from 'media/thumb8.png'
import thumb9 from 'media/thumb9.PNG'
import thumb10 from 'media/thumb10.PNG'
import thumb11 from 'media/thumb11.PNG'
import thumb12 from 'media/thumb12.PNG'
import thumb13 from 'media/thumb13.png'
import thumb14 from 'media/thumb14.PNG'
import thumb15 from 'media/thumb15.png'
import thumb16 from 'media/thumb16.PNG'

//===== Data
const workData = {
    slides: [
        {
            images: [
                {
                    title: 'title',
                    path: thumb1,
                    url: 'https://www.bitswits.co/'
                },
                {
                    title: 'title',
                    path: thumb2,
                    url: 'https://www.bookwritingexperts.com/'
                },
                {
                    title: 'title',
                    path: thumb3,
                    url: 'https://amazonsquare.vercel.app/'
                },
                {
                    title: 'title',
                    path: thumb4,
                    url: 'https://bestsellingpublisher.com'
                },
                {
                    title: 'title',
                    path: thumb5,
                    url: 'https://fsf-mart-pk.netlify.app/'
                },
                {
                    title: 'title',
                    path: thumb6,
                    url: 'https://crystallitedigital.com/'
                },
                {
                    title: 'title',
                    path: thumb7,
                    url: 'https://infinityanimations.com/'
                },
                {
                    title: 'title',
                    path: thumb8,
                    url: 'https://seoresultspro.com/'
                },
                {
                    title: 'title',
                    path: thumb9,
                    url: 'https://www.webdesignhub.co/'
                },
                {
                    title: 'title',
                    path: thumb10,
                    url: 'https://explainervideosllc.com/'
                },
                {
                    title: 'title',
                    path: thumb11,
                    url: 'https://infinitywebbuilders.com/'
                },
                {
                    title: 'title',
                    path: thumb12,
                    url: 'https://edesignmind.com/'
                },
                {
                    title: 'title',
                    path: thumb13,
                    url: 'https://prescription-pk.netlify.app/'
                },
                {
                    title: 'title',
                    path: thumb14,
                    url: 'https://www.realestateagents.com/'
                },
                {
                    title: 'title',
                    path: thumb15,
                    url: 'https://barbaracamp.com/'
                },
                {
                    title: 'title',
                    path: thumb16,
                    url: 'https://creativelogodesigns.io/'
                }
            ],
        },
    ],
};
const workData1 = {
    slides: [
        {
            images: [
                {
                    title: 'title',
                    path: thumb6,
                    url: 'https://crystallitedigital.com/'
                },
                {
                    title: 'title',
                    path: thumb7,
                    url: 'https://infinityanimations.com/'
                },
                {
                    title: 'title',
                    path: thumb8,
                    url: 'https://seoresultspro.com/'
                },
                {
                    title: 'title',
                    path: thumb10,
                    url: 'https://explainervideosllc.com/'
                },
                {
                    title: 'title',
                    path: thumb1,
                    url: 'https://www.bitswits.co/'
                },
                {
                    title: 'title',
                    path: thumb2,
                    url: 'https://www.bookwritingexperts.com/'
                },
                {
                    title: 'title',
                    path: thumb3,
                    url: 'https://amazonsquare.vercel.app/'
                },
                {
                    title: 'title',
                    path: thumb4,
                    url: 'https://bestsellingpublisher.com'
                },
                {
                    title: 'title',
                    path: thumb11,
                    url: 'https://infinitywebbuilders.com/'
                },
                {
                    title: 'title',
                    path: thumb12,
                    url: 'https://edesignmind.com/'
                },
                {
                    title: 'title',
                    path: thumb14,
                    url: 'https://www.realestateagents.com/'
                },
                {
                    title: 'title',
                    path: thumb9,
                    url: 'https://www.webdesignhub.co/'
                }
            ],
        }
    ],
};
const workData2 = {
    slides: [
        {
            images: [
                {
                    title: 'title',
                    path: thumb5,
                    url: 'https://fsf-mart-pk.netlify.app/'
                },
                {
                    title: 'title',
                    path: thumb15,
                    url: 'https://barbaracamp.com/'
                },
                {
                    title: 'title',
                    path: thumb13,
                    url: 'https://prescription-pk.netlify.app/'
                }
            ],
        }
    ],
};

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
            <div className="w-[95%]">
                <div className="tabs flex flex-wrap justify-around mb-12">
                    <button
                        className={`tab ${activeTab === "All" ? "active text-accent border-accent" : ""} btn border border-white/50 px-5 h-[40px] transition-all duration-300 flex items-center justify-center gap-x-2 overflow-hidden hover:border-accent hover:text-accent group`}
                        onClick={() => handleTabClick("All")}
                    >
                        <BsStar />
                        <span className="mb-[-5px]">All</span>
                    </button>
                    <button
                        className={`tab ${activeTab === "Web Development" ? "active text-accent border-accent" : ""} btn border border-white/50 px-5 h-[40px] transition-all duration-300 flex items-center justify-center gap-x-2 overflow-hidden hover:border-accent hover:text-accent group`}
                        onClick={() => handleTabClick("Web Development")}
                    >
                        <BsCodeSlash />
                        <span className="mb-[-2px]">Web Development</span>

                    </button>
                    <button
                        className={`tab ${activeTab === "ECommerce" ? "active text-accent border-accent" : ""} btn border border-white/50 px-5 h-[40px] transition-all duration-300 flex items-center justify-center gap-x-2 overflow-hidden hover:border-accent hover:text-accent group`}
                        onClick={() => handleTabClick("ECommerce")}
                    >
                        <BsLaptop />
                        <span className="mb-[-4px]">ECommerce</span>
                    </button>
                </div>
                {/* =================== */}
                <div className="swiper-container workslider mb-12">
                    {activeTab === "All" && (
                        <>
                            {workData.slides.map((slide) => {
                                return (
                                    <div className="grid grid-cols-3 gap-6 cursor-pointer">
                                        {
                                            slide.images.map((image, index) => {
                                                return (
                                                    <div className="w-full mx-auto relative rounded-lg overflow-hidden flex items-center justify-center group border border-slate-600">
                                                        <a href={image.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center relative overflow-hidden group"
                                                            key={index}
                                                        >
                                                            {/* Images */}
                                                            <Image src={image.path} width={500} height={300} alt="Work" />
                                                            {/* Overlay Gradirnt */}
                                                            <div className="absolute inset-0 bg-gradient-to-tl from-black via-zinc-600 to-black opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                                                            {/* Title */}
                                                            <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-8 group-hover:md:-translate-y-20 transition-all duration-300">
                                                                <div className="flex items-center gap-x-2 text-[8px] md:text-[13px] tracking-[0.2em]">
                                                                    {/* Title part 1 */}
                                                                    <div className="delay-100">
                                                                        VISIT
                                                                    </div>
                                                                    {/* Title part 2 */}
                                                                    <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                                                                        WEBSITE
                                                                    </div>
                                                                    {/* Icons */}
                                                                    <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                                                                        <BsArrowRight />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                );
                            })}
                        </>
                    )}

                    {activeTab === "Web Development" && (
                        <>
                            {workData1.slides.map((slide, index) => {
                                return (
                                    <div className="grid grid-cols-3 gap-0 gap-y-4 lg:gap-4 cursor-pointer">
                                        {
                                            slide.images.map((image, index) => {
                                                return (
                                                    <div className="w-full mx-auto relative rounded-lg overflow-hidden flex items-center justify-center group border border-slate-600">
                                                        <a href={image.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center relative overflow-hidden group"
                                                            key={index}
                                                        >
                                                            {/* Images */}
                                                            <Image src={image.path} width={500} height={300} alt="Work" />
                                                            {/* Overlay Gradirnt */}
                                                            <div className="absolute inset-0 bg-gradient-to-tl from-black via-zinc-600 to-black opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                                                            {/* Title */}
                                                            <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-8 group-hover:md:-translate-y-20 transition-all duration-300">
                                                                <div className="flex items-center gap-x-2 text-[8px] md:text-[13px] tracking-[0.2em]">
                                                                    {/* Title part 1 */}
                                                                    <div className="delay-100">
                                                                        VISIT
                                                                    </div>
                                                                    {/* Title part 2 */}
                                                                    <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                                                                        WEBSITE
                                                                    </div>
                                                                    {/* Icons */}
                                                                    <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                                                                        <BsArrowRight />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                );
                            })}
                        </>
                    )}

                    {activeTab === "ECommerce" && (
                        <>
                            {workData2.slides.map((slide, index) => {
                                return (
                                    <div className="grid grid-cols-3 gap-0 gap-y-4 lg:gap-4 cursor-pointer">
                                        {
                                            slide.images.map((image, index) => {
                                                return (
                                                    <div className="w-full mx-auto relative rounded-lg overflow-hidden flex items-center justify-center group border border-slate-600">
                                                        <a href={image.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center relative overflow-hidden group"
                                                            key={index}
                                                        >
                                                            {/* Images */}
                                                            <Image src={image.path} width={500} height={300} alt="Work" />
                                                            {/* Overlay Gradirnt */}
                                                            <div className="absolute inset-0 bg-gradient-to-tl from-black via-zinc-600 to-black opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                                                            {/* Title */}
                                                            <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-8 group-hover:md:-translate-y-20 transition-all duration-300">
                                                                <div className="flex items-center gap-x-2 text-[8px] md:text-[13px] tracking-[0.2em]">
                                                                    {/* Title part 1 */}
                                                                    <div className="delay-100">
                                                                        VISIT
                                                                    </div>
                                                                    {/* Title part 2 */}
                                                                    <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                                                                        WEBSITE
                                                                    </div>
                                                                    {/* Icons */}
                                                                    <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                                                                        <BsArrowRight />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                );
                            })}
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default FolioCards

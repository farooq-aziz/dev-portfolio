import Image from "next/image";
import { useEffect, useState } from "react";
// Swiper 
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper Required Modules
import { Pagination } from "swiper";
// Swiper Style
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// Icons
import { BsArrowRight, BsCodeSlash, BsLaptop, BsStar } from "react-icons/bs";
// Images
import thumb1 from '../public/thumb1.PNG'
import thumb2 from '../public/thumb2.PNG'
import thumb3 from '../public/thumb3.PNG'
import thumb4 from '../public/thumb4.PNG'
import thumb5 from '../public/thumb5.png'
import thumb6 from '../public/thumb6.png'
import thumb7 from '../public/thumb7.png'
import thumb8 from '../public/thumb8.png'
import thumb9 from '../public/thumb9.PNG'
import thumb10 from '../public/thumb10.PNG'
import thumb11 from '../public/thumb11.PNG'
import thumb12 from '../public/thumb12.PNG'
import thumb13 from '../public/thumb13.png'
import thumb14 from '../public/thumb14.PNG'
import thumb15 from '../public/thumb15.png'

// Data
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
      ],
    },
    {
      images: [
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
          url: 'https://infinityanimationspro.com/'
        },
        {
          title: 'title',
          path: thumb8,
          url: 'https://seoresultspro.com/'
        },
      ],
    },
    {
      images: [
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
      ],
    },
    {
      images: [
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
          url: 'https://infinityanimationspro.com/'
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
      ],
    },
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
      ],
    },
    {
      images: [
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
// ======== mbl ==========
const workData3 = {
  slides: [
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
      url: 'https://infinityanimationspro.com/'
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
    }
  ],
};
const workData4 = {
  slides: [
    {
      title: 'title',
      path: thumb6,
      url: 'https://crystallitedigital.com/'
    },
    {
      title: 'title',
      path: thumb7,
      url: 'https://infinityanimationspro.com/'
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
};
const workData5 = {
  slides: [
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
};

const WorkSlider = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    // Initial check
    handleResize();
    window.addEventListener('resize', handleResize);
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  // ===========================
  const [activeTab, setActiveTab] = useState("All");
  const [selectedWorkUrl, setSelectedWorkUrl] = useState(null);

  const handleTabClick = (tabId, workUrl) => {
    setActiveTab(tabId);
    setSelectedWorkUrl(workUrl);
  };

  return (
    <>
      <div className="tabs flex flex-wrap justify-center gap-4 md:gap-x-8 mb-8">
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
      {isMobile ? (
        <div className="swiper-container workslider">
          <Swiper
            spaceBetween={10}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="h-[280px] sm:h-[500px]"
          >
            {activeTab === "All" && (
              <>
                {workData3.slides.map((slide, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="w-full mx-auto relative rounded-lg overflow-hidden flex items-center justify-center group">
                        <a href={slide.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center relative overflow-hidden group"
                        >
                          {/* Images */}
                          <Image src={slide.path} width={500} height={300} alt="Work" />
                          {/* Overlay Gradirnt */}
                          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                          {/* Title */}
                          <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-16 transition-all duration-300">
                            <div className="flex items-center gap-x-2 text-[14px] tracking-[0.2em]">
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
                    </SwiperSlide>
                  );
                })}
              </>
            )}

            {activeTab === "Web Development" && (
              <>
                {workData4.slides.map((slide, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="w-full mx-auto relative rounded-lg overflow-hidden flex items-center justify-center group">
                        <a href={slide.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center relative overflow-hidden group"
                        >
                          {/* Images */}
                          <Image src={slide.path} width={500} height={300} alt="Work" />
                          {/* Overlay Gradirnt */}
                          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                          {/* Title */}
                          <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-16 transition-all duration-300">
                            <div className="flex items-center gap-x-2 text-[14px] tracking-[0.2em]">
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
                    </SwiperSlide>
                  );
                })}
              </>
            )}

            {activeTab === "ECommerce" && (
              <>
                {workData5.slides.map((slide, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="w-full mx-auto relative rounded-lg overflow-hidden flex items-center justify-center group">
                        <a href={slide.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center relative overflow-hidden group"
                        >
                          {/* Images */}
                          <Image src={slide.path} width={500} height={300} alt="Work" />
                          {/* Overlay Gradirnt */}
                          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                          {/* Title */}
                          <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-16 transition-all duration-300">
                            <div className="flex items-center gap-x-2 text-[14px] tracking-[0.2em]">
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
                    </SwiperSlide>
                  );
                })}
              </>
            )}
          </Swiper>
        </div>
      ) : (
        <div className="swiper-container workslider">
          <Swiper
            spaceBetween={10}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="h-[280px] sm:h-[500px]"
          >
            {activeTab === "All" && (
              <>
                {workData.slides.map((slide, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="grid grid-cols-2 grid-rows-2 gap-0 gap-y-4 lg:gap-4 cursor-pointer">
                        {
                          slide.images.map((image, index) => {
                            return (
                              <div className="w-[94%] lg:w-full mx-auto relative rounded-lg overflow-hidden flex items-center justify-center group">
                                <a href={image.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center relative overflow-hidden group"
                                  key={index}
                                >
                                  {/* Images */}
                                  <Image src={image.path} width={500} height={300} alt="Work" />
                                  {/* Overlay Gradirnt */}
                                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
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
                    </SwiperSlide>
                  );
                })}
              </>
            )}

            {activeTab === "Web Development" && (
              <>
                {workData1.slides.map((slide, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="grid grid-cols-2 grid-rows-2 gap-0 gap-y-4 lg:gap-4 cursor-pointer">
                        {
                          slide.images.map((image, index) => {
                            return (
                              <div className="w-[94%] lg:w-full mx-auto relative rounded-lg overflow-hidden flex items-center justify-center group">
                                <a href={image.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center relative overflow-hidden group"
                                  key={index}
                                >
                                  {/* Images */}
                                  <Image src={image.path} width={500} height={300} alt="Work" />
                                  {/* Overlay Gradirnt */}
                                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
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
                    </SwiperSlide>
                  );
                })}
              </>
            )}

            {activeTab === "ECommerce" && (
              <>
                {workData2.slides.map((slide, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="grid grid-cols-2 grid-rows-2 gap-0 gap-y-4 lg:gap-4 cursor-pointer">
                        {
                          slide.images.map((image, index) => {
                            return (
                              <div className="w-[94%] lg:w-full mx-auto relative rounded-lg overflow-hidden flex items-center justify-center group">
                                <a href={image.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center relative overflow-hidden group"
                                  key={index}
                                >
                                  {/* Images */}
                                  <Image src={image.path} width={500} height={300} alt="Work" />
                                  {/* Overlay Gradirnt */}
                                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
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
                    </SwiperSlide>
                  );
                })}
              </>
            )}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default WorkSlider;


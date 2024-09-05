// Image
import Image from "next/image";
import roundTxt from '../public/rounded-text.png'

// Link
import Link from "next/link";

// Icons
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <>
      <div className='mx-auto xl:mx-0'>
        <Link 
        href={'/work'}
        className='relative w-[82px] h-[82px] md:w-[140px] md:h-[140px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group'
        >
          <Image
            src={roundTxt}
            width={110}
            height={115}
            alt="Button"
            className='animate-spin-slow w-full h-full max-w-[63px] max-h-[70px] md:max-w-[110px] md:max-h-[115px]'
          />
          <HiArrowRight className='absolute text-2xl md:text-4xl group-hover:translate-x-2 transition-all duration-300' />
        </Link>
      </div>
    </>
  )
};

export default ProjectsBtn;

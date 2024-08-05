// Link
import Link from "next/link";

// Icons
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt, FaDownload } from 'react-icons/fa'


const Socials = () => {

  const opnen = () => {
    window.open('../Farooq Aziz-Resume.pdf', '_blank');
  }

  return (
    <>
      <div className='flex flex-row items-center gap-x-6 text-lg'>
        <div className='flex items-center gap-x-4 md:gap-x-6 text-lg'>
          <Link href={'https://github.com/cl-farooqaziz'} className='hover:text-accent transition-all duration-300'>
            <FaGithub className="text-[22px]" />
          </Link>
          <Link href={'http://www.linkedin.com/in/farooq-aziz-b09b40223'} className='hover:text-accent transition-all duration-300'>
            <FaLinkedin className="text-[22px]" />
          </Link>
          <Link href={'mailto:farooqazizbaloch@gmail.com'} className='hover:text-accent transition-all duration-300'>
            <FaEnvelope className="text-[22px]" />
          </Link>
          <Link href={'tel:03162300835'} className='hover:text-accent transition-all duration-300'>
            <FaPhoneAlt className="text-[22px]" />
          </Link>
        </div>
        <div>
          <Link href={'#'} onClick={opnen} className='hover:text-accent transition-all duration-300 flex items-center gap-x-2 md:gap-x-4 border py-2 px-3 md:px-4 rounded-lg'>
            <span className="text-[14px] md:text-[16px]">Download CV</span>
            <FaDownload className="text-[14px] md:text-[18px]" />
          </Link>
        </div>
      </div>
    </>
  )
};

export default Socials;

// Icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// Nav Data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome className='text-[24px] md:text-[28px] lg:text-[24px]' /> },
  { name: 'about', path: '/about', icon: <HiUser className='text-[24px] md:text-[28px] lg:text-[24px]' /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup className='text-[24px] md:text-[28px] lg:text-[24px]' /> },
  { name: 'work', path: '/work', icon: <HiViewColumns className='text-[24px] md:text-[28px] lg:text-[24px]' /> },
  // { name: 'testimonials', path: '/testimonials', icon: <HiChatBubbleBottomCenterText className='text-[24px] md:text-[28px] lg:text-[24px]' /> },
  { name: 'contact', path: '/contact', icon: <HiEnvelope className='text-[24px] md:text-[28px] lg:text-[24px]' /> },
];

// Link
import Link from 'next/link';

// Router
import { useRouter } from 'next/router';

const Nav = () => {

  const router = useRouter();
  const pathname = router.pathname

  return (
    <>
      <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
        {/* Inner */}
        <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[65px] md:h-[80px] xl:h-max py-8 bg-black md:bg-white/10 backdrop:blur-sm text-3xl xl:text-xl xl:rounded-full'>
          {navData.map((link, index) => {
            return (
              <Link className={`${link.path === pathname && 'text-accent'} relative flex items-center group hover:text-accent transition-all duration-300`}
                href={link.path}
                key={index}
              >
                {/* Tooltip */}
                <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
                  <div className='bg-white relative text-primary flex items-center p-[6px] rounded-[3px]'>
                    <div className='text-[12px] leading-none font-semibold capitalize'>
                      {link.name}
                    </div>
                    {/* Triangle */}
                    <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'></div>
                  </div>
                </div>
                {/* Icons */}
                <div>
                  {link.icon}
                </div>
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  )
};

export default Nav;

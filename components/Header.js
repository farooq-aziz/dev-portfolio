// Image
import Image from "next/image";
import logo from '../public/logo.png'

// Link
import Link from "next/link";

// Components
import Socials from "../components/Socials";

const Header = () => {
  return (
    <>
      <header className='bg-black md:bg-transparent z-30 w-full flex items-center px-0 xl:h-[90px] fixed top-0 lg:top-2 left-0'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-4 md:py-8'>
            {/* Logo */}
            <Link href={'/'} className='hidden lg:block text-lg'>
              <Image
                src={logo}
                width={70}
                height={40}
                alt="Logo"
                priority={true}
              />
            </Link>
            {/* Socials */}
            <Socials />
          </div>
        </div>
      </header>
    </>
  )
};

export default Header;

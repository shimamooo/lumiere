import Avatar from '@components/ui/Avatar';
import { Popover } from '@headlessui/react';
import { Gradient } from '@lib/gradient';
import projectLumiere from '@public/images/logos/ProjectLumiere.svg';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiChevronDown, FiSearch } from 'react-icons/fi';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { useMediaQuery } from 'react-responsive';

export default function Header({ pageType }) {
  useEffect(() => {
    if (pageType === 'everything else & not home (obviously rename this)') {
      const gradient = new Gradient();
      gradient.initGradient('.header-gradient-canvas');
    }
  }, [pageType]);

  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 889 });

  if (pageType === 'home') {
    // Home page header — includes several differences for the home page
    return (
      <header className="sticky top-0 z-40 flex items-center bg-gray-900 border-b border-gray-700 bg-opacity-90 backdrop-filter backdrop-blur-sm backdrop-saturate-200 h-18 lg:h-16">
        <div className="container flex items-center">
          <div className="pr-8 border-r border-gray-600 lg:pr-7 md:border-0 md:pr-0">
            <Link href="/">
              <a>
                <figure className="flex items-center group">
                  <div className="relative mr-1.5 mb-0.5 w-10 h-10 lg:w-8 lg:h-8">
                    <Image
                      src={projectLumiere}
                      alt="Project Lumiere logo"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <figcaption className="mb-1 font-serif text-3xl leading-none text-gray-300 transition-colors duration-200 lg:text-2xl group-hover:text-gray-200 lg:mb-0.5">
                    Lumiere
                  </figcaption>
                </figure>
              </a>
            </Link>
          </div>

          {/* Menu bar for large screens */}
          <nav className="flex mt-1 space-x-5 text-sm md:hidden">
            <Link href="/press">
              <a className="ml-8 font-medium text-gray-400 transition-colors lg:text-xs hover:text-gray-300 lg:ml-7">
                Publications
              </a>
            </Link>
            <button
              type="button"
              className="flex items-center transition-colors hover:text-gray-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              <p className="font-medium lg:text-xs">Discover</p>
              <FiChevronDown className="w-5 h-5 ml-1 transition-transform lg:w-4 lg:h-4" />
            </button>
          </nav>
          <div
            className={`absolute left-0 w-full py-5 bg-gray-900 border-b border-gray-700 bg-opacity-90 top-18 lg:top-16 ${
              isOpen ? '' : 'hidden'
            }`}
          >
            <div className="container beta">This is Discover</div>
          </div>
          <form className="relative flex items-center ml-auto mr-7 lg:mr-6 md:hidden beta">
            <input
              type="text"
              name="search"
              placeholder="Search for anything"
              className={`py-3 lg:py-2.5 rounded-lg border-2 bg-transparent ${
                session ? 'pr-18 lg:pr-14' : 'pr-9 lg:pr-8'
              } pl-4 text-sm border-gray-700 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 hover:border-gray-600 placeholder-gray-500`}
            />
            <FiSearch className="absolute right-0 w-6 h-6 mr-4 text-gray-600" />
          </form>
          {session ? (
            <Avatar renderPosition="container" />
          ) : (
            <button
              type="button"
              className="px-5 py-3 text-sm lg:text-xs button-primary lg:px-4 lg:py-2.5 md:hidden"
              onClick={() => signIn()}
            >
              Sign in
            </button>
          )}

          {/* Menu bar for small screens */}
          <button
            type="button"
            className="hidden w-12 h-8 ml-auto transition bg-gray-500 place-items-center rounded-2xl opacity-80 md:grid hover:bg-gray-400 hover:opacity-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            <IoReorderThreeOutline className="w-6 text-gray-100 h-7" />
          </button>
        </div>

        <div
          className={`fixed top-0 z-50 w-screen h-full bg-gray-900 opacity-95 mt-16 p-5 space-y-5 ${
            isOpen && isMobile ? '' : 'hidden'
          }`}
        >
          <Link href="/press">
            <a className="">
              <h2 className="transition-colors duration-200 hover:text-gray-300">
                Publications
              </h2>
            </a>
          </Link>
          <div>
            <h2>Discover</h2>
            <h3 className="text-xl transition-colors duration-200 hover:text-gray-300 beta">
              This is Discover
            </h3>
          </div>
          <nav className="flex mt-1 text-sm md:hidden" />
        </div>
      </header>
    );
  }

  // Default header — for everything else
  return (
    <header className="sticky top-0 z-40 flex items-center mb-16 bg-gray-900 border-b border-gray-700 h-18 lg:h-16">
      <div className="absolute z-0 w-full h-full -mt-60 lg:-mt-64">
        <div className="relative h-48">
          <canvas
            className="absolute top-0 header-gradient-canvas"
            data-js-darken-top
            data-transition-in
          />
        </div>
      </div>
      <div className="container z-40 flex items-center">
        <div className="pr-8 border-r border-gray-600 lg:pr-7 md:border-0 md:pr-0">
          <Link href="/">
            <a>
              <figure className="flex items-center group">
                <div className="relative mr-1.5 mb-0.5 w-10 h-10 lg:w-8 lg:h-8">
                  <Image
                    src={projectLumiere}
                    alt="Project Lumiere logo"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <figcaption className="mb-1 font-serif text-3xl leading-none text-gray-300 transition-colors duration-200 lg:text-2xl group-hover:text-gray-200 lg:mb-0.5">
                  Lumiere
                </figcaption>
              </figure>
            </a>
          </Link>
        </div>

        {/* Menu bar for large screens */}
        <nav className="flex mt-1 space-x-5 text-sm md:hidden">
          <Link href="/press">
            <a className="ml-8 font-medium text-gray-400 transition-colors lg:text-xs hover:text-gray-300 lg:ml-7">
              Publications
            </a>
          </Link>
          <button
            type="button"
            className="flex items-center transition-colors hover:text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <p className="font-medium lg:text-xs">Discover</p>
            <FiChevronDown className="w-5 h-5 ml-1 transition-transform lg:w-4 lg:h-4" />
          </button>
        </nav>
        <div
          className={`absolute left-0 w-full py-5 bg-gray-900 border-b border-gray-700 bg-opacity-90 top-18 lg:top-16 ${
            isOpen ? '' : 'hidden'
          }`}
        >
          <div className="container beta">This is Discover</div>
        </div>
        <form className="relative flex items-center ml-auto mr-7 lg:mr-6 md:hidden beta">
          <input
            type="text"
            name="search"
            placeholder="Search for anything"
            className={`text-field ${
              session ? 'pr-18 lg:pr-14' : 'pr-9 lg:pr-8'
            } border-gray-700`}
          />
          <FiSearch className="absolute right-0 w-6 h-6 mr-4 text-gray-600" />
        </form>
        {session ? (
          <Avatar renderPosition="container" />
        ) : (
          <button
            type="button"
            className="px-5 py-3 text-sm lg:text-xs button-primary lg:px-4 lg:py-2.5 md:hidden"
            onClick={() => signIn()}
          >
            Sign in
          </button>
        )}

        {/* Menu bar for small screens */}
        <button
          type="button"
          className="hidden w-12 h-8 ml-auto transition bg-gray-500 place-items-center rounded-2xl opacity-80 md:grid hover:bg-gray-400 hover:opacity-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          <IoReorderThreeOutline className="w-6 text-gray-100 h-7" />
        </button>
      </div>

      <div
        className={`fixed top-0 z-50 w-screen h-full bg-gray-900 opacity-95 mt-16 p-5 space-y-5 ${
          isOpen && isMobile ? '' : 'hidden'
        }`}
      >
        <Link href="/press">
          <a className="">
            <h2 className="transition-colors duration-200 hover:text-gray-300">
              Publications
            </h2>
          </a>
        </Link>
        <div>
          <h2>Discover</h2>
          <h3 className="text-xl transition-colors duration-200 hover:text-gray-300 beta">
            This is Discover
          </h3>
        </div>
        <nav className="flex mt-1 text-sm md:hidden" />
      </div>
    </header>
  );
}

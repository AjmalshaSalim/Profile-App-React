import React, { useState, useEffect } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const toggleProfile = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const navbarClasses =
    scrollDirection === 'up'
      ? 'fixed top-0 left-0 w-full transition-transform transform translate-y-0 duration-500'
      : 'fixed top-0 left-0 w-full transition-transform transform -translate-y-28 opacity-50 duration-500';

  return (
    <nav className={navbarClasses + ' bg-gradient-to-r from-sky-800 from-10% via-sky-700 via-30% to-emerald-600 to-90% z-[888]'}>
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-6">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">

            <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Open main menu</span>

              <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>

              <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center">

            </div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">

                <a href="#" class="text-white bg-cyan-600 shadow-md transform hover:scale-110 transition duration-300 hover:bg-emerald-500 hover:animate-pulse rounded-lg px-6 py-3 text-md font-light " aria-current="page"> Home </a>
                <a href="#" class="text-white bg-cyan-600 shadow-md transform hover:scale-110 transition duration-300 hover:bg-emerald-500 hover:animate-pulse rounded-lg px-6 py-3 text-md font-light ` "> Qualifications </a>
                <a href="#" class="text-white bg-cyan-600 shadow-md transform hover:scale-110 transition duration-300 hover:bg-emerald-500 hover:animate-pulse rounded-lg px-6 py-3 text-md font-light ` "> Experiences </a>
                <a href="#" class="text-white bg-cyan-600 shadow-md transform hover:scale-110 transition duration-300 hover:bg-emerald-500 hover:animate-pulse rounded-lg px-6 py-3 text-md font-light ` "> Technical Skills </a>
                <a href="#" class="text-white bg-cyan-600 shadow-md transform hover:scale-110 transition duration-300 hover:bg-emerald-500 hover:animate-pulse rounded-lg px-6 py-3 text-md font-light ` "> Projects </a>
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button type="button" class="relative rounded-full py-3 px-3 bg-emerald-400 p-1 text-whitetransform hover:scale-110 transition duration-300 hover:bg-cyan-500 hover:animate-pulse shadow-sm font-light text-white">
              <span class="absolute -inset-1.5"></span>
              <span class="sr-only">View notifications</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
            </button>

            <div class="relative ml-3">
              <div>
                <button onClick={toggleProfile} type="button" class="relative flex rounded-lg bg-emerald-400 shadow-md transform hover:scale-110 transition duration-300 hover:bg-cyan-500 hover:animate-pulse py-3 px-6 text-md text-white font-light" id="user-menu-button" aria-expanded="false" aria-haspopup="true" style={{ userSelect: 'none' }}>
                  <span class="absolute -inset-1.5"></span>
                  <span class="sr-only">Open user menu</span>
                  Contact
                </button>
              </div>


              <div class={`${isOpen ? 'block' : 'hidden'} absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1`}>

                <a href="#" class="block px-4 py-2 text-sm  text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                <a href="#" class="block px-4 py-2 text-sm  text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
                <a href="#" class="block px-4 py-2 text-sm  text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="sm:hidden" id="mobile-menu">
        <div class="space-y-1 px-2 pb-3 pt-2">

          <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
          <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
          <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
          <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;

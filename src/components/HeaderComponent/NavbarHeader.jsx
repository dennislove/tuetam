import React, { useState } from 'react';

import { Link, useLocation, useMatch } from 'react-router-dom';
import data from '../../assets/data.json';
import clsx from 'clsx';

const NavItem = ({ children, href, id }) => {
  const location = useLocation();

  const isActive =
    useMatch(href) || (href === '/' && location.pathname === '/');

  return (
    <li
      className="nav-item hover:text-[#FED8B1] md:text-[18px] sm:text-base font-rob"
      key={id}
    >
      <Link
        to={href}
        className={`nav-link ${isActive ? 'text-white font-bold ' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        {children}
      </Link>
    </li>
  );
};
const LoadingSpinner = () => (
  <div className="relative w-full h-full bg-[#ffffff7b]">
    <div className="absolute -translate-x-1/2 translate-y-full left-1/2 top-1/2 ">
      <div className="animate-spin w-20 h-20 border-[7px] rounded-full border-[#1dc071] border-t-transparent border-b-transparent"></div>
    </div>
  </div>
);

function NavbarHeader() {
  const [isSideMenuOpen, setMenu] = useState(false);
  const headerList = data.sidebar;

  const [loading, setLoading] = useState(false);

  return (
    <main className="shadow-md w-full top-0 left-0 relative">
      {loading && <LoadingSpinner />}
      <nav className="md:h-20 sm:h-16 pm:h-16 bg-[#A67B5B] text-secondary lg:px-[120px]  pm:px-5 ">
        <section className="flex items-center justify-between">
          {/* menu */}
          <button className="md:hidden" onClick={() => setMenu(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-white "
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {/* logo */}
          <a href="/">
            <img
              src="./images/logo.png"
              alt="logo-tuetam"
              loading="lazy"
              className="rounded-full text-white md:h-20 pm:h-16 border-2 border-yellow-600 "
            />
          </a>

          <ul className=" text-black items-center justify-center lg:gap-14 md:gap-10 sm:gap-6 hidden md:flex">
            {headerList.map((item) => (
              <NavItem key={item.id} href={item.path}>
                {item.name}
              </NavItem>
            ))}
          </ul>
        </section>

        {/* sidebar mobile menu */}
        <div
          onClick={() => setMenu(false)}
          className={clsx(
            ' fixed h-full w-screen lg:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full transition-all ',
            isSideMenuOpen && 'translate-x-0'
          )}
        >
          <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-[50] pm:w-[65%] flex  ">
            <div
              onClick={() => setMenu(false)}
              className="absolute right-1 top-1 p-1 bg-primary   cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <img
              src="./images/logo.png"
              alt="logo-tuetam"
              loading="lazy"
              className="mx-auto rounded-full  pm:h-20 border-2 border-yellow-600"
            />
            <ul className="mt-2">
              {headerList.map((item) => (
                <li
                  key={item.id}
                  className=" w-full text-xl uppercase cursor-pointer"
                >
                  <Link
                    to={item.path}
                    className=" items-center py-3 block border-b border-[#f2f2f2]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </nav>
    </main>
  );
}

export default NavbarHeader;

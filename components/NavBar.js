import Link from 'next/link';
import { useState } from 'react';

const NavBar = ({ className }) => {
  const [mobMenu, setMobMenu] = useState(false);

  return (
    <nav className={`z-50 w-full relative bg-white shadow ${className || ''}`}>
      <div className="relative z-30 h-full">
        <div className="h-full max-w-7xl mx-auto flex justify-between items-center px-2 sm:px-6 lg:px-8 md:justify-start md:space-x-10">
          <div>
            <Link href="/" className="flex">
              <a>
                <span className="sr-only">Home</span>
                <img
                  className="h-8 w-auto md:h-12"
                  src="/find-food-logo.svg"
                  alt="find food logo"
                />
              </a>
            </Link>
          </div>
          <div className=" md:hidden">
            <div className="flex items-center md:ml-12">
              <div onClick={() => setMobMenu(true)}>
                <a className="ml-8 inline-flex items-center justify-center px-2 py-1 border border-transparent rounded-md shadow-sm text-base font-medium text-gray-700  hover:text-royalb hover:border-royalb border border-gray-600 text-sm transition-all duration-400 ease-in-out cursor-pointer ">
                  Menu
                </a>
              </div>
            </div>
          </div>

          {mobMenu && (
            <div className="z-50 w-screen bg-white fixed top-0 left-0 shadow-xl">
              <Link href="/">
                <img
                  className="absolute left-0 top-0 h-8 mt-10 ml-2 cursor-pointer"
                  src="/find-food-logo.svg"
                  alt="Home"
                />
              </Link>
              <button onClick={() => setMobMenu(false)}>
                {' '}
                <img
                  className="absolute right-0 top-0 mt-10 mr-4 cursor-pointer h-6"
                  src="/icons/close.svg"
                  alt={`close menu`}
                />
              </button>
              <ul className="flex flex-col text-lg text-black mt-20 mb-10 justify-center items-center space-y-8">
                <li onClick={() => setMobMenu(false)}>
                  <Link href="/">
                    <p className=" text-gray-700 hover:text-indigo-600 transition duration-150 ease-in-out">
                      Home
                    </p>
                  </Link>
                </li>
                <li onClick={() => setMobMenu(false)}>
                  <Link href="/about">
                    <p className=" text-gray-700 hover:text-indigo-600 transition duration-150 ease-in-out">
                      About this project
                    </p>
                  </Link>
                </li>
                <li onClick={() => setMobMenu(false)}>
                  <Link href="/camden-food">
                    <p className=" text-gray-700 hover:text-indigo-600 transition duration-150 ease-in-out">
                      Map
                    </p>
                  </Link>
                </li>
                <li onClick={() => setMobMenu(false)}>
                  <Link href="/donate">
                    <p className=" btn-primary hover:text-indigo-600 transition duration-150 ease-in-out w-40 text-center">
                      Donate
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          )}

          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <div className="flex space-x-10">
              <a
                href="/about"
                className="text-base font-medium text-gray-700 hover:text-indigo-600 transition duration-150 ease-in-out font-bold"
              >
                About this project
              </a>
              <a
                href="/camden-food"
                className="text-base font-medium text-gray-700 hover:text-indigo-600 transition duration-150 ease-in-out font-bold"
              >
                Map
              </a>
            </div>
            <div className="flex items-center md:ml-12">
              <Link href="/donate">
                <a className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium  text-white btn-primary">
                  Donate
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

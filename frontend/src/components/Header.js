import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const navLinkStyle =
    "block py-2 pl-3 pr-4 uppercase text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

  const navSearch =
    "block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  const navLinkPc =
    "md:flex md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700";

  const navLinkMobile =
    "flex flex-col p-4 mt-4 border border-gray-100 rounded-lg dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 md:flex md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 md:px-0 md:pb-0";

  const hamburgerBtnStyle =
    "inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600";

  const searchBtnStyle =
    "md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1";

  return (
    <>
      <nav className="flex items-center justify-between h-[60px] bg-white border-gray-200 px-5 sm:px-4 dark:bg-gray-900 fixed top-0 left-0 w-full">
        <div>
          <NavLink to="/"></NavLink>
        </div>

        <div
          className={
            toggle
              ? "items-center justify-between w-full md:flex md:w-auto z-10 absolute top-[60px] left-0 bg-white dark:bg-gray-900 px-5 pb-4 md:static"
              : "items-center justify-between hidden w-full md:flex md:w-auto"
          }
        >
          {/*mobile search*/}
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className={navSearch}
              placeholder="Search..."
            />
          </div>

          <ul className={toggle ? navLinkMobile : navLinkPc}>
            <li>
              <a href="#" className={navLinkStyle} aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="#" className={navLinkStyle}>
              Contact
              </a>
            </li>
            <li>
              <a href="#" className={navLinkStyle}>
                Login
              </a>
            </li>
          </ul>
        </div>

        <div className="relative hidden md:block">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="search-navbar"
            className={navSearch}
            placeholder="Search..."
          />
        </div>

        <div className="flex md:hidden">
          <div onClick={() => (toggle ? setToggle(false) : setToggle(true))}>
            <button type="button" className={searchBtnStyle}>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div onClick={() => (toggle ? setToggle(false) : setToggle(true))}>
            <button className={hamburgerBtnStyle}>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

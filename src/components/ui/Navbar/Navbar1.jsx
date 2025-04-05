import { useState } from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Navbar1 = () => {
  const [open, setOpen] = useState(false);
  const links1 = [
    { id: 1, name: "Home" },
    { id: 2, name: "About" },
    { id: 3, name: "Contact" },
  ];

  return (
    <nav className="w-full flex justify-center px-2 mx-auto lg:border-b sticky z-50 bg-white shadow-sm">
      <div className="max-w-7xl w-full py-5 flex items-center justify-between md:justify-normal">
        {/* Logo */}
        <div className="md:w-1/3 flex gap-2 items-center">
          <svg
            width="70"
            height="40"
            viewBox="0 0 70 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.2551 1.61586C38.1803 0.653384 39.4368 0.112671 40.7452 0.112671C46.6318 0.112671 52.1793 0.112674 57.6424 0.112685C68.6302 0.112708 74.1324 13.9329 66.3629 22.0156L49.4389 39.6217C48.662 40.43 47.3335 39.8575 47.3335 38.7144V23.2076L49.2893 21.1729C50.8432 19.5564 49.7427 16.7923 47.5451 16.7923H22.6667L37.2551 1.61586Z"
              fill="#3A04FF"
            ></path>
            <path
              d="M32.7449 38.3842C31.8198 39.3467 30.5633 39.8874 29.2549 39.8874C23.3683 39.8874 17.8208 39.8874 12.3577 39.8874C1.36983 39.8873 -4.13236 26.0672 3.63721 17.9844L20.5612 0.378369C21.3381 -0.429908 22.6666 0.142547 22.6666 1.28562L22.6667 16.7923L20.7108 18.8271C19.1569 20.4437 20.2574 23.2077 22.455 23.2077L47.3335 23.2076L32.7449 38.3842Z"
              fill="#3A04FF"
            ></path>
          </svg>
          <h1 className="text-3xl font-bold text-[#3A04FF]">Logo</h1>
        </div>

        {/* Desktop View */}
        <div className="md:w-2/3 hidden lg:flex items-center justify-between">
          <ul className="flex gap-5 lg:gap-15 text-[17px] font-light">
            {links1.map(link => (
              <li
                key={link.id}
                className="cursor-pointer hover:text-[#3A04FF] relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#3A04FF] after:transition-all"
              >
                {link.name}
              </li>
            ))}
          </ul>

          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search products"
              className="hover:ring-0 focus:outline-none border border-black ml-10 px-4 text-sm py-2 w-[20rem] rounded-3xl"
            />
            <CiSearch className="absolute top-2 right-3 size-5" />
          </div>

          <div className="ml-4 relative">
            <CiShoppingCart className="size-8 text-[#3A04FF]" />
            <span className="text-[0.5rem] text-white py-1 px-2 bg-[#3A04FF] rounded-full absolute -top-1 -right-1">
              2
            </span>
          </div>

          <div className="ml-5">
            <button className="bg-[#3A04FF] text-white px-8 py-2 rounded-2xl cursor-pointer hover:bg-blue-600">
              Login
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="lg:hidden hover:bg-gray-200 rounded-full p-2 z-50"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <IoMdClose className="size-6 cursor-pointer" />
          ) : (
            <IoMdMenu className="size-6 cursor-pointer" />
          )}
        </div>

        {/* Mobile Sidebar */}
        {open && (
          <div
            className="fixed inset-0 bg-black/30 z-40"
            onClick={() => setOpen(false)}
          >
            <div
              className="absolute top-0 right-0 h-full w-64 bg-white shadow-md p-6 flex flex-col gap-4"
              onClick={e => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold text-[#3A04FF] mb-2">Menu</h2>
              {links1.map(link => (
                <p
                  key={link.id}
                  className="text-lg text-gray-700 hover:text-[#3A04FF] cursor-pointer"
                >
                  {link.name}
                </p>
              ))}
              <hr />
              <button className="bg-[#3A04FF] text-white px-5 py-2 rounded-xl w-full mt-4">
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar1;

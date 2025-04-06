import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar3 = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { id: 1, name: "Features" },
    { id: 2, name: "Pricing" },
    { id: 3, name: "Solutions" },
    { id: 4, name: "Docs" },
    { id: 5, name: "Blog" },
  ];

  return (
    <nav className="w-full sticky top-0 z-50 border-b border-white/10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between relative">
        {/* Logo */}
        <div className="text-white text-2xl font-bold tracking-wide">
          <svg
            id="logo-38"
            width="78"
            height="32"
            viewBox="0 0 78 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path
              d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z"
              class="ccustom"
              fill="#FF7A00"
            ></path>{" "}
            <path
              d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z"
              class="ccompli1"
              fill="#FF9736"
            ></path>{" "}
            <path
              d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z"
              class="ccompli2"
              fill="#FFBC7D"
            ></path>{" "}
          </svg>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-sm font-semibold">
          {navLinks.map(link => (
            <li
              key={link.id}
              className="cursor-pointer hover:underline transition-all duration-300 ease-in-out"
            >
              {link.name}
            </li>
          ))}
        </ul>

        {/* Desktop View */}
        <div className="hidden md:flex gap-4">
          <button className="border border-black text-sm px-4 py-1.5 rounded-full hover:bg-gray-200 hover:text-black transition cursor-pointer">
            Login
          </button>
          <button className="bg-black text-white text-sm px-4 py-1.5 rounded-full hover:bg-gray-800 transition cursor-pointer">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <IoMdClose className="text-2xl" />
          ) : (
            <IoMdMenu className="text-2xl" />
          )}
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="absolute top-full left-0 right-0 bg-black border-t border-white/10 px-4 py-4 shadow-lg animate-dropdown z-40">
            <ul className="flex flex-col gap-4 text-sm font-light">
              {navLinks.map(link => (
                <li
                  key={link.id}
                  className="cursor-pointer hover:text-gray-300 transition"
                >
                  {link.name}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-2">
              <button className="border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
                Login
              </button>
              <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar3;

import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import gsap from "gsap";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(sidebarRef.current, {
        x: "100%",
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  }, [menuOpen]);

  const handleNavigate = (path) => {
    setMenuOpen(false);
    setTimeout(() => {
      navigate(path);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }, 100);
  };

 const activeStyle = ({ isActive }) =>
  isActive
    ? "text-green-600 font-semibold hover:text-green-600"
    : "text-black hover:text-green-600";


  const serviceItems = [
    { label: "Corporate", slug: "corporate" },
    { label: "Advertising", slug: "advertisement" },
    { label: "Mall Activation", slug: "mall" },
    { label: "Market Activation", slug: "market" },
    { label: "Product Advertising", slug: "product" },
  ];

  return (
    <div>
      <nav className="flex justify-between uppercase   py-2 relative">
        <Link
          to="/"
          className="medium font-semibold tracking-tighter leading-none cursor-pointer"
        >
          dam <br /> craft <br /> events.
        </Link>
        <ul className="nav-links flex gap-10 text-[0.8rem]  h-fit font-semibold  relative">
          <li className="hidden sm:block ">
            <NavLink className={activeStyle}  to="/">home</NavLink>
          </li>
          <li className="hidden sm:block">
            <NavLink className={activeStyle} to="/about">about</NavLink>
          </li>

          {/* Wrap the whole dropdown in one block to prevent flicker */}
          <div
            className="relative hidden sm:block"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <li className="cursor-pointer">
              <NavLink className={activeStyle} to="/services">services</NavLink>
              
            </li>

            {isDropdownOpen && (
              <div className="absolute top-5 left-0 bg-gray-300 w-[210px] p-6 rounded-2xl z-50 flex flex-col gap-2 shadow-xl">
                {serviceItems.map(({ label, slug }) => (
                  <Link
                    key={slug}
                    to={`/service/${slug}`}
                    className="hover:text-zinc-700"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <li className="hidden sm:block">
            <NavLink className={activeStyle} to="/work">work</NavLink>
          </li>

          <li className="block sm:hidden">
            <i
              className={`ri-${menuOpen ? "close-line" : "menu-2-line"} cursor-pointer text-xl`}
              onClick={toggleMenu}
            ></i>
          </li>

          <li className="hidden sm:block">
            <i className="ri-add-line cursor-pointer"></i>
          </li>
        </ul>
      </nav>

      {/* Mobile Sidebar */}
      <div
  ref={sidebarRef}
  className="fixed top-0 right-0 h-screen w-[60%] bg-white z-[100] shadow-lg translate-x-full p-8 flex flex-col gap-8 uppercase font-semibold text-base sm:hidden"
>
  {/* Close Button (top-right) */}
  <div className="flex justify-end">
    <i
      className="ri-close-line text-2xl cursor-pointer"
      onClick={() => setMenuOpen(false)}
    ></i>
  </div>

  <button
    onClick={() => handleNavigate("/")}
    className="text-left border-b border-zinc-300 pb-2"
  >
    Home
  </button>
  <button
    onClick={() => handleNavigate("/about")}
    className="text-left border-b border-zinc-300 pb-2"
  >
    About
  </button>
  <button
    onClick={() => handleNavigate("/work")}
    className="text-left border-b border-zinc-300 pb-2"
  >
    Work
  </button>
  <button
    onClick={() => handleNavigate("/services")}
    className="text-left border-b border-zinc-300 pb-2"
  >
    Services
  </button>
</div>

    </div>
  );
};

export default Nav;

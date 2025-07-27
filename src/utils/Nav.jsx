import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import gsap from "gsap";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const sidebarRef = useRef(null);
  const servicesSubmenuRef = useRef(null);
  const toggleIconRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);
  const navigate = useNavigate();

  // Scroll handler for dark/light mode
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsDarkMode(currentScrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sidebar animation
  useEffect(() => {
    if (menuOpen) {
      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 0.4,
        ease: "power3.out",
      });
    } else {
      gsap.to(sidebarRef.current, {
        x: "100%",
        duration: 0.4,
        ease: "power3.in",
      });
    }
  }, [menuOpen]);

  // Services submenu animation
  useEffect(() => {
    if (servicesSubmenuRef.current) {
      if (isServicesOpen) {
        gsap.to(servicesSubmenuRef.current, {
          height: "auto",
          opacity: 1,
          duration: 0.3,
          ease: "power3.out",
        });
        gsap.to(toggleIconRef.current, {
          rotate: 180,
          duration: 0.3,
          ease: "power3.out",
        });
      } else {
        gsap.to(servicesSubmenuRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power3.in",
        });
        gsap.to(toggleIconRef.current, {
          rotate: 0,
          duration: 0.3,
          ease: "power3.out",
        });
      }
    }
  }, [isServicesOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (isServicesOpen) setIsServicesOpen(false);
  };

  const toggleServicesSubmenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const handleNavigate = (path) => {
    setMenuOpen(false);
    setIsServicesOpen(false);
    setTimeout(() => {
      navigate(path);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }, 100);
  };

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  const activeStyle = ({ isActive }) =>
    isActive
      ? `${
          isDarkMode ? "text-green-400" : "text-green-600"
        } font-semibold relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:${
          isDarkMode ? "bg-green-400" : "bg-green-600"
        } after:transition-all after:duration-300`
      : `${
          isDarkMode
            ? "text-gray-100 hover:text-green-400"
            : "text-gray-900 hover:text-green-600"
        } relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:${
          isDarkMode ? "bg-green-400" : "bg-green-600"
        } after:transition-all after:duration-300 hover:after:w-full`;

  const serviceItems = [
    { label: "Corporate", slug: "corporate" },
    { label: "Advertising", slug: "advertisement" },
    { label: "Mall Activation", slug: "mall" },
    { label: "Market Activation", slug: "market" },
    { label: "Product Advertising", slug: "product" },
  ];

  return (
    <div
      className={`rounded-tl-[2.4vw] md:rounded-tl-[2.4vw] rounded-br-[2.4vw] md:rounded-br-[2.4vw] top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isDarkMode
          ? "bg-gray-900 text-gray-100 border-x-1 border-y-1 border-gray-700"
          : "bg-white text-gray-900 border-x-1 border-y-1 border-gray-300"
      }`}
    >
      <nav className="flex justify-between items-center py-3 px-15 mx-auto uppercase">
        <Link
          to="/"
          className={`text-base font-semibold tracking-normal leading-none cursor-pointer transition-colors duration-200 ${
            isDarkMode
              ? "text-gray-100 hover:text-green-400"
              : "text-gray-900 hover:text-green-600"
          }`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          dam <br /> craft <br /> events.
        </Link>
        <ul className="nav-links hidden sm:flex items-center gap-12 text-sm font-medium">
          <li>
            <NavLink className={activeStyle} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={activeStyle} to="/about">
              About
            </NavLink>
          </li>
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink className={activeStyle} to="/services">
              Services
            </NavLink>
            {isDropdownOpen && (
              <div
                className={`absolute top-13 left-0 w-69 pt-3 pb-3 px-3 rounded-xl shadow-md z-50 flex flex-col gap-3 opacity-0 animate-[fadeIn_0.2s_ease-out_forwards] sm:border sm:border-gray-300 ${
                  isDarkMode
                    ? "bg-gray-800 text-gray-100"
                    : "bg-white text-gray-700"
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {serviceItems.map(({ label, slug }) => (
                  <Link
                    key={slug}
                    to={`/service/${slug}`}
                    className={`${
                      isDarkMode
                        ? "text-gray-100 hover:text-green-400 hover:bg-gray-700"
                        : "text-gray-700 hover:text-green-600 hover:bg-green-100"
                    } text-sm font-medium transition-colors duration-200 px-6 py-2 rounded`}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <li>
            <NavLink className={activeStyle} to="/work">
              Work
            </NavLink>
          </li>
          <li>
            <i
              className={`ri-add-line text-lg transition-colors duration-200 ${
                isDarkMode
                  ? "text-gray-100 hover:text-green-400"
                  : "text-gray-900 hover:text-green-600"
              } cursor-pointer`}
            ></i>
          </li>
        </ul>
        <div className="sm:hidden">
          <i
            className={`ri-${
              menuOpen ? "close-line" : "menu-2-line"
            } text-2xl cursor-pointer transition-colors duration-200 ${
              isDarkMode
                ? "text-gray-100 hover:text-green-400"
                : "text-gray-900 hoverELECTIONS"
            }`}
            onClick={toggleMenu}
          ></i>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className="fixed top-0 right-0 h-screen w-3/4 sm:w-1/2 bg-white z-[100] shadow-xl translate-x-full p-6 flex flex-col gap-3 uppercase font-medium text-gray-900"
      >
        <div className="flex justify-end">
          <i
            className="ri-close-line text-2xl cursor-pointer text-gray-900 hover:text-green-600 transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          ></i>
        </div>
        <button
          onClick={() => handleNavigate("/")}
          className="text-left py-3 text-base hover:text-green-600 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-200"
        >
          Home
        </button>
        <button
          onClick={() => handleNavigate("/about")}
          className="text-left py-3 text-base hover:text-green-600 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-200"
        >
          About
        </button>
        <div>
          <div className="flex items-center justify-between border-b border-gray-200">
            <button
              onClick={() => handleNavigate("/services")}
              className="text-left py-3 text-base hover:text-green-600 hover:bg-gray-50 transition-colors duration-200 flex-grow"
            >
              Services
            </button>
            <i
              ref={toggleIconRef}
              className={`ri-${
                isServicesOpen ? "arrow-up-s-line" : "arrow-down-s-line"
              } text-xl cursor-pointer hover:text-green-600 transition-colors duration-200`}
              onClick={toggleServicesSubmenu}
              aria-expanded={isServicesOpen}
            ></i>
          </div>
          <div
            ref={servicesSubmenuRef}
            className="overflow-hidden h-0 opacity-0"
          >
            {serviceItems.map(({ label, slug }) => (
              <button
                key={slug}
                onClick={() => handleNavigate(`/service/${slug}`)}
                className="text-left py-2 pl-4 text-sm hover:text-green-600 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 w-full"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={() => handleNavigate("/work")}
          className="text-left py-3 text-base hover:text-green-600 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-200"
        >
          Work
        </button>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(4px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default Nav;

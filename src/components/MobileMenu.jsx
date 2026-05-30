/* eslint-disable react/prop-types */
export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const handleNavClick = (target, event) => {
    event.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
                     transition-all duration-300 ease-in-out

                     ${
                       menuOpen
                         ? "h-screen opacity-100 pointer-events-auto"
                         : "h-0 opacity-0 pointer-events-none"
                     }
                   `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <a
        href="#home"
        onClick={(event) => handleNavClick("#home", event)}
        className={`text-2xl font-semibold text-white my-4 cursor-pointer transform transition duration-300 ease-out hover:text-blue-300 active:translate-x-2
                    ${
                      menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }        
            `}
      >
        Home
      </a>
      <a
        href="#about"
        onClick={(event) => handleNavClick("#about", event)}
        className={`text-2xl font-semibold text-white my-4 cursor-pointer transform transition duration-300 ease-out hover:text-blue-300 active:translate-x-2
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }        
    `}
      >
        About
      </a>
      <a
        href="#projects"
        onClick={(event) => handleNavClick("#projects", event)}
        className={`text-2xl font-semibold text-white my-4 cursor-pointer transform transition duration-300 ease-out hover:text-blue-300 active:translate-x-2
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }        
    `}
      >
        Projects
      </a>
      <a
        href="#contact"
        onClick={(event) => handleNavClick("#contact", event)}
        className={`text-2xl font-semibold text-white my-4 cursor-pointer transform transition duration-300 ease-out hover:text-blue-300 active:translate-x-2
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }        
    `}
      >
        Contact
      </a>
    </div>
  );
};

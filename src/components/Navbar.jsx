import { useState } from "react";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  return (
    <header className="h-20 lg:hidden mb-8">
      <nav className="h-full flex justify-between items-center ">
        <div className="h-10 w-10 rounded-full overflow-hidden">
          <img
            className="h-full w-full object-cover scale-[2]"
            src="/profile.jpeg"
            alt="profile picture"
          />
        </div>
        <div className="text-3xl flex gap-8">
          <button onClick={() => setIsDark(!isDark)}>
            {isDark ? (
              <i className="fa-solid fa-moon"></i>
            ) : (
              <i className="fa-solid fa-sun"></i>
            )}
          </button>
          <button className="bg-navyBG z-50 border border-softDarkText/30 py-3 px-4 rounded-full hover:opacity-85" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <i className="fa-solid text-4xl fa-close"></i>
            ) : (
              <i className="fa-solid  fa-bars"></i>
            )}
          </button>
        </div>
        {
            isOpen ? <NavbarLinks setIsOpen={setIsOpen} /> : ""
        }
      </nav>
    </header>
  );
};

export default Navbar;

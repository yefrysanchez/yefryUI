import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { fadeRight } from "../animations/animations";

const SideBar = () => {
  const links = [
    { title: "Home", icon: "fa-house", url: "/" },
    { title: "Components", icon: "fa-code", url: "/components" },
    { title: "Templates", icon: "fa-file-code", url: "/templates" },
    { title: "About", icon: "fa-address-card", url: "/about" },
    { title: "Contact", icon: "fa-message", url: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.aside
    variants={fadeRight}
    initial="initial"
    animate="animate"
      className={`hidden  fixed lg:flex flex-col z-50 shadow-lg shadow-darkBackground ${
        isOpen
          ? "w-52 px-3 transition-all duration-500 overflow-hidden"
          : "w-20 items-center transition-all duration-500"
      } py-8 rounded-2xl border border-softDarkText/30 bg-navyBG `}
    >
      {/* profile pic /////////////////*/}
      <div className="mb-12 flex items-center gap-2">
        <div className="h-10 w-10 rounded-full overflow-hidden">
          <img
            className="h-full w-full object-cover scale-[2]"
            src="/profile.jpeg"
            alt="profile picture"
          />
        </div>
        {isOpen ? (
          <div className="text-nowrap">
            <h2 className="text-sm font-bold tracking-tighter mb-[2px]">
              Yefry Sanchez
            </h2>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-accent rounded-full">
                <div className="h-2 w-2 bg-accent rounded-full animate-ping"></div>
              </div>

              <p className="text-xs text-softDarkText"> Open to work</p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      {/* profile pic/////////////////////////// */}

      {/* btn open /////////////////////*/}
      <button className="z-50" onClick={() => setIsOpen(!isOpen)}>
        <i
          className={`fa-solid fa-arrow-right absolute transition-all ${
            isOpen
              ? "right-4 top-9 rotate-180 transition-all duration-500"
              : "-right-4 top-9 transition-all duration-500"
          } text-softDarkText p-2 border border-softDarkText/30 rounded-full bg-darkBackground`}
        ></i>
      </button>

      {/* btn open /////////////////////*/}

      <ul className="flex flex-col gap-4">
        {links.map((link, i) => (
          <NavLink 
            key={i}
            to={link.url}
            className={({ isActive }) => `${
              isActive
                ? "bg-darkBackground py-3 px-4 rounded-xl border border-softDarkText/30"
                : "text-softDarkText py-3 px-4"
            }
                
                
            }`}
          >
            <li className="w-full flex items-center gap-2">
              <i className={`fa-solid ${link.icon} ${isOpen ? "" : "mx-auto"}`}></i>
              {isOpen ? <span>{link.title}</span> : ""}
            </li>
          </NavLink>
        ))}
      </ul>
    </motion.aside>
  );
};

export default SideBar;

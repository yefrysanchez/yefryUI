import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const NavbarLinks = ({setIsOpen}) => {
  const links = [
    { title: "Home", icon: "fa-house", url: "/" },
    { title: "Components", icon: "fa-code", url: "/components" },
    { title: "Templates", icon: "fa-file-code", url: "/templates" },
    { title: "About", icon: "fa-address-card", url: "/about" },
    { title: "Contact", icon: "fa-message", url: "/contact" },
  ];

  return (
    <ul className="bg-navyBG fixed inset-0 pt-24 w-full flex flex-col gap-4 px-4 text-xl">
      {links.map((link, i) => (
        <NavLink
        onClick={()=> setIsOpen(false)}
          to={link.url}
          key={i}
          className={({ isActive }) =>
            ` ${
              isActive
                ? "bg-darkBackground p-4 rounded-3xl border border-softDarkText/30"
                : "p-4"
            }`
          }
        >
          <li className="w-full">
            <i className={`fa-solid ${link.icon} mr-4`}></i>
            <span>{link.title}</span>
          </li>
        </NavLink>
      ))}
    </ul>
  );
};

NavbarLinks.propTypes = {
  setIsOpen: PropTypes.bool.isRequired
}

export default NavbarLinks;

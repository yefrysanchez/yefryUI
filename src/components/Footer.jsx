import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="max-w-4xl relative mx-auto bg-navyBG rounded-3xl p-12 mt-8 grid center">
      <ul className="mb-8">
        <h3 className="font-bold text-2xl mb-2">Pages</h3>
        {pagelinks.map((link, i) => (
          <li key={i} className="">
            <NavLink
              className={({ isActive }) =>
                ` ${
                  isActive ? "text-lightBackground" : "text-softDarkText"
                } hover:text-lightBackground`
              }
              to={link.url}
            >
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul>
        <h3 className="font-bold text-2xl mb-2">Get in touch</h3>

        {getinTouchlinks.map((link, i) => (
          <li key={i} className="text-softDarkText ">
            <a
              className="hover:text-lightBackground"
              target="_blank"
              href={link.url}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2 absolute top-12 right-12">
        <div className="h-3 w-3 bg-accent rounded-full">
          <div className="h-3 w-3 bg-accent rounded-full animate-ping"></div>
        </div>

        <p className="text-lg text-softDarkText"> Open to work</p>
      </div>
      <a href="">
        <div className="h-28 w-28 ml-auto rounded-full transition duration-300 border p-2 hover:opacity-80 border-dashed absolute bottom-8 right-4 md:bottom-12 md:right-12">
          <img className="rounded-full" src="/logo.png" alt="logo image" />
        </div>
      </a>
    </footer>
  );
};

export default Footer;

const pagelinks = [
  { title: "Home", url: "/" },
  { title: "Components", url: "/components" },
  { title: "Templates", url: "/templates" },
  { title: "About", url: "/about" },
  { title: "Contact", url: "/contact" },
];

const getinTouchlinks = [
  { title: "LinkedIn", url: "https://www.linkedin.com/feed/" },
  { title: "Github", url: "https://github.com/yefrysanchez" },
  { title: "Portfolio", url: "https://yefry.dev" },
];

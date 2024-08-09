import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUp } from "../animations/animations";

const AboutPage = () => {

  
  return (
    <motion.main variants={fadeUp} animate="animate" initial="initial" className="max-w-4xl mx-auto">
      <section className="mb-6 bg-navyBG p-8 rounded-3xl">
        <div className="mb-4 tracking-tighter border w-fit py-1 px-3 rounded-3xl border-softDarkText text-softDarkText font-semibold text-sm">
          <p>About</p>
        </div>
        <div className="mb-10">
          <h1 className="mb-4 tracking-tighter text-4xl font-bold">
            Complement Your Design with Our React and Tailwind Components.
          </h1>
          <p className="text-softDarkText mb-4">
            Yefry UI is your go-to resource for modern, customizable UI
            components built with React and Tailwind CSS. My mission is to
            simplify your development process by providing a comprehensive
            library of ready-to-use components that are both versatile and
            visually stunning.
          </p>
          <p className="text-softDarkText">
            Dive into our collection and elevate your design workflow with the
            power of React and the elegance of Tailwind CSS.
          </p>

          <div className="lg:ml-auto lg:mr-0 mx-auto w-fit">
            <Link
              className="mt-8 inline-block bg-accent p-4 rounded-xl tracking-tighter font-bold text-darkBackground hover:opacity-80 transition duration-200"
              to={"/components"}
            >
              Explore Components
            </Link>
          </div>
        </div>

        <article className="mb-8">
          <h2 className="mb-4 tracking-tighter text-2xl font-bold">
            Components are free to use and do not require you to sign up or
            purchase anything.
          </h2>
          <ul className="flex flex-col gap-2 mb-8">
            <h3 className="mb-4 tracking-tighter text-xl font-bold">
              What is{" "}
              <span className="uppercase text-[#61ff81]">permitted</span> ?
            </h3>

            <li className="text-softDarkText">✅Permitted for both commercial and non-commercial applications</li>
            <li className="text-softDarkText">✅Can be utilized across an unlimited number of websites and projects</li>
            <li className="text-softDarkText">✅Modification of the components is allowed and even encouraged</li>
            <li className="text-softDarkText">✅Attribution is not necessary</li>
            <li className="text-softDarkText">✅Suitable for use in open-source projects</li>
          </ul>

          <ul className="flex flex-col gap-2">
            <h3 className="mb-4 tracking-tighter text-xl font-bold">
              What is{" "}
              <span className="uppercase text-[#FF6961]">not permitted</span> ?
            </h3>

            <li className="text-softDarkText">❌ The sale or redistribution of Yefry UI components as standalone products.</li>
            <li className="text-softDarkText">❌ Users cannot misrepresent themselves as the original creators of the components.</li>
            <li className="text-softDarkText">❌ Users cannot use your components for illegal activities or in any manner that promotes illegal or unethical behavior.</li>
            <li className="text-softDarkText">❌ The sale or redistribution of Yefry UI components as standalone products.</li>
          </ul>
        </article>

      </section>
    </motion.main>
  );
};

export default AboutPage;

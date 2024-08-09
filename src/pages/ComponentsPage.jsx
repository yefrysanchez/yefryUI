import { Link } from "react-router-dom";
import { sectionData, componentData } from "../data/componentsData";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/animations";

const ComponentsPage = () => {
 
  return (
    <motion.main variants={fadeUp} animate="animate" initial="initial" className="max-w-4xl mx-auto">
      <section className="mb-12">
        <h1 className="font-bold text-5xl mb-4">All Components</h1>
        <p className="text-softDarkText">
          Components are built with React, and Tailwind CSS.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="font-bold text-4xl text-center mb-4">Sections</h2>
        <div className="flex flex-wrap gap-4 justify-center lg:justify-normal">
          {sectionData.map((e, i) => (
            <Link to={`/components/${e.title.replace(" ","-")}`} key={i} className="w-fit">
              <div className="overflow-hidden relative text-center h-32 w-52  tracking-tighter text-3xl  rounded-3xl flex items-center justify-center border border-navyBG hover:border-softDarkText transition duration-200">
                <p>{e.title}</p>
             <div className={`absolute -left-4 -top-4 h-16 w-16  rounded-full border-8 border-darkText/30 `}></div>
             <div></div>
              </div>
            </Link>
          ))}
        </div>
        
      </section>

      <section>
        <h2 className="font-bold text-4xl text-center mb-4">Components</h2>
        <div className="flex flex-wrap gap-4 justify-center lg:justify-normal">
          {componentData.map((e, i) => (
            <Link to={`/components/${e.title.replace(" ","-")}`} key={i} className="w-fit">
              <div className="overflow-hidden relative text-center h-32 w-52  tracking-tighter  text-3xl rounded-3xl flex items-center justify-center border border-navyBG hover:border-softDarkText transition duration-200">
                <p className="z-10">{e.title}</p>
             <div className={`absolute -left-4 -top-4 h-16 w-16  rounded-full border-8 border-darkText/30 `}></div>
             <div></div>
              </div>
            </Link>
          ))}
        </div>
        
      </section>
    </motion.main>
  );
};

export default ComponentsPage;

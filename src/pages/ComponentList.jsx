import { Link, useParams } from "react-router-dom";
import { componentData, sectionData } from "../data/componentsData";
import ComponentDisplay from "../components/ComponentDisplay";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/animations";

const ComponentList = () => {
  const { component } = useParams();
  const data = componentData.find(
    (e) => e.title.replace(" ", "-") === component
  );
  const data2 = sectionData.find(
    (e) => e.title.replace(" ", "-") === component
  );

  return (
    <motion.main variants={fadeUp} animate="animate" initial="initial" className="max-w-4xl mx-auto">
      <Link
        to={"/components"}
        className="mb-4 w-fit transition duration-200 flex gap-2 items-center hover:text-accent"
      >
        <i className="fa-solid fa-arrow-left"></i>
        <span>Back to components</span>
      </Link>

      <h1 className="text-5xl font-bold tracking-tighter mb-12">
        {data ? data.title : data2.title}
      </h1>
      {/* components */}
      <section>
        <div className="">
          <ComponentDisplay data={data ? data : data2} />
        </div>
      </section>
    </motion.main>
  );
};

export default ComponentList;

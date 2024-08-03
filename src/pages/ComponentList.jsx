import { Link, useParams } from "react-router-dom";
import { componentData, sectionData } from "../data/componentsData";

const ComponentList = () => {

const {component} = useParams()
const data = componentData.find(e => e.title.replace(" ","-") === component)
const data2 = sectionData.find(e => e.title.replace(" ","-") === component)

return (
    <main className="max-w-4xl mx-auto">
      <Link
        to={"/components"}
        className="w-fit transition duration-200 flex gap-2 items-center hover:text-accent"
      >
        <i className="fa-solid fa-arrow-left "></i>
        <span>Back to components</span>
      </Link>

      <h1>{data ? data.title : data2.title}</h1>
    </main>
  );
};

export default ComponentList;

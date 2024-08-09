import { useState } from "react";
import SimpleBtn from "../ui/bottons/SimpleBtn";
import MyCodeBlock from "./MyCodeBlock";
import PropTypes from "prop-types";

const ComponentDisplay = ({ data }) => {
  // Use an object to store viewed state for each component
  const [viewedStates, setViewedStates] = useState({});

  const handleViewToggle = (componentId, viewState) => {
    setViewedStates((prevStates) => ({
      ...prevStates,
      [componentId]: viewState,
    }));
  };

  const { components } = data;
  return (
    <div className="flex flex-col gap-8">
      {components.map((component, i) => (
        <div className="" key={i}>
          <div className="flex justify-between items-center">
            <h2 className="text-xl tracking-tighter font-semibold">
              {component.title}
            </h2>
            <div className="relative">
              <button
                onClick={() => handleViewToggle(i, false)}
                className={`select-none z-10 transition duration-300 p-4 border border-navyBG ${
                  viewedStates[i] ? "" : "bg-accent"
                }`}
              >
                <i className="fa-regular fa-eye mr-1"></i>
                <span>VIEW</span>
              </button>
              <button
                onClick={() => handleViewToggle(i, true)}
                className={`select-none p-4 transition duration-300 border border-navyBG ${
                  viewedStates[i] ? "bg-accent" : ""
                }`}
              >
                <i className="fa-solid fa-code mr-1"></i>
                <span>CODE</span>
              </button>
            </div>
          </div>
          <div className="min-h-[200px] border border-navyBG  flex justify-center items-center">
            {viewedStates[i] ? (
              <MyCodeBlock code={component.code} />
            ) : (<div className="">
                <SimpleBtn />
              </div>
              
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComponentDisplay;

ComponentDisplay.propTypes = {
    data: PropTypes.shape({
      components: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          code: PropTypes.string
        })
      ).isRequired
    }).isRequired
  };

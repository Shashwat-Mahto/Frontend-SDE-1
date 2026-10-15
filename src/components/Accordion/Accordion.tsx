/**
 * @param {Array<Object>} items - Accordion items to render
 * @param {number} activeIndex - Index of the currently expanded item
 * @param {Function} onItemClick - Callback to toggle an accordion item
 */

import type { AccordionDataType } from "../../pages/AccordionPage";
import "./Accordion.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
type AccordionParamType = {
  activeIndex: number;
  data: AccordionDataType[];
  handleItemClick: (index: number) => void;
};

function AccordionItem({ item, handleItemClick, activeIndex }: any) {
  return (
    <div className="item-container">
      <div className="item">
        <div className="heading">
          <h3 className="title">{item?.title}</h3>
          <span
            role="button"
            tabIndex={0}
            aria-expanded={activeIndex === item.id}
            onClick={() => handleItemClick(item.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleItemClick(item.id);
              }
            }}
          >
            {activeIndex === item.id ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </div>

        {activeIndex === item.id && (
          <div className="answer">
            <p className="answer-text">{item?.body}</p>
          </div>
        )}
      </div>
    </div>
  );
}
function Accordion({ activeIndex, handleItemClick, data }: AccordionParamType) {
  return (
    <div className="container">
      {data?.map((item) => {
        return (
          <AccordionItem
            key={item?.id}
            item={item}
            handleItemClick={handleItemClick}
            activeIndex={activeIndex}
          />
        );
      })}
    </div>
  );
}

export default Accordion;

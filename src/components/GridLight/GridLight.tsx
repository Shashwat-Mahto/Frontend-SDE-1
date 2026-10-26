import { useEffect, useMemo, useRef, useState } from "react";
import "./Grid.css";

type DataType = {
  data: number[][];
};

const Shape = ({
  box,
  handleClick,
  address,
  selected,
}: {
  box: number;
  handleClick: (id: number) => void;
  address: number;
  selected: Set<number>;
}) => {
  const status = box === 1 ? "visible" : "hidden";
  const checked = selected.has(address);
  return status === "visible" ? (
    <div
      className={`visible box ${checked ? `color` : ""}`}
      onClick={() => handleClick(address)}
    ></div>
  ) : (
    <div></div>
  );
};
export const Grid = ({ data }: DataType) => {
  const flatData = useMemo(() => {
    return data?.flat();
  }, [data]);

  const [boxes] = useState<number[]>(flatData);
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [deactiving, setDeactivating] = useState(false);
  const timersRef = useRef<number[]>([]);
  console.log("ddd" , deactiving);
  
  const countofVisibleBoxes = boxes?.reduce((acc, curr) => {
    return (acc += curr);
  }, 0);

  const deactivate = () => {
    const order = [...selected.values()];

    order?.forEach((curr, index) => {
      const elementToBeRemoved = curr;

      const timerId = setTimeout(() => {
        setSelected((prev) => {
          const clone = new Set(prev);
          clone.delete(elementToBeRemoved);
          return clone;
        });

        if(index === order.length -1) setDeactivating(false)
      }, 1000 * index); // every setter function opereation is registered with its own timer

      timersRef.current.push(timerId);
    });
  };
  useEffect(() => {
    if (selected.size >= countofVisibleBoxes) {
      setDeactivating(true);
      deactivate();
    }
  }, [boxes, selected]);

  // Clear pending timers only when the component unmounts, not on every selection change.
  useEffect(() => {
    const timers = timersRef.current;
    return () => {
      timers.forEach((id) => clearTimeout(id));
    };
  }, []);

  const handleClick = (box: number) => {
    if(deactiving) return;
    setSelected((prev) => new Set(prev).add(box));
  };
  return (
    <div className="grid-container">
      {boxes?.map((box, index) => (
        <Shape
          key={index}
          box={box}
          address={index}
          selected={selected}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

import { useEffect, useRef, useState } from "react";
import type { OptionType } from "./types/MultiSelectType";
import "./MultiSelect.css";

const Chips = ({
  items,
  handleRemoveChip,
}: {
  items: string[];
  handleRemoveChip: (item: string) => void;
}) => {
  return (
    <>
      {items?.map((item) => (
        <div className="chip" key={item}>
          <span>{item}</span>
          <span
            style={{ cursor: "pointer" }}
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => handleRemoveChip(item)}
          >
            X
          </span>
        </div>
      ))}
    </>
  );
};
function MultiSelectInput({ options }: { options: OptionType[] }) {
  const ogData: OptionType[] = options;
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e:MouseEvent) {
      if (wrapperRef && wrapperRef.current?.contains(e.target as Node)) {
        setIsFocused(true);
      }else{ 
        setIsFocused(false);
      }
    }


    window.addEventListener("mousedown", handleClickOutside);

    return ()=>{
      window.removeEventListener("mousedown" , handleClickOutside)
    }


  }, []);

  // Derived on every render: not yet selected + matches the query (case-insensitive).
  const filteredData = ogData.filter(
    (item) =>
      !selectedItems.includes(item.label) &&
      item.label.toLowerCase().includes(query.trim().toLowerCase()),
  );

  const handleItemClick = (label: string) => {
    setSelectedItems((prev) => [...prev, label]);
    setQuery("");
  };

  const handleRemoveChip = (item: string) => {
    setSelectedItems((prev) => prev.filter((curr) => curr !== item));
  };

  return (
    <div className="container" ref={wrapperRef}>
      {/* Chips first, input last: the box looks like one input with chips inside it. */}
      <div className="input-container">
        <Chips items={selectedItems} handleRemoveChip={handleRemoveChip} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {isFocused && (
        <div className="result-container">
          {filteredData.length === 0 ? (
            <div className="no-options">No options found</div>
          ) : (
            filteredData.map((item) => (
              <div
                className="items"
                key={item.id}
                // onMouseDown={(e) => e.preventDefault()}
                onClick={() => handleItemClick(item.label)}
              >
                <span>{item.label}</span>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default MultiSelectInput;

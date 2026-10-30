import { useEffect, useRef, useState } from "react";
import type { CountryDataType } from "../../pages/CountryCapitalPage";
import "./CountryCaptial.css";
type CountryCapitalType = {
  countries: string[];
  capital: string[];
  countryCapitalData: CountryDataType[];
  updatedChild:(selected:string[])=>void
};
export const CountryCapital = ({
  countries,
  capital,
  countryCapitalData,
  updatedChild
}: CountryCapitalType) => {
  const [selected, setSelected] = useState<string[]>([]);
  const timerRef = useRef<number | null>(null);
  
  const handleClick = (selection: string) => {
    if (selected.length >= 2) return;

    setSelected((prev) => [...prev, selection]);
  };

  const checkMapping = () => {
    const firstSelection = selected[0];
    const secondSelection = selected[1];

     const res = countryCapitalData?.reduce((acc, curr) => {
      if (
        (curr?.capital === firstSelection &&
          curr?.country === secondSelection) ||
        (curr?.capital === secondSelection && curr?.country === firstSelection)
      ) {
        return acc = true;
      }

      return acc;
    }, false);

    return res;
  };

  // Only the two selected boxes turn green/red; the rest keep their normal border.
  const isPairComplete = selected.length === 2;
  const isCorrectPair = isPairComplete && checkMapping();
  const getBoxClass = (value: string) => {
    if (!selected.includes(value)) return "unselected";
    if (!isPairComplete) return "selected";
    return isCorrectPair ? "correct" : "incorrect";
  };

  useEffect(() => {
    if (selected.length >= 2) {
        
      if(checkMapping()){
       
        timerRef.current = setTimeout(()=>{
            setSelected([]);
        updatedChild(selected);
        } , 500)
        

      }else{
         timerRef.current = setTimeout(()=>{
            setSelected([]);
        } , 500)
      }
    }

    return ()=>{
        if(timerRef.current) clearTimeout(timerRef.current);
        
    }
  }, [selected]);
  return (
    <div className="container">
      <div className="countries-container">
        {countries?.map((country, indx) => (
          <div
            onClick={() => handleClick(country)}
            className={`selection-box ${getBoxClass(country)}`}
            key={indx}
            
          >
            {country}
          </div>
        ))}
      </div>
      <div className="capital-container">
        {capital?.map((capital, indx) => (
          <div
            onClick={() => handleClick(capital)}
            className={`selection-box ${getBoxClass(capital)}`}
            key={indx}
          >
            {capital}
          </div>
        ))}
      </div>
    </div>
  );
};

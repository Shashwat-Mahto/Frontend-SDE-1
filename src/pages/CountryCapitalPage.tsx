import { useState } from "react";
import { CountryCapital } from "../components/CountryCapital/CountryCapital";

export type CountryDataType = {
  id: number;
  country: string;
  capital: string;
};

function CountryCapitalPage() {
  const countryCapitalData: CountryDataType[] = [
    { id: 1, country: "India", capital: "New Delhi" },
    { id: 2, country: "Japan", capital: "Tokyo" },
    { id: 3, country: "France", capital: "Paris" },
    { id: 4, country: "Australia", capital: "Canberra" },
    { id: 5, country: "Brazil", capital: "Brasília" },
    { id: 6, country: "Canada", capital: "Ottawa" },
    { id: 7, country: "Egypt", capital: "Cairo" },
    { id: 8, country: "South Korea", capital: "Seoul" },
  ];
  function shuffleCapital(capital: string[]) {
    for (let i = capital?.length - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [capital[i], capital[randomIndex]] = [capital[randomIndex], capital[i]];
    }

    return capital;
  }

  const [countries, setCountries] = useState(
    countryCapitalData?.map((country) => country?.country),
  );
  const capital = countryCapitalData?.map((country) => country?.capital);
  const [shuffledCapital, setshuffledCapital] = useState(
    shuffleCapital(capital),
  );

  function updatedChild(selected: string[]) {
    setCountries((prev) => prev.filter((curr) => !selected.includes(curr)));
    setshuffledCapital((prev) =>
      prev.filter((curr) => !selected.includes(curr)),
    );
  }
  return (
    <CountryCapital
      countries={countries}
      capital={shuffledCapital}
      countryCapitalData={countryCapitalData}
      updatedChild={updatedChild}
    />
  );
}

export default CountryCapitalPage;

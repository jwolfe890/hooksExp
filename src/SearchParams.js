import React from "react";
import useDropdown from "./useDropdown";
// import { ANIMALS, breeds } from "@frontendmasters/pet";

const SearchParams = () => {
  const ANIMALS = ["apple", "pear"];
  const breeds = ["apple", "pear"];

  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);

  return (
    <div className="search-params">
      <AnimalDropdown />
      <BreedDropdown />
    </div>
  );
};

export default SearchParams;

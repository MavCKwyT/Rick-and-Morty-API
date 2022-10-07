import React, { useEffect } from 'react';

export interface IProps {
  charactersData: any,
  setSearch: (characterNames: string) => void,
  search: string,
  setFilteredNames: any,
}
export const Search = ({
  charactersData,
  setSearch,
  search,
  setFilteredNames,
}: IProps) => {
  const filterNames = () => {
    if (search === '') return charactersData;

    return charactersData.filter((item: any) => item.name.toLowerCase().includes(search.toLowerCase()));
  };
  const handleChange = (event) => {
    setSearch(event.target.value);
    const res = filterNames();
    setFilteredNames(res);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="search..."
        value={search}
        onChange={(event) => handleChange(event)}
      />
    </div>
  );
};

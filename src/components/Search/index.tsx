import React, { useState } from 'react';

export interface IProps {names: any, }
export const Search = ({ names }: IProps) => {
  // todo improve performance
  const [search, setSearch] = useState('');
  const handleSearch = (event: any) => {
    setSearch(event.target.value);
  };
  const filterNames = (n) => {
    if (search === '') {
      return names;
    }
    return n.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
  };
  const filteredNames = filterNames(names);

  return (
    <div>
      <input
        type="text"
        placeholder="search..."
        value={search}
        onChange={(event) => handleSearch(event)}
      />
      <ul>
        {filteredNames.map((item) => (<li key={item.id}>{item.name}</li>))}
      </ul>
    </div>
  );
};

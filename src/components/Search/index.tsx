import React from 'react';
import { useEvent, useStore } from 'effector-react';
import { $searchCharacters, searchChanged } from 'models/public';

export const Search = () => {
  const search = useStore($searchCharacters);
  const handleSearch = useEvent(searchChanged);

  return (
    <div>
      <input
        type="text"
        placeholder="search..."
        value={search}
        onChange={(event) => handleSearch(event.target.value)}
      />
    </div>
  );
};

import React from 'react';
import { useStore } from 'effector-react';
import { $characters } from 'models/public';
import { FilterItems } from 'components/Filters/FilterItems';
import { charactersFilterTypes } from 'components/Filters/constatns';

export const Filters = () => {
  const characters = useStore($characters);
  console.log(characters);

  return (
    <div className="filters" style={{ display: 'flex', justifyContent: 'space-between' }}>
      {Object.values(charactersFilterTypes).map((filterType) => {
        return (
          <div>
            <h3>{Object.keys(filterType)}</h3>
            <ul>
              {filterType.status && <FilterItems filterKey="status" filterItem="status" />}
              {filterType.species && <FilterItems filterKey="species" filterItem="species" />}
              {filterType.type && <FilterItems filterKey="type" filterItem="type" />}
              {filterType.gender && <FilterItems filterKey="gender" filterItem="gender" />}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

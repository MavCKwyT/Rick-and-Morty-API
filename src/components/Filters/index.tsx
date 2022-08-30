import React from 'react';
import { Search } from 'components/Search';

interface IProps { data: any }
export const Filters = ({ data }: IProps) => {
  console.log('data', data);
  const names = data.map((item) => ({ name: item.name, id: item.id }));

  // todo improve that shit
  const uniqStatuses = new Set();

  const filteredStatuses = data.filter((item) => {
    const duplicate = uniqStatuses.has(item.status);
    uniqStatuses.add(item.status);

    return !duplicate;
  });

  const filteredSpecies = data.filter((item) => {
    const duplicate = uniqStatuses.has(item.species);
    uniqStatuses.add(item.species);

    return !duplicate;
  });

  const filteredTypes = data.filter((item) => {
    const duplicate = uniqStatuses.has(item.type);
    uniqStatuses.add(item.type);

    return !duplicate;
  });

  const filteredGender = data.filter((item) => {
    const duplicate = uniqStatuses.has(item.gender);
    uniqStatuses.add(item.gender);

    return !duplicate;
  });

  // todo improve that shit
  return (
    <div>
      <ul>
        <li>
          <span>name</span>
          <Search names={names} />
        </li>
        <li>
          <span>status</span>
          <ul>
            {filteredStatuses.map((item) => (<li key={item.id}>{item.status}</li>))}
          </ul>
        </li>
        <li>
          <span>species</span>
          <ul>
            {filteredSpecies.map((item) => (<li key={item.id}>{item.species}</li>))}
          </ul>
        </li>
        <li>
          <span>type</span>
          <ul>
            {filteredTypes.map((item) => (<li key={item.id}>{item.type}</li>))}
          </ul>
        </li>
        <li>
          <span>gender</span>
          <ul>
            {filteredGender.map((item) => (<li key={item.id}>{item.gender}</li>))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

import React from 'react';
import { Autocomplete, TextField } from '@mui/material';

export const Search = () => {
  const data: unknown[] = [];

  return (
    <Autocomplete
      renderInput={(params) => (
        <TextField
          {...params}
          label="search"
        />
      )}
      options={data}
    />
  );
};

const uniqData = new Set();

export const filterData = (data, value) => data.filter((item) => {
  const duplicate = uniqData.has(item[value]);
  uniqData.add(item[value]);

  return !duplicate;
});

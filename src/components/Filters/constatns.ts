// export const charactersFilterTypes = [
//   { status: ['Alive', 'Dead', 'unknown'] },
//   { species: ['Human', 'Alien'] },
//   {
//     type: [
//       'Genetic experiment',
//       'Superhuman (Ghost trains summoner)',
//       'Parasite',
//       'Human with antennae',
//       'Human with ants in his eyes',
//     ],
//   },
//   { gender: ['female', 'male', 'genderless', 'unknown'] },
// ];

export const charactersFilterTypes = {
  status: { status: ['Alive', 'Dead', 'unknown'] },
  species: { species: ['Human', 'Alien'] },
  type: {
    type: [
      'Genetic experiment',
      'Superhuman (Ghost trains summoner)',
      'Parasite',
      'Human with antennae',
      'Human with ants in his eyes',
    ],
  },
  gender: { gender: ['female', 'male', 'genderless', 'unknown'] },
};

import { styled } from '@mui/material/styles';

export const Section = styled('section')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
}));

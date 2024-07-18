'use client';
import type { ButtonProps as MuiButtonProps } from '@mui/material';
import { Button as MuiButton, alpha, darken } from '@mui/material'; //ButtonProps
import { styled } from '@mui/material/styles';

const ButtonBase = styled(MuiButton)<MuiButtonProps>(({ theme }) => ({
  padding: '24px 32px 24px 32px',
  borderRadius: '7px',
  fontSize: '16px',
  letterSpacing: 0,
  textTransform: 'none',
  fontWeight: 700,
  transition: 'background-color 250ms',
  overflow: 'hidden',
  height: '48px',
  color: '#fff',
  '&:hover': {
    backgroundColor:'#4a6cf7',
  },
  [theme.breakpoints.down('sm')]: {
    height: 40,
    fontSize: '14px'
  },
}));

export const ButtonPrimary = styled(ButtonBase)<MuiButtonProps>(
  ({ theme }) => ({
    color: '#fff',
    backgroundColor:'#4a6cf7',
    ':hover': {
      backgroundColor: darken('#4a6cf7', 0.16),
    },
  }),
);

export const ButtonSecondary = styled(ButtonBase)<MuiButtonProps>(
  ({ theme }) => ({
    border: '1px solid #4a6cf7',
    color: '#4a6cf7',
    backgroundColor: '#fff',
    '&:hover': {
      backgroundColor: alpha('#4a6cf7', 0.1),
    },
  }),
);

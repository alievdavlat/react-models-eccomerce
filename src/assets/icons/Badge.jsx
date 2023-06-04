import * as React from 'react';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -4,
    top: 3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 5px',
  },
}));

 function Badgee() {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <ShoppingCartIcon  sx={{color:"white"}} className='hover:text-yellow-200'/>
      </StyledBadge>
    </IconButton>
  );
}

export default Badgee
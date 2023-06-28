import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default ({ totalItems }) => {
  return (
    <IconButton size="large" sx={{ mx: 2 }}>
      <Badge badgeContent={totalItems} color="secondary">
        <ShoppingCartIcon sx={{ color: 'white' }} />
      </Badge>
    </IconButton>
  );
}


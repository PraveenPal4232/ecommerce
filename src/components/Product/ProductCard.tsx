import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import FavoriteIcon from '@mui/icons-material/Favorite';

function ProductCard() {
    return (
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        image="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/4.jpg"
        alt="green iguana"
        />
        <Divider />
      <CardContent sx={{ paddingBottom:"8px"}}>
          <Typography variant="subtitle2" gutterBottom component="div">$790.50</Typography>
          <Typography variant="body1" component="h4" color="text.secondary" gutterBottom>Apple iPhone 12 Pro 6.1" RAM 6GB 512GB Unlocked</Typography>
      </CardContent>
        <CardActions sx={{ padding:"0px 16px 16px"}}>
        <Button variant="contained" sx={{
            marginRight: "4px",
          textTransform: "inherit"
           }}>Add to cart</Button>
        <Button variant="outlined" color="inherit" sx={{
            minWidth: "36px",
            padding:"5px",
            borderColor:"#dee2e6",
            color:"#dee2e6",
            '&:hover': {
            color:"#1a76d2"
        }}}><FavoriteIcon /></Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;

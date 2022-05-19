import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Box from "@mui/material/Box";

function BlogCard() {
    return (
      <Card variant="outlined" sx={{
            maxWidth: 345,
          border:"none"
      }}>
      <CardMedia
        component="img"
        image="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/posts/3.jpg"
        alt="green iguana"
        sx={{
          borderRadius:"5px"
      }}
        />
      <CardContent sx={{
          paddingLeft:"0px"
      }}>
            <Typography variant="subtitle2" gutterBottom component="div" color="text.secondary" sx={{ display:"flex"}}>
                <CalendarMonthIcon sx={{ fontSize: "14px",marginRight:"5px",alignSelf:"center" }} />3.12.2021</Typography>
                 <Typography variant="h6" component="h6">How to promote brands</Typography>
          <Typography variant="body1" component="h4" color="text.secondary" gutterBottom>Apple iPhone 12 Pro 6.1" RAM 6GB 512GB Unlocked</Typography>
      </CardContent>
    </Card>
  );
}

export default BlogCard;

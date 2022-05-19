import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

function ChooseCard() {
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item md={3} sx={{
                    padding: '1rem',
                    backgroundColor: '#ffffff',
                    borderRadius: "50%",
                    boxShadow: 0,
                    maxHeight: "75px",
                    maxWidth: "75px !important",
                    alignSelf:"center"
                }}>
                    <EmojiEmotionsIcon sx={{ fontSize: 42 }} color="primary"/>
            </Grid>
                <Grid item md={9}>
                    <Typography variant="h6" component="div" sx={{ fontSize: 16 }}>Reasonable prices</Typography>
          <Typography variant="body1" component="h5" color="text.secondary" gutterBottom>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</Typography>
            </Grid>
          </Grid>
        </Box>
  );
}

export default ChooseCard;

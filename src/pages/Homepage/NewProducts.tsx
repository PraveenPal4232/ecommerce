import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ProductCard from './../../components/Product/ProductCard'


function NewProducts() {
  return (
    <Box sx={{
            padding: "2rem 0",
          }}>
     <Container maxWidth="md" sx={{
        maxWidth:"1320px !important"
          }}>
        <Box>
          <Typography variant="h4" component="h2">
            New Products
          </Typography>
        </Box>
        <Box
          sx={{
            margin: "2rem 0",
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={6} md={3}><ProductCard /></Grid>
            <Grid item xs={6} md={3}><ProductCard /></Grid>
            <Grid item xs={6} md={3}><ProductCard /></Grid>
            <Grid item xs={6} md={3}><ProductCard /></Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default NewProducts;

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ProductCard from './../../components/Product/ProductCard'


function NewProducts() {
  return (
    <Box>
      <Container maxWidth="lg">
        <Box
          sx={{
            margin: "2rem 0",
          }}
        >
          <Typography variant="h4" component="h2">
            New Products
          </Typography>
        </Box>
        <Box
          sx={{
            margin: "2rem 0",
          }}
        >
          <Grid container spacing={2}>
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

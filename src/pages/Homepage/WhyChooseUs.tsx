import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ChooseCard from './ChooseCard'


function WhyChooseUs() {
  return (
    <Box sx={{
        padding: "2rem 0",
        backgroundColor:"#f8f9fa"
          }}>
      <Container maxWidth="md" sx={{
        maxWidth:"1320px !important"
          }}>
        <Box>
          <Typography variant="h4" component="h2">
            Why choose us
          </Typography>
        </Box>
        <Box
          sx={{
            margin: "2rem 0",
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={6} md={4}><ChooseCard/></Grid>
            <Grid item xs={6} md={4}><ChooseCard/></Grid>
            <Grid item xs={6} md={4}><ChooseCard /></Grid>
            <Grid item xs={6} md={4}><ChooseCard/></Grid>
            <Grid item xs={6} md={4}><ChooseCard/></Grid>
            <Grid item xs={6} md={4}><ChooseCard/></Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default WhyChooseUs;

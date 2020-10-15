import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Filter from "../components/Filter";
import FilterJson from "../Data/Filter.json";

export default function Index() {
  return (
    <Container style={{ background: "orange", maxWidth: "100%" }} lg={12}>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          SpaceX Launch Programs
        </Typography>
        <Filter FilterList={FilterJson.filters} />
      </Box>
    </Container>
  );
}

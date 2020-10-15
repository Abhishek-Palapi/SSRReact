import React from "react";
import ImgMediaCard from "./card";
import Grid from "@material-ui/core/Grid";

const Content = ({ rockets }) => {
  return (
    <Grid container>
      {rockets &&
        rockets.map((rocket,i) => (
          <Grid item xs={12} sm={12} md={6} sm={5} lg={3} key={rocket.rocket_name}>
            <ImgMediaCard
              title={rocket.rocket_name}
              image={rocket.links.mission_patch_small}
              launchSuccess={rocket.launch_success}
              launchyear={rocket.launch_year}
              missionName={rocket.mission_name}
            />
          </Grid>
        ))}
    </Grid>
  );
};

export default Content;

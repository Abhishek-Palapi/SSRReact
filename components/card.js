import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard({image, title,launchSuccess, launchyear, missionName}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {missionName}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {launchSuccess}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {launchyear}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
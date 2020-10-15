import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Content from "./Content";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    margin: 0,
  },
  grid: {
    background: "green",
    height: "fit-content",
  },
  button: {
    margin: "10px",
  },
  grid1: {
    marginTop: "10px",
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Filter = ({ FilterList }) => {
  const classes = useStyles();
  const [rockets, setRockets] = React.useState(null);
  const [selectedYear, setSelectedYear] = React.useState(null)
  const [selectedStatus, setSelectedStatus] = React.useState(null)
  React.useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launches?limit=10")
      .then((res) => res.json())
      .then((res) => {
        setRockets(res);
      });
  }, []);

  function handleYearFilter(year) {
    fetch(
      `https://api.spacexdata.com/v3/launches?limit=50&launch_year=${year}`
    )
      .then((res) => res.json())
      .then((res) => {
        setSelectedYear(year)
        setRockets([...res])
      });
  }
  function handleSucessLaunch(status) {
    fetch(
      `https://api.spacexdata.com/v3/launches?limit=50&launch_success=${status}`
    )
      .then((res) => res.json())
      .then((res) =>{
        setSelectedStatus(status)
        setRockets([...res])
      });

  }

  function renderFilters() {
    let res = [];
    
    for (let i = 0; i < FilterList.length; i += 2) {
      const ele = (
        <div>
          <Button
            variant="contained"
            color= {FilterList[i] === selectedYear ? "primary" : "secondary"}
            className={classes.button}
            onClick={() => handleYearFilter(FilterList[i])}
          >
            {FilterList[i]}
          </Button>

          <Button
            variant="contained"
            color= {FilterList[i+1] === selectedYear ? "primary" : "secondary"}
            className={classes.button}
            onClick={() => handleYearFilter(FilterList[i + 1])}
          >
            {FilterList[i + 1]}
          </Button>
        </div>
      );
      res.push(ele);
    }
    const sucessFullLaunch = (
      <div>
        <Typography variant="h5" component="h1" gutterBottom>
          Successful Launch
        </Typography>
        <div>
          <Button
            variant="contained"
            color= {selectedStatus === true ? "primary" : "secondary"}
            className={classes.button}
            onClick={() => handleSucessLaunch(true)}
          >
            True
          </Button>

          <Button
            variant="contained"
            color= {selectedStatus === false ? "primary" : "secondary"}
            className={classes.button}
            onClick={() => handleSucessLaunch(false)}
          >
            False
          </Button>
        </div>
      </div>
    );
    res.push(sucessFullLaunch)
    return res;
  }
  const filter = (
    <Grid item sm={3} xs={12} md={2} className={classes.grid}>
      {renderFilters()}
    </Grid>
  );

  return (
    <div>
      <Typography variant="h4" component="h3" gutterBottom>
        Filters
      </Typography>

      <Typography variant="h5" component="h1" gutterBottom>
        Launch Year
      </Typography>
      <div className={classes.root}>
        {filter}

        <Grid item sm={9} xs={10} md={9} lg={10} className={classes.grid1}>
          <Content rockets={rockets} />
        </Grid>
      </div>
    </div>
  );
};

export default Filter;

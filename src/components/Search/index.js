import React from "react";
import { Grid, Paper, Button, makeStyles } from "@material-ui/core";
import { BookingDate, BookingLocation, RoomAndGuests} from "./Input";

const useStyle = makeStyles(theme=>{
  return (
    {
      searhButton:{
        backgroundColor:theme.palette.secondary.light,
        width:"100%",
        '&:hover': {
          backgroundColor:theme.palette.secondary.main,
        }
      },
      searchBox:{
        margin: "5px",
        padding: "15px",
        [theme.breakpoints.up('md')]: {
          marginTop: "55px",
        },
      }

    }
  )
})
export default function Search() { 
  const classes = useStyle();
  return (
    <section>
      <Paper className={classes.searchBox} elevation={3} >
        <Grid container spacing={3}>
          <Grid item xs={6} md={3} style={{border:"none"}}>
            <BookingLocation />
          </Grid>
          <Grid item xs={6} md={4} style={{border:"none"}}>
            <BookingDate />
          </Grid>
          <Grid item xs={6} md={3}>
            <RoomAndGuests />
          </Grid>
          <Grid item xs={1} md={2}>
            <Button style={{height:"50px"}} className={classes.searhButton}>Check</Button>
          </Grid>
        </Grid>
      </Paper>
    </section>
  );
}

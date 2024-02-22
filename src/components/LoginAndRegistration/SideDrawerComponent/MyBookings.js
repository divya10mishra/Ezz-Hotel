import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Booking from '../../Bookings/Booking';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom'
import SolicalContactAppFooter from '../../../Layout/Bottom/SolicalContactAppFooter'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:'100vw',
    margin: '20px',
    padding:'20px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function MyBookings() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{background:"#f5f5f5"}}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className="booking-header">  <Button variant="contained" color="secondary">
                                  <NavLink to="/home"> Back Home</NavLink>
                                 </Button></div>
        </Grid>
        <Grid item xs={12} sm={12}>
          <div className="booking-header">Hello, Shivanshu</div>
        </Grid>


        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}> 
                  <Grid item xs={6} sm={12}>
                      <div className="booking-grid-ele" style={{height:'50px', width:'50px', background:'lightgray', borderRadius:'50%'}}>

                      </div>
                   </Grid >
                 <Grid item xs={6} sm={12}>
                   <div className="booking-grid-ele">EZZ Hotel
                   A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided inside a hotel room may range from a modest-quality mattress in a small room to large suites with bigger, higher-quality beds, a dresser, a refrigerator and other kitchen facilities, upholstered chairs, a flat screen television, and en-suite bathrooms. Small, lower-priced hotels may offer only the most basic guest services and facilities. Larger, higher-priced hotels may provide additional guest facilities such as a swimming pool, business centre (with computers, printers, and other office equipment), childcare, conference and event facilities, tennis or basketball courts, gymnasium, restaurants, day spa, and social function services. Hotel rooms are usually numbered (or named in some smaller hotels and B&Bs) to allow guests to identify their room
                          </div>
                  </Grid>
                  <Grid item xs={6} sm={10}>
                      <div className="booking-grid-ele">
                              <Button variant="contained" color="secondary">
                                 View Offer
                                 </Button>
                      </div>
                   </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}> 
                  <Grid item xs={6} sm={12}>
                      <div className="booking-grid-ele" style={{height:'50px', width:'50px', background:'lightgray', borderRadius:'50%'}}>

                      </div>
                   </Grid >
                 <Grid item xs={6} sm={12}>
                   <div className="booking-grid-ele">EZZ Hotel
                   A hotel is an establishment that provides paid lodging on a short-term basis. Facilities provided inside a hotel room may range from a modest-quality mattress in a small room to large suites with bigger, higher-quality beds, a dresser, a refrigerator and other kitchen facilities, upholstered chairs, a flat screen television, and en-suite bathrooms. Small, lower-priced hotels may offer only the most basic guest services and facilities. Larger, higher-priced hotels may provide additional guest facilities such as a swimming pool, business centre (with computers, printers, and other office equipment), childcare, conference and event facilities, tennis or basketball courts, gymnasium, restaurants, day spa, and social function services. Hotel rooms are usually numbered (or named in some smaller hotels and B&Bs) to allow guests to identify their room
                          </div>
                  </Grid>
                  <Grid item xs={6} sm={10}>
                      <div className="booking-grid-ele">
                              <Button variant="contained" color="secondary">
                                 View Offer
                                 </Button>
                      </div>
                   </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Booking></Booking>
        </Grid>
       
            

      </Grid>
      <SolicalContactAppFooter/>
    </div>
  );
}

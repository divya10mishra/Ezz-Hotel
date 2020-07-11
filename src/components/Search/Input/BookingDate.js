import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import { DateRangePicker } from 'react-dates';
//import "bootstrap/dist/css/boostrap.min.css";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
import {moment} from 'moment';
class BookingDate extends React.Component{

     constructor(){
       super();
       this.state = {
        startDate: null ,
        endDate: null
       }
       this.handleSelect = this.handleSelect.bind(this);
      
     }
     handleSelect(ranges){
      console.log(ranges);
     
    }

  render(){
   // const st = moment().format("DD-MM-YYYY hh:mm:ss");
   // const ed = moment().format("DD-MM-YYYY hh:mm:ss");
      return (
            <Grid
              container
              alignItems="center"
              direction="row"
              justify="flex-start"
              wrap="nowrap"
              style={{
                width: "100%",
                height: "50px",
                borderRadius: "2px",
              }}
            >
              <Grid item>
                 <IconButton aria-label="Booking Location" size="small">
                      <CalendarTodayOutlinedIcon color="secondary" fontSize="small" />
                 </IconButton>
              </Grid>
              <DateRangePicker 
                   startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                   endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                   onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                   focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                   onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                   //initialVisibleMonth={() => moment().add(2, "M")} // PropTypes.func or null,
              
              />
              </Grid>

      );
    }
}
export default BookingDate;
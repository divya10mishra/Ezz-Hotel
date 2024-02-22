import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
export default function BookingFrom() {
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
        border: "1px solid #ebebeb",
        borderRadius: "2px",
      }}
    >
      <Grid item>
         <div style={{marginLeft:"30px",display:"inline-flex"}}> 
                <input placeholder="From:" 
                      style={{border:'transparent',fontWeight:600}} 
                      type="date" ></input></div>
      </Grid>
    </Grid>
  );
}

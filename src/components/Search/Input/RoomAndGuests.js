import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import PeopleOutlineOutlinedIcon from '@material-ui/icons/PeopleOutlineOutlined';
import SimpleZoom from './roomModal';
class RoomAndGuests extends React.Component{
   constructor(){
       super();
       this.state = {
         isOpen: false,
         roomNumber: 1,
         guestNumber: 0
       }
       this.openDiv = this.openDiv.bind(this);
       this.updateRoom = this.updateRoom.bind(this);
       this.updateGuest = this.updateGuest.bind(this);
   }

   openDiv(){
      const open = this.state.isOpen;
      this.setState({isOpen: !open})

   }

   updateRoom(room){
      this.setState({roomNumber: room})
   }

   updateGuest(guest){
    this.setState({guestNumber: guest})
   }

   render(){
    //  debugger;
      const {isOpen, roomNumber, guestNumber}  = this.state;
      const isDisplay = isOpen? <SimpleZoom isOpen={isOpen} updateRoom={this.updateRoom} updateGuest={this.updateGuest}/>: null;
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
          <IconButton aria-label="Room and Guest" size="small">
            <PeopleOutlineOutlinedIcon color="secondary" fontSize="small" onClick={this.openDiv}/>
          </IconButton>
        </Grid>

        <Grid item>
          <div className="makeStyles-container-11">
            <div onClick={this.openDiv} style={{color:"hsl(0,0%,50%)"}}> {roomNumber} Room, {guestNumber} Guest</div>
              {isDisplay}
          </div>
        </Grid>
      </Grid>
  );
    }
}

export default RoomAndGuests;

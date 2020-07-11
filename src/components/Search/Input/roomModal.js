import React from 'react';
import  { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider'
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@material-ui/icons/IndeterminateCheckBoxOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  dropdown: {
    top: '0px',
    left: 0,
    right: 0,
    padding: '5px',
    zIndex: '1',
    fontcolor: 'black',
    height: '200px',
    width: '224px',
    borderradius: '4px',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #d6d6d6',
    boxShadow: 'box-shadow: 0 10px 30px rgba(41,51,57,.75)'
  },
}));

export default function SimpleZoom(props) {
 const [roomNumber, setRoomNumber] = useState(1);
 const [guestNumber, setguestNumber] = useState(0);
 const classes = useStyles();

 const updateRoom = () =>{
    if(roomNumber<7){
    setRoomNumber(roomNumber + 1);
    props.updateRoom(roomNumber+ 1)
    }
 }

 const reduceRoom = () =>{
  if(roomNumber!=0){
  setRoomNumber(roomNumber - 1 );
  props.updateRoom(roomNumber- 1)
  }
}

const reduceGuest = () =>{
  if(guestNumber!=0){
    setguestNumber(guestNumber - 1);
    props.updateGuest(guestNumber-1)
  }
}

 const updateGuest = () =>{
    setguestNumber(guestNumber + 1);
    props.updateGuest(guestNumber + 1)
 }
  
//  debugger;
  return (

    <ClickAwayListener >
      <div className={classes.root}>
        {props.isOpen ? (
          <div className={classes.dropdown} style={{ background:"#fff!important",boxShadow:'2px 4px 6px 2px rgba(0,0,0,.1), 0 12px 11px 2px rgba(0,0,0,.1)'}}>
              <Grid container spacing={3}>
                    <Grid item xs={6} style={{padding:'5px',marginTop:'10px'}}>
                            <div style={{fontWeight:600,textAlign:'center'}}>Room</div>
                    </Grid>
                    <Grid item xs={6} style={{padding:'5px',marginTop:'10px'}}>
                          <div style={{fontWeight:600,textAlign:'center'}}>Guests</div>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider variant="middle" />
                    </Grid>
                    <Grid item xs={5}>
                            <div style={{textAlign:'center'}}>Room</div>
                          
                    </Grid>
                    <Grid item xs={1}>
                        <div  style={{textAlign:'center'}} onClick={() =>reduceRoom() }>
                            <IndeterminateCheckBoxOutlinedIcon onClick={() =>reduceRoom() }/>
                        </div>

                    </Grid>
                    <Grid item xs={1}>
                        <div  style={{textAlign:'center'}}>
                             <span style={{marginBottom:"2px"}}>{roomNumber}</span>
                        </div>

                    </Grid>
                    <Grid item xs={1}>
                        <div  style={{textAlign:'center'}}>
                            <LocalHospitalOutlinedIcon onClick={() => updateRoom()}/>
                        </div>

                    </Grid>
                    <Grid item xs={12}>
                        <Divider variant="middle" />
                    </Grid>

                    <Grid item xs={5}>
                            <div style={{textAlign:'center'}}>Guest</div>
                          
                    </Grid>
                    <Grid item xs={1}>
                        <div  style={{textAlign:'center'}} onClick={() =>reduceGuest() }>
                            <IndeterminateCheckBoxOutlinedIcon onClick={() =>reduceGuest() }/>
                        </div>

                    </Grid>
                    <Grid item xs={1}>
                        <div  style={{textAlign:'center'}}>
                             <span style={{marginBottom:"2px"}}>{guestNumber}</span>
                        </div>

                    </Grid>
                    <Grid item xs={1}>
                        <div  style={{textAlign:'center'}}>
                            <LocalHospitalOutlinedIcon onClick={() => updateGuest()}/>
                        </div>

                    </Grid>
              </Grid>
          </div>
        ) : null}
      </div>
    </ClickAwayListener>
  );
}

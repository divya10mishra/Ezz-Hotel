import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import ControlledOpenSelect from './location'
class BookingLocation extends React.Component {

     constructor(props){
       super(props)

       this.state = {
          data: []
       }

       this.getData = this.getData.bind(this);

     }

     componentDidMount(){
       this.getData();
     }

    getData(){
      let me         = this;
      fetch('http://ezzhotels.com/api/cities/', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify()
       }).then((response)=>{
            const cities = response.cities;
            me.setState({data: cities});

       }).catch(()=>{
            const data = [{'hCity': "Delhi"},{'hCity': "goa"},{'hCity': "manali"},{'hCity': "jodhpur"},{'hCity': "mumbai"},{'hCity': "chennai"}];
            me.setState({data:data});
            //me.setState({isError:true, errorMsg:"*There's a problem while Generating Otp."})
       });


    }
  

  render(){
//  debugger;
    const locationOptions = this.state.data.length? this.state.data : [];

    const optionEle       = locationOptions.length? <ControlledOpenSelect data= {locationOptions}/>: <ControlledOpenSelect data= {locationOptions}/>
    
    return(
          <Grid
            container
            alignItems="center"
            direction="row"
            justify="flex-start"
            wrap="nowrap"
            style={{
              width: "auto",
              height: "auto",
              border: "1px solid #ebebeb",
              
            }}
          >
      <Grid item>
        <IconButton aria-label="Booking Location" size="small">
          <LocationOnOutlinedIcon color="secondary" fontSize="small" />
        </IconButton>
      </Grid>
      <Grid item>
        
      </Grid>
      <div style={{width:"100%" }}>
         {optionEle}
        </div>
    </Grid>
  );
}
}
export default BookingLocation;
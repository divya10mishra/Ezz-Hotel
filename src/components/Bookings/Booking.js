import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
class Booking extends React.Component{
    
    constructor(props){
        super(props)

        this.state = {
            data: []
        }

        this.getData = this.getData.bind(this);
    }

    componentDidMount(){
        this.getData()
    }
    
    getData(){
        let me         = this;
        let mobileInfo =  {
            "gCellularNumber": this.state.mobileNumber,
            "gMailAddress"   : this.state.email
        }
  
        fetch('http://www.ezzhotels.com/api/getbookings/', {
              method: 'post',
              headers: {'Content-Type':'application/json'},
              body: JSON.stringify(mobileInfo)
         }).then((response)=>{
              const booking = response.booking
              me.setState({data: booking});
  
         }).catch(()=>{
             const booking = [{
                            "bBookingID": 4,
                            "bHotel": 1,
                            "bGuest": 16,
                            "bCheckInDate": "2020-05-08",
                            "bCheckOutDate": "2020-05-08",
                            "bBookingStatus": "Confirmed",
                            "bAdditionalDetails": "This is second boking"

             },{
                            "bBookingID": 18,
                            "bHotel": 1,
                            "bGuest": 16,
                            "bCheckInDate": "2020-04-02",
                            "bCheckOutDate": "2020-02-01",
                            "bBookingStatus": "Confirmed",
                            "bAdditionalDetails": "This is second boking"

             }]
            me.setState({data: booking});
              //me.setState({isError:true, errorMsg:"*There's a problem while Generating Otp."})
         });
    }

render(){
        const bookingDiv = this.state.data.length? this.state.data.map((data, index)=>{

                                         return(<Grid item xs={12} sm={10}>
                                                        <Paper >
                                                            <div style={{marginLeft:"10px",marginTop: "30px", padding:'5px'}}>
                                                                <div >
                                                                    <Grid item xs={6} sm={4} >
                                                                    <div className="booking-hotel-img">
                                                                       <img src={`/static/media/${data.bHotel}.c219c862.jpg`} alt="ezz-hotel" ></img>
                                                                    </div>
                                                                    </Grid>
                                                                    <Grid item xs={6} sm={8}>
                                                                            <div className="booking-grid-ele">BookingId: {data.bBookingID}</div>
                                                                    </Grid>
                                                                    <Grid item xs={6} sm={10}>
                                                                             <div className="booking-grid-ele">Additionsl info: {data.bAdditionalDetails}</div>
                                                                    </Grid>
                                                                    <Grid item xs={6} sm={8}>
                                                                                <div className="booking-grid-ele">Booking Status: {data.bBookingStatus}</div>
                                                                    </Grid>
                                                                
                                                                    <Grid item xs={6} sm={8}>
                                                                                <div className="booking-grid-ele">Booking CheckIn: {data.bCheckInDate}</div>
                                                                    </Grid>
                                                                    <Grid item xs={6} sm={8}>
                                                                             <div className="booking-grid-ele">Booking CheckOut: {data.bCheckOutDate}</div>
                                                                    </Grid>

                                                                    <Grid item xs={6} sm={12}>
                                                                             <div className="booking-grid-button" style={{textAlign:'right'}}> <Button variant="contained" color="secondary">
  View More
  </Button></div>
                                                                    </Grid>
                                                                    
                                                                </div>
                                                            </div>
                                                        </Paper>
                                                    </Grid>
                                                )}): '';
  return( 

                    <div>
                       {bookingDiv}
                       </div>
      
    );
 }
}
export default Booking
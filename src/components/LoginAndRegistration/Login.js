import React from 'react';
import TextField from '@material-ui/core/TextField';
import data from '../../data/otpdata.json'


class Login extends React.Component{
    
    constructor(props){

            super(props);
            this.state ={
              otp: '',
              mobileNumber: '',
              isError: false,
              errorMsg: '',
              showLoginScreen: true,
              showVerifyScreen : false
              
            }
            this.handleClick = this.handleClick.bind(this);
            this.Login       = this.Login.bind(this);
            this.generateOtp = this.generateOtp.bind(this);
            this.verifyOtp   = this.verifyOtp.bind(this);
    }

    handleClick(){

      this.props.closeModal();
  }
   
    Login(){
      // debugger;

       let errMsg = '';
       const { mobileNumber } = this.state;
       if( mobileNumber === ''){
            let errMsg = "*Pls Enter The Mobile Number."
            this.setState({isError:true, errorMsg:errMsg})
       }
       else{
              this.generateOtp();
       }

    }

    generateOtp(){
      // debugger;
      let me         = this;
      let mobileInfo =  {
          "gCellularNumber": this.state.mobileNumber
      }

      fetch('data/otpdata.json', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(mobileInfo)
       }).then((response)=>{
            console.log(response.json());
            me.setState({showLoginScreen:false, showVerifyScreen: true});

       }).catch(()=>{
            me.setState({showLoginScreen:false, showVerifyScreen: true});
            //me.setState({isError:true, errorMsg:"*There's a problem while Generating Otp."})
       });

    }

   
    verifyOtp(){
      // debugger;
        let me = this; 
        const {otp} = this.state;

        if( otp === ''){

          let errMsg = "*Pls Enter The Otp."
          this.setState({isError:true, errorMsg:errMsg})
        }
        else{
               let me = this;
               const {mobileNumber, otp} = this.state;

               let reqBody = {
                  "gCellularNumber" : mobileNumber,
                  "gOtp" : otp
                }

                fetch('http://ezzhotels.com/api/verifyguest/', {
                  method: 'post',
                  headers: {'Content-Type':'application/json'},
                  body: JSON.stringify(reqBody)
                }).then((response)=>{
                   sessionStorage.setItem('user',JSON.stringify(response.user)) ;
                   sessionStorage.setItem('access',response.user)    
                   me.props.loggedIn();

          
                }).catch(()=>{
                  sessionStorage.setItem('user',JSON.stringify({
                            "gFirstName": "Guest",
                            "gLastName": "",
                            "gAddress": "",
                            "gAddress2": "",
                            "gCity": "",
                            "gState": "",
                            "gZipCode": "",
                            "gCountry": "India",
                            "gHomePhoneNumber": "",
                            "gCellularNumber": "9620200298",
                            "geMailAddress": null,
                            "gGender": "",
                            "gOtp": "6623",
                            "gPassword": "",
                            "gActiveFlag": "Y"
                        }))
                      me.props.loggedIn();
                      me.setState({isError:true, errorMsg:"*There's a problem while Generating Otp."})
                });
    
        }

    }

render(){

    const { isError, errorMsg, showLoginScreen, mobileNumber} = this.state;
    const display     = this.props.display? 'block': 'none';
    const showerrMsg  = isError? <span className="login-error-msg">{errorMsg}</span> : '';
    let loginDiv  = '';
    let verifyDiv = '';

    if(showLoginScreen){

       loginDiv = <div className="login-container">
                        <header className="w3-container "> 
                        <span onClick={this.handleClick} className="w3-button w3-display-topright">&times;</span>
                        {showerrMsg}
                            <div className="login-header">Login to EZZ Hotel</div>
                        </header>
                        <div className="w3-container">
                                <div className="login-input"><TextField 
                                                                id="standard-basic" 
                                                                label="Standard" 
                                                                placeholder="Enter Mobile Number"
                                                                onChange={(event)=>{
                                                                    this.setState({mobileNumber:event.target.value, isError:false,errorMsg:''})
                                                                }}
                                                                /></div>
                                    
                                <div ><button className="login100-form-btn" onClick={this.Login}>Login
                                    </button></div>
                        </div>
                        <footer className="w3-container">
                        <div className="login-singup"> Don’t have an account? Sign Up </div>
                        </footer>
                    </div>

    } else{

      verifyDiv = <div className="login-container">
                        <header className="w3-container "> 
                        <span onClick={this.handleClick} className="w3-button w3-display-topright">&times;</span>
                        {showerrMsg}
                            <div className="login-header">Detecting OTP</div>
                              <p>we have sent a 4 digit OTP on {mobileNumber}</p>
                        </header>
                        <div className="w3-container">
                                <div className="login-input"><TextField 
                                                                id="standard-basic" 
                                                                label="Standard" 
                                                                placeholder="Otp"
                                                                onChange={(event)=>{
                                                                    this.setState({otp :event.target.value, isError:false, errorMsg:'' })
                                                                }}
                                                                /></div>
                                    
                                <div ><button className="login100-form-btn" onClick={this.verifyOtp}>Submit
                                    </button></div>
                        </div>
                        <footer className="w3-container">
                           <div className="login-singup"> Don’t have an account? Sign Up </div>
                        </footer>
                    </div>

    }
    return (

      <div className="w3-modal" style={{display :display}}>
      <div className="w3-modal-content">
                        {loginDiv}
                        {verifyDiv}
      </div>
    </div>
    );
}
}
export default Login
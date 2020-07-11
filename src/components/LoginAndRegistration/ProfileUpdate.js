import React from 'react';
import TextField from '@material-ui/core/TextField';
import data from '../../data/otpdata.json'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
import PersonIcon from '@material-ui/icons/Person';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

class ProfileUpdate extends React.Component{
    
    constructor(props){

            super(props);
            this.state ={
                isError:'',
                errorMsg:'',
                gFirstName:'',
                gLastName:'',
                gGender:'',
                gCellularNumber:'',
                gMailAddress:'',
                gAddress:'',
                gAddress2:'',
                gCity:'',
                gState:'',
                gCountry: '',

            }
            this.update = this.update.bind(this);
            this.updateProfile = this.updateProfile.bind(this);
    }

    update(){
        const { gFirstName, gLastName, gGender, gCellularNumber, gAddress, gAddress2, gMailAddress, gState, gCity, gCountry} = this.state;
                if( gFirstName === '' || gGender ==='' || gCellularNumber==='' || gMailAddress==='' || gCity==='' || gCountry===''){
                    let errMsg = "*Pls Fill All The Fields."
                    this.setState({isError:true, errorMsg:errMsg})
            }
            else{
                    this.updateProfile();
            }
    }
    updateProfile(){

        let me = this;
        const { gFirstName, gLastName, gGender, gCellularNumber, 
                gAddress, gAddress2, gMailAddress, gState, gCity, gCountry} = this.state;

        let userinfo = {
            gFirstName: gFirstName,
            gLastName: gLastName,
            gGender: gGender,
            gCellularNumber: gCellularNumber,
            gMailAddress: gMailAddress,
            gAddress: gAddress,
            gAddress2: gAddress2,
            gCity:gCity,
            gState: gState,
            gCountry: gCountry,
        }

        fetch('http://www.ezzhotels.com/api/updateprofile/', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(userinfo)
       }).then((response)=>{
            console.log(response.json());
            sessionStorage.setItem('user', JSON.stringify(response.user))
            sessionStorage.setItem('access', JSON.stringify(response.access))
           // me.setState({showLoginScreen:false, showVerifyScreen: true});

       }).catch(()=>{
            //me.setState({showLoginScreen:false, showVerifyScreen: true});
            //me.setState({isError:true, errorMsg:"*There's a problem while Generating Otp."})
       });

    }

render(){

    const { isError, errorMsg} = this.state;
    const display     = this.props.display? 'block': 'none';
    const showerrMsg  = isError? <span className="login-error-msg">{errorMsg}</span> : '';
    const userinfo    = JSON.parse(sessionStorage.getItem('user'));
    return (

      <div className="w3-modal" style={{display :display}}>
      <div className="w3-modal-content">
      <div className="login-container">
                        <header className="w3-container "> <div className="update-header">EZZ Hotel</div>
                        <span onClick={this.props.closeModal} className="w3-button w3-display-topright">&times;</span>
                           {showerrMsg}
                            <div className="login-header"><AccountCircleIcon style={{fontSize:"xxx-large"}}/></div>
                        </header>
                        <div className="w3-container">
                                <div className="login-input">
                                <div className="profile-update">
                                     <input 
                                     className="MuiInputBase-input"
                                            id="standard-basic" 
                                            label="Standard" 
                                            defaultValue={userinfo.gFirstName}
                                            placeholder="First Name"
                                            onChange={(event)=>{
                                                    this.setState({gFirstName:event.target.value, isError:false,errorMsg:''})
                                                }}
                                        />
                                </div>
                                <div className="profile-update">
                                     <input 
                                     className="MuiInputBase-input"
                                            id="standard-basic" 
                                            label="Standard" 
                                            defaultValue={userinfo.gLastName}
                                            placeholder="Last Name"
                                            onChange={(event)=>{
                                                    this.setState({gLastName:event.target.value, isError:false,errorMsg:''})
                                                }}
                                        />
                                </div>
                                <div className="profile-update">
                                     <select 
                                     className="MuiInputBase-input"
                                            id="standard-basic" 
                                            label="Standard" 
                                            placeholder="Gender"
                                            defaultValue={userinfo.gGender}
                                            onChange={(event)=>{
                                                    this.setState({gGender:event.target.value, isError:false,errorMsg:''})
                                                }}
                                        ><option value="M">Male</option>
                                        <option value="F">Female</option>
                                        <option value="o">Others</option></select>
                                </div>
                                <div className="profile-update">
                                <input
                                    className="MuiInputBase-input" 
                                        id="standard-basic" 
                                        label="Standard" 
                                        defaultValue={userinfo.gCellularNumber}
                                        placeholder="Mobile Number"
                                        onChange={(event)=>{
                                                this.setState({gCellularNumber:event.target.value, isError:false,errorMsg:''})
                                            }}
                                    /></div>

                                <div className="profile-update">
                               <input 
                                   className="MuiInputBase-input"
                                    id="standard-basic" 
                                    label="Standard" 
                                    placeholder="Email"
                                    defaultValue={userinfo.gMailAddress}
                                    onChange={(event)=>{
                                            this.setState({gMailAddress:event.target.value, isError:false,errorMsg:''})
                                        }}
                                /></div>

                                <div className="profile-update">
                               <input 
                                   className="MuiInputBase-input"
                                    id="standard-basic" 
                                    label="Standard" 
                                    placeholder="Address"
                                    defaultValue={userinfo.gAddress}
                                    onChange={(event)=>{
                                            this.setState({gAddress:event.target.value, isError:false,errorMsg:''})
                                        }}
                                /></div>

                            <div className="profile-update">
                               <input 
                                   className="MuiInputBase-input"
                                    id="standard-basic" 
                                    label="Standard" 
                                    placeholder="Permanent Address"
                                    defaultValue={userinfo.gAddress2}
                                    onChange={(event)=>{
                                            this.setState({gAddress2:event.target.value, isError:false,errorMsg:''})
                                        }}
                                /></div>

                            </div>

                            <div className="profile-update">
                               <input 
                                   className="MuiInputBase-input"
                                    id="standard-basic" 
                                    label="Standard" 
                                    placeholder="City"
                                    defaultValue={userinfo.gCity}
                                    onChange={(event)=>{
                                            this.setState({gCity:event.target.value, isError:false,errorMsg:''})
                                        }}
                                /></div>

                                <div className="profile-update">
                               <input 
                                   className="MuiInputBase-input"
                                    id="standard-basic" 
                                    label="Standard" 
                                    placeholder="State"
                                    defaultValue={userinfo.gState}
                                    onChange={(event)=>{
                                            this.setState({gState:event.target.value, isError:false,errorMsg:''})
                                        }}
                                /></div>

                            <div className="profile-update">
                               <input 
                                   className="MuiInputBase-input"
                                    id="standard-basic" 
                                    label="Standard" 
                                    placeholder="ZipCode"
                                    defaultValue={userinfo.gZipCode}
                                    onChange={(event)=>{
                                            this.setState({gZipCode:event.target.value, isError:false,errorMsg:''})
                                        }}
                                /></div>

                                <div className="profile-update">
                               <input 
                                   className="MuiInputBase-input"
                                    id="standard-basic" 
                                    label="Standard" 
                                    placeholder="Country"
                                    defaultValue={userinfo.gCountry}
                                    onChange={(event)=>{
                                            this.setState({gCountry:event.target.value, isError:false,errorMsg:''})
                                        }}
                                /></div>

            
                                    
                                <div >
                                    <button className="login100-form-btn" onClick={this.update}>Update
                                    </button>
                                </div>
                        </div>
                        <footer className="w3-container">
                        <div className="login-singup"></div>
                        </footer>
                    </div>

      </div>
    </div>
    );
 }
}
export default ProfileUpdate
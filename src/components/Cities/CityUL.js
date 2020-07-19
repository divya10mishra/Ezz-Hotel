import React from "react";
import "../../shared/app-constants";
import { citiList } from "../../shared/app-constants";
import { makeStyles, IconButton } from "@material-ui/core";
import MyLocationIcon from "@material-ui/icons/MyLocation";
 const cities=[
    {'hCity': "Delhi"},
{'hCity': "goa"},
{'hCity': "manali"},
{'hCity': "jodhpur"},
{'hCity': "mumbai"},
{'hCity': "chennai"}
];

const useStyles = makeStyles((theme) => ({
  cityTypography: {
    color: theme.palette.secondary.light,
    fontSize: ".8rem",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "400",
    lineHeight: 1,
  },
  cityList: {
    overflowX: "scroll",
    width: "100%",
    overflowY: "hidden",
    display: "flex",
    flexFlow: "row nowrap",
    margin: "0 auto",
    height: "90px",
    marginLeft:"10px"
  },
  location: {
    backgroundColor: theme.palette.primary.contrastText,
    padding: "10px",
  },
}));
function CityList() {
    console.log('cities',cities)
  const classes = useStyles();
  return (
    <div class="menu-item">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="nav-menu text-center">
                                                <nav class="mainmenu">
                                                    <ul id="desktopCity">
                                                        {cities.map((item)=>{
                                                             return(<li class=""><a href="./index.html">{item.hCity}</a>
                                                             {/* <ul class="dropdown">
                                                                 <li><a href="#">Mahipalpur</a></li>
                                                                 <li><a href="#">Karol Bagh</a></li>
                                                                 <li><a href="#">Paharganj</a></li>
                                                                 <li><a href="#">New Delhi Railway Station</a></li>
                                                                 <li><a href="#">Dwarka, New Delhi</a></li>
                                                                 <li><a href="#">Dwarka Sector 9</a></li>
                                                                 <li><a href="#">Rohini</a></li>
                                                                 <li><a href="#">Indira Gandhi International Airport</a>
                                                                 </li>
                                                                 <li><a href="#">New Delhi</a></li>
                                                                 <li><a href="#">Saket</a></li>
                                                             </ul> */}
                                                         </li>)
                                                        })}
                                                       
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
  );
}
export default CityList;
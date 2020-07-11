import React from "react";
import "../../shared/app-constants";
import { citiList } from "../../shared/app-constants";
import { makeStyles, IconButton } from "@material-ui/core";
import MyLocationIcon from "@material-ui/icons/MyLocation";
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
export default function CityList() {
  const classes = useStyles();
  return (
    <section style={{ paddingTop: "80px"}}>
      <div className={classes.cityList}>
        <a className="c-nn640c" href="/">
          <div className="c-13rzt5g">
            <div className="c-1t32dnn">
              <IconButton className={classes.location}>
                <MyLocationIcon style={{ color: "white" }} />
              </IconButton>
            </div>
            <span className="c-1t5hga5">Near By</span>
          </div>
        </a>
        {citiList.map((city) => (
          <a className="c-nn640c" href="/" key={city.id}>
            <div className="c-13rzt5g">
              <div className="c-1t32dnn">
                <img
                  alt={city.name}
                  wrapperclassname="c-1rnv7pz"
                  src={city.src}
                  className="c-ppn415"
                />
              </div>
              <span className="c-1t5hga5">{city.name}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

import React from "react";
import { offers } from "../../shared/app-constants";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    imagesSlider: {
      height: "300px",
      padding:"0px",
      verticalAlign: "top",
      borderRadius: "0px",
      margin: "auto",
      padding: "10px"
    },
  }
));

function OffresAndDeals() {
 const classes = useStyles();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  return (
    <section style={{width:"50%"}}>
       <Grid container spacing={3}>
        <Grid item xs={12}>
        <Slider {...settings}>
        {offers.map((offer) => {
          return (
            <div className="container" >
                <div className="row">
                <div ><img
                src={offer.src}
                alt={offer.id}
                className = {classes.imagesSlider}
              /></div>
                </div>
             
               
            </div>
          );
        })}
      </Slider>

        </Grid>
    </Grid>
    </section>
  );
}

export default OffresAndDeals;

import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img1 from '../../images/travalGuid/1.jpg'
import img2 from '../../images/travalGuid/2.jpg'
import img3 from '../../images/travalGuid/3.jpg'
import chain from '../../images/travalGuid/chain.png'
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        padding: '10px',
        margin: '10px'
    },
    media: {
        height: 140,
    },
});
export default function MidComp() {
    const classes = useStyles();
    return (
        <div>
            <div style={{ background: "#f8f9fa!important" }}>
                <div className="container res-travel-guide" >
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={img1}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h8" component="h5">
                                    Looking for luxury hotels in Jaipur? You’re not alone! Jaipur after all, 
                                    is synonymous with opulence and regalia from years gone by. While there are 
                                    several 5 star hotels in Jaipur which uphold the.                       
                               </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="#daa520">
                                Learn More
                    </Button>
                        </CardActions>
                    </Card>

                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={img3}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h8" component="h5">
                                    Nightlife in Jaipur has an added tinge of warmth, splendor 
                                    and regal montages to it, considering the historic appeal of the 
                                    city and its rich traditions steeped in years of elegant lifestyles and mili.
                             </Typography>
                            </CardContent>
                        </CardActionArea>

                        <CardActions>
                            <Button size="small" color="#daa520">
                                Learn More
                    </Button>
                        </CardActions>
                    </Card>

                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={img2}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h8" component="h5">
                                    Nightlife in Jaipur has an added tinge of warmth, 
                                    splendor and regal montages to it, considering the 
                                    historic appeal of the city and its rich traditions steeped in 
                                    years of elegant lifestyles and mili.                      
                                </Typography>

                            </CardContent>
                        </CardActionArea>
                        <CardActions>

                            <Button size="small" color="#daa520">
                                Learn More
                        </Button>

                        </CardActions>
                    </Card>
                </div>

            </div>

            <div className="fluid-container" style={{ marginTop: "50px" }}>
                <img src={chain} />
            </div>
        </div>
    )
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import image from '../../../utils/user.png'
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ProfileCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
           <div className="side-profile" ><img src={image} /></div>
           <div style={{color:"black"}}>Login/SignUp</div>
        </Typography>
        <List component="nav" className="list-cmp" aria-label="mailbox folders">
               <ListItem button>
                 <ListItemText primary="EZZ Wallet" />
                </ListItem>
            <Divider />
                <ListItem button divider>
                  <ListItemText primary="EZZ Rupee" />
                </ListItem>
                 <ListItem button>
                  <ListItemText primary="Invite & Earn" />
              </ListItem>
            <Divider light />

            <ListItem button>
              <ListItemText primary="EZZ Ping" />
            </ListItem>
          <Divider light />
            <ListItem button>
              <ListItemText primary="Need Help" />
            </ListItem>
          <Divider light />
            <ListItem button>
              <ListItemText primary="List Your Property" />
            </ListItem>
    </List>

      </CardContent>
      
    </Card>
  );
}

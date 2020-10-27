import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Cards.css';

const Infected = ({numberInfected, time}) => {
    const useStyles = makeStyles({
        root: {
          width: '100%',
          borderRadius: '10px'
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
      });
      const classes = useStyles();
      const bull = <span className={classes.bullet}>•</span>;
    return (
        <div className='card'>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                         Infected
                    </Typography>
                    <Typography className="number" variant="h5" component="h2">
                        {numberInfected.toLocaleString()}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {time}
                    </Typography>
                    <Typography variant="body2" component="p">
                            Number of people infected with
                        <br />
                        COVID-19
                    </Typography>
                </CardContent>
                <CardActions>
                <Button style={{backgroundColor:"rgba(157, 30, 179, 0.8)"}} className='button'></Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Infected;

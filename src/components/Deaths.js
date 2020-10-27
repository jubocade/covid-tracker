import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Deaths = ({numberDeaths, time}) => {
    const useStyles = makeStyles({
        root: {
          width: '100%',
          borderRadius: '10px'
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
      const classes = useStyles();
      const bull = <span className={classes.bullet}>•</span>;      
    return (
        <div className='card'>
            <Card c className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                         Deaths
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {numberDeaths.toLocaleString()}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {time}
                    </Typography>
                    <Typography variant="body2" component="p">
                           Number of deaths caused by
                        <br />
                        COVID-19
                    </Typography>
                </CardContent>
                <CardActions>
                <Button style={{backgroundColor:"rgba(201, 8, 8, 0.8)"}} className='button'></Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Deaths;

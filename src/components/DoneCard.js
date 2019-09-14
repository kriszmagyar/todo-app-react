import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    text: {
        textAlign: 'center',
        padding: '100px 20px',
    },
});

export default function DoneCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <CardContent>
            <Typography className={classes.text} variant="h4">
            You are done for now!
            </Typography>
        </CardContent>
    </Card>
  );
}

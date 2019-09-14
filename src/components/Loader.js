import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
    progress: {
        margin: theme.spacing(2),
    },
}));
  
export default function Loader() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress className={classes.progress} />
        </div>
    );
}
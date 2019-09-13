import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

export default function AddButton({handleClick}) {
    const classes = useStyles();

    return (
        <Fab color="primary" aria-label="add" className={classes.fab} onClick={handleClick}>
            <AddIcon />
        </Fab>
    )
}

AddButton.propTypes = {
    handleClick: PropTypes.func.isRequired
};
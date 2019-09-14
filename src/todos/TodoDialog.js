import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, useTheme, useMediaQuery } from '@material-ui/core';

export default function TodoDialog({ open, handleClose, handleSubmit }) {

  const [title, setTitle] = useState([]);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullScreen={fullScreen}>
        <DialogTitle id="form-dialog-title">Add new Todo</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            id="title"
            label="Title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleSubmit({ title })} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );
}

TodoDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};
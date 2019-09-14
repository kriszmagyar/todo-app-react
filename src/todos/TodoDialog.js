import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { addTodo } from './todoActions';

class TodoDialog extends React.Component {

  state = {
    title: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmitClick = () => {
    const { handleClose, handleSubmit } = this.props;
    handleSubmit(this.state);
    handleClose();
  }

  render() {
    const { open, handleClose } = this.props;

    return (
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add new Todo</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            id="title"
            label="Title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleSubmitClick} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

TodoDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
      handleSubmit: todo => dispatch(addTodo(todo))
  }
}

export default connect(null, mapDispatchToProps)(TodoDialog);
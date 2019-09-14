import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { Paper, Tooltip, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { getTodos, getError, getPending } from '../store/reducer';
import { connect } from 'react-redux';
import fetchTodos from './fetchTodos';

class TodoList extends React.Component {

  componentDidMount() {
    this.props.fetchTodos();
  }
  
  render() {
    const { todos, handleEdit, handleDelete } = this.props;

    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Title</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((todo, index) => (
              <TableRow key={todo.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{todo.title}</TableCell>
                <TableCell align="right">
                  <Tooltip title="Delete">
                    <IconButton aria-label="delete" onClick={() => handleDelete(todo.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Edit">
                    <IconButton aria-label="edit" onClick={() => handleEdit(todo.id)} >
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired
    })).isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  error: getError(state),
  todos: getTodos(state),
  pending: getPending(state)
});

const mapDispatchToProps = dispatch => {
  return {
      fetchTodos: () => dispatch(fetchTodos())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
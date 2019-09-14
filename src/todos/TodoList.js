import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@material-ui/core';
import { Paper, Tooltip, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { getTodos, getPending, getError } from '../store/reducer';
import { connect } from 'react-redux';
import { fetchTodos, deleteTodo, editTodo } from './todoActions';
import Loader from '../components/Loader';
import DoneCard from '../components/DoneCard';

class TodoList extends React.Component {

  state = {
    selectedTodoId: null
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  toggleEdit = id => {
    this.setState(prevState => ({
      selectedTodoId: prevState.selectedTodoId === id ? null : id
    }));
  }

  handleTitleChange = (e, todo) => {
    this.props.editTodo({ ...todo, title: e.target.value });
  }
  
  render() {
    const { todos, pending, error, deleteTodo } = this.props;
    const { selectedTodoId } = this.state;

    if (pending) return <Loader />;
    if (todos.length === 0) return <DoneCard />;

    return (
      <Paper>
        <Table>
          <colgroup>
            <col style={{width:'1%'}}/>
            <col style={{width:'60%'}}/>
            <col style={{width:'39%'}}/>
          </colgroup> 
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Title</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((todo, index) => (
              <TableRow key={todo.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  { selectedTodoId === todo.id 
                    ? <TextField
                      autoFocus
                      value={todo.title}
                      onChange={e => this.handleTitleChange(e, todo)}
                    /> 
                    : todo.title}
                </TableCell>
                <TableCell align="right">
                  <Tooltip title="Delete">
                    <IconButton aria-label="delete" onClick={() => deleteTodo(todo.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Edit">
                    <IconButton aria-label="edit" onClick={() => this.toggleEdit(todo.id)} >
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
    pending: PropTypes.bool,
    error: PropTypes.string,
    fetchTodos: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired
    
};

const mapStateToProps = state => ({
  pending: getPending(state),
  todos: getTodos(state),
  error: getError(state)
});

const mapDispatchToProps = dispatch => {
  return {
      fetchTodos: () => dispatch(fetchTodos()),
      deleteTodo: id => dispatch(deleteTodo(id)),
      editTodo: (id, todo) => dispatch(editTodo(id, todo)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
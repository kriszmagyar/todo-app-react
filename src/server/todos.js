let currentId = 1;
const getNextId = () => {
    return currentId++;
}

const todos = [
    { id: getNextId(), title: 'Todo1' }, 
    { id: getNextId(), title: 'Todo2' }
];

exports.todos = todos;
exports.getNextId = getNextId;
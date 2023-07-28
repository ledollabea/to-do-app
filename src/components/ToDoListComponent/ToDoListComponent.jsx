import PropTypes from 'prop-types'
import ToDoComponent from '../ToDoComponent/ToDoComponent'

const ToDoListComponent = ({toDos, doneTasks, onSetToDos, onSetDoneTasks }) => {
  
  return (
    <ul className='toDoList'>
      <h2>Items To Do:</h2>
      {toDos.map((toDo, id) => (
        <ToDoComponent key={id} toDo={toDo} toDos={toDos} doneTasks={doneTasks} onSetToDos={onSetToDos} onSetDoneTasks={onSetDoneTasks} />
      ))}
    </ul>
  )
}
ToDoListComponent.propTypes = {
  toDos: PropTypes.array,
  doneTasks: PropTypes.array,
  onSetToDos:PropTypes.func,
  onSetDoneTasks:PropTypes.func,
}

export default ToDoListComponent

import PropTypes from 'prop-types'
import ToDoComponent from '../ToDoComponent/ToDoComponent'

const DoneListComponent = ({toDos, doneTasks, onSetDoneTasks, onSetToDos}) => {
  console.log(doneTasks)
  return (
    <ul className='toDoList'>
      <h2>Completed Items:</h2>
      {doneTasks.map((doneTask, id) => (
        <ToDoComponent key={id} toDos={toDos} doneTask={doneTask} doneTasks={doneTasks} onSetToDos={onSetToDos} onSetDoneTasks={onSetDoneTasks} />
      ))}
    </ul>
  )
}
DoneListComponent.propTypes = {
  toDos: PropTypes.array,
  doneTasks: PropTypes.array.isRequired,
  onSetToDos:PropTypes.func,
  onSetDoneTasks:PropTypes.func,
}
export default DoneListComponent

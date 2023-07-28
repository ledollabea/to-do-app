import PropTypes from 'prop-types'
import { useState } from 'react'
import './style.css'

const AddToDoModal = ({onOpen, onSetOpen, onSetToDos}) => {

  const [task, setTask] = useState("")
  const handleChange = (e) => {
    setTask(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    onSetToDos((previous) =>[...previous,task])
    onSetOpen(!onOpen)
  }
  return (
    <dialog open={onOpen}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">Add task:</label>
        <input type="text" placeholder='Task' name='todo' onChange={handleChange} />
        <button type='submit' className='button-add'>Add</button>
      </form>
      
    </dialog>
  )
}
AddToDoModal.propTypes = {
  onOpen: PropTypes.bool.isRequired,
  onSetOpen: PropTypes.func,
  onSetToDos: PropTypes.func,
}
export default AddToDoModal

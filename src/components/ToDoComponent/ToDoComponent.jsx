import PropTypes from "prop-types";
import "./style.css";
import { Check, Trash, X } from "@phosphor-icons/react";
const ToDoComponent = ({ toDo, toDos, doneTask, doneTasks, onSetToDos, onSetDoneTasks }) => {
  const handleComplete = () => {
    if (doneTasks.length > 0){
      onSetDoneTasks(previous => [...previous, toDo])
    }
    else{
      onSetDoneTasks([toDo])
    }
    const allDone = toDos.filter(task => task !== toDo)
    onSetToDos(allDone);
  };


  const handleIncomplete = () => {
    if (toDos.length > 0){
      onSetToDos(previous => [...previous,doneTask])
    }
    else{
      onSetToDos([doneTask])
    }
    const tasksDone = doneTasks.filter(task => task !== doneTask)
    onSetDoneTasks(tasksDone)
  };

  const handleDelete = () => {
    toDo
      ? onSetToDos((previous) => previous.filter((task) => toDo !== task))
      : onSetDoneTasks((previous) =>
          previous.filter((task) => task !== doneTask)
        );
  };
  return (
    <li aria-hidden className={doneTask ? "complete" : ""}>
      {toDo ? <span>{toDo}</span> : doneTask?<span>{doneTask}</span>: <></>}
      <div className="icons">
        {toDo ? (
          <>
            <Check size={16} className="check" onClick={handleComplete} />
          </>
        ) : (
          <>
            <X size={16} className="check"  onClick={handleIncomplete} />
          </>
        )}
      </div>
      <Trash size={16} className="delete" onClick={handleDelete} />
    </li>
  );
};
ToDoComponent.propTypes = {
  toDo: PropTypes.string,
  toDos: PropTypes.array,
  doneTask: PropTypes.string,
  doneTasks: PropTypes.array,
  onSetToDos: PropTypes.func,
  onSetDoneTasks: PropTypes.func,
};

export default ToDoComponent;

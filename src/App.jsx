import { useState } from "react";
import "./App.css";
import ToDoListComponent from "./components/ToDoListComponent/ToDoListComponent";
import DoneListComponent from "./components/DoneListComponent/DoneListComponent";
import AddToDoModal from "./components/AddToDoModal/AddToDoModal";

function App() {
  const [open, setOpen] = useState(false);
  const [toDos, setToDos] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const levelOfCompleteness = () => {
    if (toDos.length == 0 && doneTasks.length==0){
      return "You have no tasks. Feel free to add some:"
    }
    else if (toDos.length == 0) {
      return "You completed all your tasks. Congratulations!"
    }
    else if (doneTasks.length == 0){
      return "You haven't completed any tasks. Try to do at least one. You can do it!"
    }
    else if (toDos.length !== doneTasks.length){
      return `Your completed ${doneTasks.length}/${toDos.length + doneTasks.length} tasks.`
    }
  }
  return (
    <>
      <div className="container">
        <h1>To-Do List</h1>
        <h2>{levelOfCompleteness()}</h2>
        <AddToDoModal onOpen={open} onSetOpen={setOpen} onSetToDos={setToDos} />
        <button className="button-add" onClick={() => setOpen(true)}>
          Add List Item
        </button>
        <div className="lists">
          {toDos.length > 0 && (
            <ToDoListComponent
              toDos={toDos}
              doneTasks={doneTasks}
              onSetToDos={setToDos}
              onSetDoneTasks={setDoneTasks}
            />
          )}
          {doneTasks.length > 0 && (
            <DoneListComponent
              toDos={toDos}
              doneTasks={doneTasks}
              onSetToDos={setToDos}
              onSetDoneTasks={setDoneTasks}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;

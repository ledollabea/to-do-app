import { useState } from "react";
import "./App.css";
import ToDoListComponent from "./components/ToDoListComponent/ToDoListComponent";
import DoneListComponent from "./components/DoneListComponent/DoneListComponent";
import AddToDoModal from "./components/AddToDoModal/AddToDoModal";

function App() {
  const [open, setOpen] = useState(false);
  const [toDos, setToDos] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  console.log(doneTasks);
  return (
    <>
      <div className="container">
        <h1>To-Do List</h1>
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

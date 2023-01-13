import "./styles.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoLists";
import AddTodoButton from "./components/AddTodoButton";
import { useSelector } from "react-redux";
import ConfirmationPopup from "./components/ConfirmationPopup";
export default function App() {
  const { isEdit, isCreate } = useSelector(state => state.todo)
  return (
    <>
      {(isEdit || isCreate) ? <AddTodo /> : <div className="m-3"><AddTodoButton /><TodoList /></div>}
      <ConfirmationPopup />
    </>
  );
}

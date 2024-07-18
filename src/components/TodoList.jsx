import TodoItem from "./TodoItem";
import { useEffect, useState } from "react";
import "../scss/TodoList.scss";

function TodoList() {
  const [todoItems, setTodoItems] = useState([]);
  const [newTodoText, setNewTodoText] = useState("");

  //Lee el localStorage en la primera carga
  useEffect(() => {
    let data = localStorage.getItem("todoItems");
    if (data) {
      setTodoItems(JSON.parse(data));
    }
  }, []);

  //Guarda en los items en el localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
  }, [todoItems]);

  const toggleComplete = (id) => {
    setTodoItems(
      todoItems.map((item) =>
        //verifica si el id del item actual coincide con el id pasado a la función
        // si la condición es true se usa el spear para crear una copia del objeto item.
        // luego se actualiza la prop 'completed' del objeto copiado y se invierte el valor
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  //Cada vez que se hace submit:
  // 1. previene que se recargue de nuevo (default)
  // 2. Si el input contiene algo se ejecuta addTodo() y se pone en blanco
  function handlerSubmit(e) {
    e.preventDefault();
    if (newTodoText.trim() !== "") {
      addTodo();
      setNewTodoText("");
    }
  }

  // Se crea un nuevo objeto y se añade al todoItems
  function addTodo() {
    const newTodo = {
      id: todoItems.length + 1,
      text: newTodoText,
      completed: false,
    };
    setTodoItems([...todoItems, newTodo]);
  }

  // el newTodoText es lo que está en el input
  function handleChange(e) {
    setNewTodoText(e.target.value);
  }

  return (
    <div className="app-container">
      <form className="todoForm" onSubmit={handlerSubmit}>
        <input
          className="inputText"
          type="text"
          placeholder="Write your todo"
          onChange={handleChange}
          value={newTodoText}
        />
        <button type="submit">Add</button>
      </form>
      {todoItems.map((item) => (
        <TodoItem key={item.id} item={item} toggleComplete={toggleComplete} />
      ))}
    </div>
  );
}

export default TodoList;

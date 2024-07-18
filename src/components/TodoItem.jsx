import "../scss/TodoItem.scss";

function TodoItem({ item, toggleComplete }) {
  return (
    <div className="item-container">
      <input
        type="checkbox"
        checked={item.completed} //si es true, va a estar chekeado
        onChange={() => toggleComplete(item.id)} //función que se llama cuando el checkbox es marcado o desmarcado
      />
      <span>{item.text}</span>
    </div>
  );
}

export default TodoItem;

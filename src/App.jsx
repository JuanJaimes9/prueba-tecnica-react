import Header from "./components/Header";
import TodoList from "./components/TodoList";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header title="Prueba técnica React ✨" />
      <TodoList />
    </div>
  );
}

export default App;

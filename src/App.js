import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Todos from './components/Todos';
import { TODOS } from './data.js';

function App() {
  const [todos, setTodos] = useState(TODOS);

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.elements.todo;
    const body = input.value.trim();
    
    if (!body) return;
    
    const newTodo = {
      id: todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1,
      body: body
    };
    
    setTodos([...todos, newTodo]);
    input.value = '';
  };

  const handleAddTask = () => {
    const newTodo = {
      id: todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1,
      body: "New Default Task"
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todo" />
        <button type="submit">Add Todo via Form</button>
      </form>

      <h2>My todos</h2>
      <Todos todos={todos} setTodos={setTodos} />
      
      <Button onClick={handleAddTask} greeting="Add Task" />
    </div>
  );
}

export default App;
import { useState } from 'react';
import '../css/TodoList.css';

function createInitialTodos() {
  const initialTodos = [];
  for (let i = 0; i < 5; i++) {
    initialTodos.push({id: i, text: 'Elemento ' + (i + 1)});
  }
  return initialTodos;
}

export default function TodoList() {
  const [todos, setTodos] = useState(createInitialTodos);
  const [text, setText] = useState('');

  return (
    <div className='Content-List'> 
      <p>Listado de tareas</p>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        setText('');
        setTodos([{
          id: todos.length,
          text: text
        }, ...todos]);}}>Agregar</button>

      <ul>
        {todos.map(item => (
          <li key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
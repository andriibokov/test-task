import { useCallback, useState } from 'react';
import { CenteredLayout } from '~/components/UI/CenteredLayout';
import Todo from '~/components/Todo';

const todosData = [
  { id: 1, text: 'run a marathon', done: false },
  { id: 2, text: 'ride an elephant', done: false },
  { id: 3, text: 'swim with a fish', done: false },
];

export const Optimize1 = () => {
  const [todos, setTodos] = useState(todosData);
  
  const handleTodoClick = useCallback(
    (id: number) => {
      setTodos(todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
    },
    [todos],
  );

  return (
    <CenteredLayout className="gap-4">
      <div className="text-3xl">It re-renders all items! =\</div>
      <div>We need to fix that</div>
      <ul>
        {todos.map((item) => (
          <Todo
            key={item.id}
            value={item.text}
            flag={item.done}
            onClick={() => handleTodoClick(item.id)}
          />
        ))}
      </ul>
    </CenteredLayout>
  );
};

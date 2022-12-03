{
  type Todo = {
    title: string;
    description: string;
    label: string;
    priority: 'high' | 'low';
  };
  function updateTodo(todo: Todo, filedsToUpdate: Partial<Todo>): Todo {
    return { ...todo, ...filedsToUpdate };
  }

  const todoObj: Todo = {
    title: '넷플릭스 보기',
    description: '이번에 새로나온 영화를 보려고 한다.',
    label: '영화',
    priority: 'high',
  };

  const update: Partial<Todo> = {
    title: '디즈니 플러스보기',
    priority: 'low',
  };

  const newTodo = updateTodo(todoObj, update);
  console.log(newTodo);
}

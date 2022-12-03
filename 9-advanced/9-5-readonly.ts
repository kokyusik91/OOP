{
  type Todo = {
    title: string;
    description: string;
  };
  // 기존에는 이렇게 ReadOnlyType이라는 Type을 만들어서 사용
  type ReadOnlyType<T> = {
    readonly [P in keyof T]: T[P];
  };
  // 위 처럼 타입스크립트에서 제공하는 ReadOnly를 사용하면 된다.
  function display(todo: Readonly<Todo>) {
    todo.title = 'asd';
  }
}

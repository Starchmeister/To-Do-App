import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todos } = props;
  return (
    <div>
      <ul className="main">
        {todos.map((todo, todoIndex) => (
          <TodoCard {...props} key={todoIndex} index={todoIndex}>
            {todo}
          </TodoCard>
        ))}
      </ul>
    </div>
  );
}

import { useTodos } from "../../hooks/useTodos";
import { Container, TodoCard } from "./styles";

import removeIcon from "../../assets/ic-delete.png";

export function ToDoBox() {
  const { todos, removeTodo } = useTodos();
  return (
    <>
      {todos.length === 0 ? (
        <>
          <Container background="var(--gray)">
            <p>Nenhum item cadastrado</p>
          </Container>
        </>
      ) : (
        <Container background={null}>
          {todos.map((todo) => (
            <>
              <TodoCard key={todo}>
                {todo}
                <button>
                  <img src={removeIcon} alt="Remover tarefa" onClick={() => removeTodo('@todo', todo)} />
                </button>
              </TodoCard>
            </>
          ))}
        </Container>
      )}
    </>
  );
}

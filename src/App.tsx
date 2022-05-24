import { ToDoContainer } from "./components/ToDoContainer";
import { TodoProvider } from "./hooks/useTodos";
import { GlobalStyles } from "./styles/Global";

export function App() {
  return (
    <TodoProvider>
      <ToDoContainer />
      <GlobalStyles />
    </TodoProvider>
  );
}
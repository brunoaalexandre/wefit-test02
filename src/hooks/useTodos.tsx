import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";

interface Todo {
  title: string;
}

interface TodoProviderProps {
  children: ReactNode;
}

interface TodoContextData {
  todos: string[];
  getTodoSave: (key: string) => Promise<void>;
  createTodo: (key: string, title: string) => Promise<void>;
  removeTodo: (key: string, title: string) => Promise<void>;
}

const TodoContext = createContext<TodoContextData>({} as TodoContextData);

export function TodoProvider({ children }: TodoProviderProps) {
  const [todos, setTodos] = useState<string[]>([]);

  useEffect(() => {
    async function getTodos() {
      const result = await getTodoSave("@todo");

      if (result.length != 0) {
        setTodos(result);
      }
    }
    getTodos();
  }, []);

  async function getTodoSave(key: string) {
    const myTodos = (await localStorage.getItem(key)) as string;
    let todosSave = JSON.parse(myTodos) || [];

    return todosSave;
  }

  async function createTodo(key: string, title: string) {
    let todoStored = await getTodoSave(key);

    const hasTodo = todoStored.some((todoTitle: string) => todoTitle === title);
    if (hasTodo) {
      alert("Você já adicionou essa tarefa!");
      return;
    }

    await todoStored.push(title);
    await setTodos(todoStored);
    await localStorage.setItem(key, JSON.stringify(todoStored));
  }

  async function removeTodo(key: string, title: string) {
    let todoStored = await getTodoSave(key);

    const hasTodo = todoStored.some((todoTitle: string) => todoTitle = title);
    if(hasTodo) {
      let index = todoStored.indexOf(title);

      while(index >= 0) {
        todoStored.splice(index, 1);
        index = todoStored.indexOf(title);
      }
    }
    await setTodos(todoStored);
    await localStorage.setItem(key, JSON.stringify(todoStored));
  }

  return (
    <TodoContext.Provider value={{ todos, getTodoSave, createTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  const context = useContext(TodoContext);
  return context;
}
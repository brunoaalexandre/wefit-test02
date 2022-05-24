import { FormEvent, useState } from "react";

import addIcon from "../../assets/ic-add.png";
import { useTodos } from "../../hooks/useTodos";

import { Form } from "./styles";

export function NewToDoInput() {
  const [todo, setTodo] = useState<string>("");
  const { createTodo } = useTodos();

  async function handleCreateNewTodo(event: FormEvent) {
    event.preventDefault();

    if (todo != "") {
      createTodo("@todo", todo);
    }
    await setTodo("");
  }
  return (
    <Form onSubmit={handleCreateNewTodo}>
      <input
        type="text"
        placeholder="Digite"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">
        <img src={addIcon} alt="Adicionar ToDo" />
      </button>
    </Form>
  );
}

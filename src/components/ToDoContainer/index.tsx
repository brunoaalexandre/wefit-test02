import { ReactNode } from "react";
import { NewToDoInput } from "../NewToDoInput";
import { ToDoBox } from "../ToDoBox";
import { Container } from "./styles";

export function ToDoContainer() {
  return (
    <Container>
      <NewToDoInput />
      <ToDoBox />
    </Container>
  );
}

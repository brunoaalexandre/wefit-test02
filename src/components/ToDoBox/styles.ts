import styled from "styled-components";

interface ContainerProps {
  background: string | null;
}

export const Container = styled.div<ContainerProps>`
  width: 352px;
  height: 280px;
  background: ${props => props.background};
  border: ${props => props.background ? "1px dashed #ccc" : ""};
  display: flex;
  align-items: ${props => props.background ? "center" : "flex-start"};
  justify-content: ${props => props.background ? "center" : "flex-start"};
  margin-top: 24px;
  flex-direction: column;
  gap: 8px;
  overflow-y: ${props => props.background ? "hidden" : "scroll"};
  overflow-x: hidden;

  p {
    color: #606060;
  }
`;

export const TodoCard = styled.div`
  background: #eee;
  border-radius: 2px;
  width: 100%;
  max-width: 320px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 0.875rem;
    color: #606060;
  }

  button {
    width: 12.44px;
    height: 16px;
    border: none;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
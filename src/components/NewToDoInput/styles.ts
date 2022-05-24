import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  input {
    width: 288px;
    height: 48px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
    border: none;
    padding: 15px;
    font-size: 1rem;
  }

  button {
    width: 48px;
    height: 48px;
    background: var(--green);
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 24px;
      height: 24px;
    }

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
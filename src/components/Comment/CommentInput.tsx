import React from "react";
import styled from "styled-components";
import { Input } from "../ui/index";

const CommentInput: React.FC<{ addComment(value: string): void }> = ({  addComment }) => {
  return (
    <Wrapper>
      <Input
        setValue={(value: string) => addComment(value)}
        placeholder="Комментарий"
        buttons={{title: "Добавить комментрарий"}}
      />
    </Wrapper>
  );
};

export default CommentInput;

const Wrapper = styled.div`
  display: flex;
  & > * {
    margin-right: 10px;
  }
`;

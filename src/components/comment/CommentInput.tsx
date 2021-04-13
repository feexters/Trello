import React from "react";
import styled from "styled-components";
import Input from "../Input";

const StyledCommentWrap = styled.div`
  display: flex;
  & > * {
    margin-right: 10px;
  }
`;

const CommentAdd: React.FC<{ addComment(value: string): void }> = ({  addComment }) => {
  return (
    <StyledCommentWrap>
      <Input
        setValue={(value: string) => addComment(value)}
        placeholder="Комментарий"
        buttons={{title: "Добавить комментрарий"}}
      />
    </StyledCommentWrap>
  );
};

export default CommentAdd;

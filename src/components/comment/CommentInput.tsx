import React, { useState, useRef } from "react";
import styled from "styled-components";
import Button from "../Button";
import InputForm from "../InputForm";

const StyledCommentWrap = styled.div`
  display: flex;
  & > * {
    margin-right: 10px;
  }
`;

const CommentAdd: React.FC<{ set(value: string): void }> = ({ set }) => {
  const [change, setChange] = useState<boolean>(false);
  const inputComment = useRef<HTMLInputElement>(null);

  /* Press Enter */
  const keyHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      set(inputComment.current!.value);
    }
  };

  return (
    <StyledCommentWrap>
      {change ? (
        <>
          <InputForm
            keyPress={keyHandler}
            inputRef={inputComment}
            placeholder="Комментарий"
          />
          <Button
            title={"Сохранить"}
            clickHandler={() => {
              setChange(!change);
              set(inputComment.current!.value);
            }}
          />
        </>
      ) : (
        <>
          <Button
            title={"Добавить комментарий"}
            clickHandler={() => setChange(!change)}
          />
        </>
      )}
    </StyledCommentWrap>
  );
};

export default CommentAdd;

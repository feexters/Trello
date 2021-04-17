import React, { useEffect, useRef, useState } from "react";
import { CommentData } from "../../lib/interfaces";
import styled from "styled-components";
import { useData } from "../Context";
import { ChangePanel } from "../ChangePanel";
import { InputChange } from "../ui";

const Comment: React.FC<{ comment: CommentData }> = ({ comment }) => {

  const { user, comments } = useData()

  const inputRef = useRef<HTMLInputElement>(null)

  const [isChange, setIsChange] = useState(false)

  const changeComment = (value: string) => {
    if (value.trim()) {
      comments.change(comment.id, value)
      setIsChange(!isChange)
    }
  }

  /* Focus on the input */
  useEffect(() => {
    if (isChange) {
      inputRef.current!.focus();
      inputRef.current!.value = comment.value 
    }
  }, [isChange, comment.value]);

  return (
    <Wrapper>
      {!isChange && (
        <>
          <Author>{comment.author}:</Author>
          <Value>{comment.value}</Value>
        </>
      )}
      {!isChange && comment.author === user.name && (
        <ChangePanel
          onDelete={() => comments.delete(comment.id)}
          onChange={() => setIsChange(!isChange)}
        ></ChangePanel>
      )}
      {isChange && (
        <InputChange
          inputRef={inputRef}
          placeholder="Комментарий"
          setValue={changeComment}
        />
      )}
    </Wrapper>
  );
};

export default Comment;

/* Styles */
const Wrapper = styled.div`
  width: 50%;
  padding: 5px 10px;
  background-color: white;
  border-bottom: 2px solid grey;
  align-self: center;
  cursor: pointer;
`;

const Value = styled.div`
  font-size: 1.5rem;
`;

const Author = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
`;

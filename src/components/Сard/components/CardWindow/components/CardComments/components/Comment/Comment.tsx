import React, { useState } from "react";
import { CommentData } from "lib/interfaces";
import styled from "styled-components";
import { ChangePanel } from "components/ChangePanel";
import { TextArea } from "components/ui";
import { useAppDispatch, useAppSelector } from "lib/hooks/hooks";
import { deleteComment, setCommentValue } from "store";

const Comment: React.FC<{ comment: CommentData }> = ({ comment }) => {

  const dispatch = useAppDispatch()

  const user = useAppSelector(state => state.user)
  const [isChange, setIsChange] = useState(false)

  const onSubmit = (value: string): void => {
    if (value.trim()) {
      dispatch(setCommentValue({id: comment.id, value: value}))
      setIsChange(!isChange)
    }
  }
  
  return (
    <Wrapper>
      {!isChange ? (
        <>
          <Author>{comment.author}:</Author>
          <Value>{comment.value}</Value>
        </>
      ) : (
        isChange && (
          <TextArea
            placeholder={"Введите название карточки"}
            onSubmit={onSubmit}
            value={comment.value}
          />
        )
      )}
      {!isChange && comment.author === user.name && (
        <ChangePanel
          onDelete={() => dispatch(deleteComment(comment.id))}
          onChange={() => setIsChange(!isChange)}
        ></ChangePanel>
      )}
    </Wrapper>
  );
};

export default Comment;

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

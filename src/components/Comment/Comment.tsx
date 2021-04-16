import React from "react";
import { CommentData } from "../../lib/interfaces/interfaces";
import styled from "styled-components";
import { useData } from "../Context";
import { ChangePanel } from "../ChangePanel";

const Comment: React.FC<{ comment: CommentData }> = ({ comment }) => {

  const { user, comments } = useData()

  return (
    <Wrapper>
      <Author>{comment.author}:</Author>
      <Value>{comment.value}</Value>
      {comment.author === user.name && (
        <ChangePanel onDelete={() => comments.delete(comment.id)}></ChangePanel>
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

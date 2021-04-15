import React from "react";
import { CommentData } from "../../interfaces";
import styled from "styled-components";

const Comment: React.FC<{ comment: CommentData }> = ({ comment }) => {
  return (
    <Wrapper>
      <Author>{comment.author}:</Author>
      <Value>{comment.value}</Value>
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

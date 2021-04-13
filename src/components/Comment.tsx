import React from "react";
import { CommentData } from "../interfaces";
import styled from "styled-components";

/* Styles */
const StyledComment = styled.div`
  width: 50%;
  padding: 5px 10px;
  background-color: white;
  border-bottom: 2px solid grey;
  align-self: center;
  cursor: pointer;
`;

const StyledValue = styled.div`
  font-size: 1.5rem;
`;

const StyledAuthor = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
`;

const Comment: React.FC<{ comment: CommentData }> = ({ comment }) => {
  return (
    <StyledComment>
      <StyledAuthor>{comment.author}:</StyledAuthor>
      <StyledValue>{comment.value}</StyledValue>
    </StyledComment>
  );
};

export default Comment;

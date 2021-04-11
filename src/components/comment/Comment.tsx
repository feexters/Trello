import React from "react";
import { CommentInfo } from "../../classes";
import styled from "styled-components";

/* Styles */
const StyledComment = styled.div`
  width: 100%;
  padding: 5px 10px;
  background-color: white;
  border-radius: 5px;
  align-self: center;
  cursor: pointer;
`;
const StyledValue = styled.div`
  font-size: 1.5rem;
`;

const Comment: React.FC<{ comment: CommentInfo }> = ({ comment }) => {
  return (
    <StyledComment>
      <StyledValue>{comment.value}</StyledValue>
    </StyledComment>
  );
};

export default Comment;

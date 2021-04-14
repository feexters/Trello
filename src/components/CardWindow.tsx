import React from "react";
import styled from "styled-components";
import CardDescription from "./CardDescription";
import CardTitle from "./CardTitle";
import Comment from "./Comment";
import CommentAdd from "./CommentInput";
import { CardModalProps } from "../types";
import { useData } from "./DataContext";
import { CommentData } from "../interfaces"

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  margin: 0;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCard = styled.div`
  width: 100%;
  max-width: 800px;
  min-height: 100px;
  padding: 10px 20px;
  background-color: white;
  border: 2px solid black;
  border-radius: 10px;
  position: relative;
  top: -10%;
`;

const StyledBlock = styled.div`
  margin-bottom: 20px;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const StyledBlockTitle = styled.div`
  font-size: 1.8rem;
`;

const StyledText = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  color: rgb(102, 102, 102);
`;

const StyledColumnTitle = styled.span`
  font-size: 1.7rem;
  text-decoration: underline;
  cursor: pointer;
`;

const StyledCommentList = styled.div`
  margin: 10px;
`

const StyledClose = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
`;

const Card: React.FC<CardModalProps> = ({ card, column, close }) => {
  // Get commetns list
  const { comments, user } = useData()
  // Comments id
  const id = card.commentsId

  // Add new commment 
  const addComment = (value: string) =>  {
    if (value.trim()) {
      // Create new comment
      const newComment: CommentData = {
        id: comments.list[id].length,
        value: value,
        author: user.name!
      }
      // Add new comment in list
      comments.change(id, newComment)
    }
  }

  return (
    <StyledWrapper>
      <StyledCard>

        <StyledHeader>
          <div>
            <CardTitle title={card.title} />
            <StyledText>
              в колонке <StyledColumnTitle>{column.title}</StyledColumnTitle>
            </StyledText>
          </div>

          <StyledClose onClick={close}>X</StyledClose>
        </StyledHeader>

        <StyledBlock>
          <StyledBlockTitle>Описание</StyledBlockTitle>
          <CardDescription card={card} />
        </StyledBlock>

        <StyledBlock>
          <StyledBlockTitle>Действия</StyledBlockTitle>
          <CommentAdd addComment={addComment} />
          
          <StyledCommentList>
          <StyledText>Комментарии</StyledText>
            {/* Show comments */}
            {comments.list[id].map((com) => (
              <Comment comment={com} key={com.id} />
            ))}
          </StyledCommentList>
        </StyledBlock>
        
      </StyledCard>
    </StyledWrapper>
  );
};

export default Card;

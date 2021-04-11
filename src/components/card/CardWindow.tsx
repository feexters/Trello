import React, { useState } from "react";
import styled from "styled-components";
import { CommentInfo } from "../../classes";
import { CardModalProps } from "../../interfaces";
import CardDescription from "./CardDescription";
import CardTitle from "./CardTitle";
import Comment from "../comment/Comment";
import CommentAdd from "../comment/CommentInput";

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

const StyledColumnInfo = styled.div`
  font-size: 1.5rem;
`;

const StyledColumnTitle = styled.span`
  font-size: 1.7rem;
  text-decoration: underline;
  cursor: pointer;
`;
const StyledClose = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
`;

const Card: React.FC<CardModalProps> = ({ card, colTitle, close }) => {
  const [value, setValue] = useState(card.comments);
  card.comments = value;

  function createComment(value: string) {
    setValue((prev) => [...prev, new CommentInfo(prev.length, value, "autor")]);
  }

  return (
    <StyledWrapper>
      <StyledCard>
        <StyledHeader>
          <div>
            <CardTitle title={card.title} />
            <StyledColumnInfo>
              в колонке <StyledColumnTitle>{colTitle}</StyledColumnTitle>
            </StyledColumnInfo>
          </div>

          <StyledClose onClick={close}>X</StyledClose>
        </StyledHeader>

        <StyledBlock>
          <StyledBlockTitle>Описание</StyledBlockTitle>
          <CardDescription card={card} />
        </StyledBlock>

        <StyledBlock>
          <StyledBlockTitle>Действия</StyledBlockTitle>
          <CommentAdd set={createComment} />
          {card.comments.map((com) => (
            <Comment comment={com} key={com.id} />
          ))}
        </StyledBlock>
      </StyledCard>
    </StyledWrapper>
  );
};

export default Card;

import React, { useState } from "react";
import styled from "styled-components";
import { CardProps } from "./../interfaces";
import Card from "./Card";

/* Styles */
const StyledCardPreview = styled.div`
  width: 100%;
  padding: 5px 10px;
  background-color: white;
  border-radius: 5px;
  align-self: center;
  cursor: pointer;
`;
const StyledTitle = styled.div`
  font-size: 1.5rem;
`;

const StyledCommets = styled.div`
  width: 50px;
  font-size: 1.3rem;
  margin-top: 10px;
  & > * {
    margin-right: 5px;
  }
`;

const CardPreview: React.FC<CardProps> = ({ card, colTitle }) => {
  const [open, setOpen] = useState<boolean>(false);
  let commentsCount = card.comments.length;

  return (
    <>
      <StyledCardPreview onClick={() => setOpen(!open)}>
        <StyledTitle>{card.title}</StyledTitle>
        {commentsCount > 0 && (
          <StyledCommets>
            <i className="far fa-comment"></i>
            {commentsCount}
          </StyledCommets>
        )}
      </StyledCardPreview>
      {/* Create modal window of card */}
      {open && (
        <Card
          card={card}
          colTitle={colTitle}
          close={() => {
            setOpen(!open);
          }}
        />
      )}
    </>
  );
};

export default CardPreview;

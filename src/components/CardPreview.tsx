import React, { useState } from "react";
import styled from "styled-components";
import { CardPreviewProps } from "../types";
import { useData } from "./DataContext";
import Card from "./CardWindow";

/* Styles */
const StyledCardPreview = styled.div`
  width: 100%;
  padding: 5px 10px;
  background-color: white;
  border-radius: 5px;
  align-self: center;
  cursor: pointer;
`;
const StyledTitle = styled.span`
  display: block;
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

const CardPreview: React.FC<CardPreviewProps> = ({ card, column }) => {
  // Open or close modal window of card
  const [modal, setModal] = useState<boolean>(false);
  // Get comments
  const { comments } = useData()
  // Counter of comments
  const commentsCount = comments.list[card.commentsId].length

  return (
    <>
      <StyledCardPreview onClick={() => setModal(!modal)}>
        {/* Title */}
        <StyledTitle>{card.title}</StyledTitle>
        {/* Counter of comments */}
        {commentsCount > 0 && (
          <StyledCommets>
            <i className="far fa-comment"></i>
            {commentsCount}
          </StyledCommets>
        )}
      </StyledCardPreview>


      {/* Create a modal window of card */}
      {modal && (
        <Card
          card={card}
          column={column}
          close={() => {
            setModal(!modal);
          }}
        />
      )}

      
    </>
  );
};

export default CardPreview;

import React, { useState } from "react";
import styled from "styled-components";
import { CardPreviewProps } from "../../lib/types/types";
import { getCommentsById } from "../../lib/utils";
import { useData } from "../Context/index";
import { CardWindow } from "./index";

const CardPreview: React.FC<CardPreviewProps> = ({ card, column }) => {
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);

  const { comments } = useData()

  const commentsCount = getCommentsById(card.id, comments.list).length

  return (
    <>
      <Wrapper onClick={() => setIsVisibleModal(!isVisibleModal)}>
        <CardTitle>{card.title}</CardTitle>

        {commentsCount > 0 && (
          <Comments>
            <i className="far fa-comment"></i>
            {commentsCount}
          </Comments>
        )}
      </Wrapper>

      {isVisibleModal && (
        <CardWindow
          card={card}
          column={column}
          close={() => {
            setIsVisibleModal(!isVisibleModal);
          }}
        />
      )}

      
    </>
  );
};

export default CardPreview;

/* Styles */
const Wrapper = styled.div`
  width: 100%;
  padding: 5px 10px;
  background-color: white;
  border-radius: 5px;
  align-self: center;
  cursor: pointer;
`;
const CardTitle = styled.span`
  display: block;
  font-size: 1.5rem;
`;

const Comments = styled.div`
  width: 50px;
  font-size: 1.3rem;
  margin-top: 10px;
  & > * {
    margin-right: 5px;
  }
`;


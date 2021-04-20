import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { CardData, ColumnData } from "lib/interfaces";
import { ChangePanel } from "components/ChangePanel";
import { useData } from "components/Context";
import { CardWindow } from "./components/CardWindow";

interface CardPreviewProps {
    card: CardData,
    column: ColumnData
}

const CardPreview: React.FC<CardPreviewProps> = ({ card, column }) => {
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);

  const { comments, user, cards } = useData()

  const commentsList = useMemo(() => comments.list.filter(elem => elem.cardId === card.id), [comments.list, card.id])

  const commentsCount = commentsList.length

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

        {card.author === user.name && <ChangePanel onDelete={() =>{cards.delete(card.id)}}></ChangePanel>}
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

  & > * {
    margin: 5px 0;
  }
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

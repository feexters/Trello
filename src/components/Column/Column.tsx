import React from "react";
import styled from "styled-components";
import { CardPreview } from "../Card/index";
import { ColumnData, CardData } from '../../interfaces'
import { useData } from "../Context/DataContext";
import { Input } from "../ui/index";

const Column: React.FC<{ column: ColumnData }> = ({ column }) => {
  // Get comments and cards list
  const { comments, cards, user } = useData()

  /* Add new card */
  function addCard(title: string): void {
    if (title.trim()) {
      // New Card
      const newCard: CardData = {
        id: cards.list[column.id].length,
        title: title,
        author: user.name!,
        description: "",
        commentsId: comments.list.length
      }
      // Create new comments list
      comments.change(comments.list.length)
      // Create new Card
      cards.change(column.id, newCard)
    }
  }

  return (
    <Wrapper>
      {/* Title */}
      <Title>{column.title}</Title>
      {/* Cards */}
      {cards.list[column.id] &&
        cards.list[column.id].map((card) => {
          return (
            <CardPreview
              card={card}
              column={column}
              key={card.id}
            ></CardPreview>
          );
        })}

      {/* Create new card */}
      <Input
        setValue={(value: string) => addCard(value)}
        placeholder="Введите название карточки"
        buttons={{ title: "+ Добавить еще одну карточку" }}
      ></Input>

    </Wrapper>
  );
};

export default Column;

/* Styles */
const Wrapper = styled.div`
  width: 100%;
  max-width: 250px;
  padding: 3%;

  display: flex;
  justify-content: center;
  flex-direction: column;

  background-color: rgb(230, 230, 230);
  border-radius: 5px;

  & > * {
    margin-bottom: 5px;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

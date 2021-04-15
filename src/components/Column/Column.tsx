import React from "react";
import styled from "styled-components";
import { CardPreview } from "../card/index";
import { ColumnData, CardData } from '../../lib/interfaces/interfaces'
import { useData } from "../context/index";
import { Input } from "../ui/index";
import { getId, getCardsById } from "../../lib/utils";

const Column: React.FC<{ column: ColumnData }> = ({ column }) => {
  
  const { cards, user } = useData()

  function addCard(title: string): void {
    if (title.trim()) {
      // New Card
      const newCard: CardData = {
        id: getId(),
        title: title,
        author: user.name!,
        description: "",
        columnId: column.id
      }

      cards.add(newCard)
    }
  }

  return (
    <Wrapper>
      <Title>{column.title}</Title>
      {/* Cards */
        getCardsById(column.id, cards.list).map((card) => {
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

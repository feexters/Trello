import React, { useState, useRef, useEffect } from "react";
import Button from "./Button";
import styled from "styled-components";
import CardPreview from "./card/CardPreview";
import InputForm from "./InputForm";
import { ColumnProps } from "./../interfaces";
import { CardData, CommentData } from "../classes";

/* Styles */
const StyledColumn = styled.div`
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

const StyledTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Column: React.FC<ColumnProps> = ({ column }) => {
  /* Ref for input */
  const inputCard = useRef<HTMLInputElement>(null);
  /* Open or close input */
  const [cardInput, setCardInput] = useState<boolean>(true);
  /* Cards state */
  const [cards, setCards] = useState<Array<CardData>>(() => JSON.parse(localStorage.getItem('cards')!))
  console.log(cards)
  
  /* Press Enter */
  const keyAdd = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      addCard(inputCard.current!.value);
      setCardInput(!cardInput);
    }
  };

  /* Add new card */
  function addCard(title: string): void {
    if (title.trim()) {
      // Get comments list
      const comments: Array<CommentData> = JSON.parse(localStorage.getItem('comments')!)
      // Create new Card
      setCards(prev => [...prev, new CardData(cards.length, title, "", "", comments.length)])
      console.log(column);
    }
  }

  /* Input is out of focus */
  const blurHandler = () => {
    addCard(inputCard.current!.value);
    setCardInput(!cardInput);
  };

  /* Focus on the input */
  useEffect(() => {
    if (!cardInput) {
      inputCard.current!.focus();
    }
  }, [cardInput]);

  return (
    <StyledColumn>
      {/* Title */}
      <StyledTitle>{column.title}</StyledTitle>
      
      {/* Cards */}
      {cards.map((card) => (
          <CardPreview
            card={card}
            colTitle={column.title}
            key={card.id}
          ></CardPreview>
      ))}

      
      {cardInput ? (
        /* Button for creating new card */
        <Button
          title={"+ Добавить еще одну карточку"}
          clickHandler={() => setCardInput(!cardInput)}
        ></Button>
      ) : (
        /* Creating a new card */
        <>
          <InputForm
            keyPress={keyAdd}
            blurHandler={blurHandler}
            inputRef={inputCard}
            placeholder="Введите название карточки"
          />
          <div>
            <Button
              title={"Добавить карточку"}
              clickHandler={() => setCardInput(!cardInput)}
            ></Button>
            <Button
              title={"X"}
              clickHandler={() => setCardInput(!cardInput)}
            ></Button>
          </div>
        </>
      )}
    </StyledColumn>
  );
};

export default Column;

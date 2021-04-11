import React, { useState, useRef, useEffect } from "react";
import Button from "./Button";
import styled from "styled-components";
import CardPreview from "./card/CardPreview";
import InputForm from "./InputForm";
import { ColumnProps } from "./../interfaces";

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

const Column: React.FC<ColumnProps> = ({ column, addCard }) => {
  /* Ref for input */
  const inputCard = useRef<HTMLInputElement>(null);
  /* Open or close input */
  const [createValue, setCreateValue] = useState<boolean>(true);

  /* Press Enter */
  const keyAdd = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      addCard(inputCard.current!.value, column.id);
      setCreateValue(!createValue);
    }
  };

  /* Input is out of focus */
  const blurHandler = () => {
    setCreateValue(!createValue);
    addCard(inputCard.current!.value, column.id);
  };

  /* Focus on the input */
  useEffect(() => {
    if (!createValue) {
      inputCard.current!.focus();
    }
  }, [createValue]);

  return (
    <StyledColumn>
      <StyledTitle>{column.title}</StyledTitle>
      {column.cards.map((card) => (
        <CardPreview
          card={card}
          colTitle={column.title}
          key={card.id}
        ></CardPreview>
      ))}

      {createValue ? (
        /* Button for creating new card */
        <Button
          title={"+ Добавить еще одну карточку"}
          clickHandler={() => setCreateValue(!createValue)}
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
              clickHandler={() => setCreateValue(!createValue)}
            ></Button>
            <Button
              title={"X"}
              clickHandler={() => setCreateValue(!createValue)}
            ></Button>
          </div>
        </>
      )}
    </StyledColumn>
  );
};

export default Column;

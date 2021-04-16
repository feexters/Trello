import styled from "styled-components";
import React, { useEffect, useRef } from 'react'
import { InputChange } from "../ui";
import { useData } from "../Context";
import { CardData } from "../../lib/interfaces/interfaces";

interface CardTitleProps {
  card: CardData, 
  isChange: boolean,
  setIsChange(): void
}

const CardTitle: React.FC<CardTitleProps> = ({ card, isChange, setIsChange }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const { cards } = useData()

  const setTitle = (value: string): void => {
    if(value.trim()) {
      cards.changeTitle(card.id, value)
      setIsChange()
    }
  }

   /* Focus on the input */
   useEffect(() => {
    if (isChange) {
      inputRef.current!.focus();
      inputRef.current!.value = card.title 
    }
  }, [isChange, card.title]);

  return (
    <>
      {!isChange ? (
        <Title>{card.title}</Title>
      ) : (
        <InputChange
          placeholder="Имя карточки"
          setValue={setTitle}
          inputRef={inputRef}
          value={card.title}
        />
      )}
    </>
  );
};

export default CardTitle;

const Title = styled.div`
  font-size: 2.5rem;
`;

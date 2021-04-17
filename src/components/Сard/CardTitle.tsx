import styled from "styled-components";
import React, { useEffect, useRef, useState } from 'react'
import { Button, InputChange } from "../ui";
import { useData } from "../Context";
import { CardData } from "../../lib/interfaces";

const CardTitle: React.FC<{card: CardData}> = ({ card }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isChange, setIsChange] = useState(false)


  const { cards, user } = useData()

  const setTitle = (value: string): void => {
    if(value.trim()) {
      cards.changeTitle(card.id, value)
      setIsChange(!isChange)
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
        />
      )}

      {!isChange && card.author === user.name && (
        <Button
          title="Изменить"
          clickHandler={() => setIsChange(!isChange)}
        />
      )}
    </>
  );
};

export default CardTitle;

const Title = styled.div`
  font-size: 2.5rem;
`;

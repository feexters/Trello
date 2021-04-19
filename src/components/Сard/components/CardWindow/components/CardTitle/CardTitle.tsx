import styled from "styled-components";
import React, { useRef, useState } from 'react'
import { Button, InputChange } from "components/ui";
import { useData } from "components/Context";
import { CardData } from "lib/interfaces";

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

  return (
    <>
      {!isChange ? (
        <Title>{card.title}</Title>
      ) : (
        <InputChange
          placeholder="Имя карточки"
          setValue={setTitle}
          inputRef={inputRef}
          value = {card.title}
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

const Title = styled.div`
  font-size: 2.5rem;
`;

export default CardTitle;


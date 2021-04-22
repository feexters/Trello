import styled from "styled-components";
import React, { useState } from 'react'
import { Button, Input } from "components/ui";
import { CardData } from "lib/interfaces";
import { useAppDispatch, useAppSelector } from "lib/hooks/hooks";
import { setCardTitle } from "store";

const CardTitle: React.FC<{card: CardData}> = ({ card }) => {
  const [isChange, setIsChange] = useState(false)
  
  const dispatch = useAppDispatch()

  const user = useAppSelector(state => state.user)

  const onSubmit = (value: string) => {
    if(value.trim()) {
      dispatch(setCardTitle({id: card.id, value: value}))
      setIsChange(!isChange)
    }
  }

  return (
    <>
      {!isChange ? (
        <Title>{card.title}</Title>
      ) : (
        <Input
          placeholder={"Введите название карточки"}
          onSubmit={onSubmit}
          value={card.title}
        />
      )}

      {!isChange && card.author === user.name && (
        <Button clickHandler={() => setIsChange(!isChange)}>Изменить</Button>
      )}
    </>
  );
};

const Title = styled.div`
  font-size: 2.5rem;
`;

export default CardTitle;


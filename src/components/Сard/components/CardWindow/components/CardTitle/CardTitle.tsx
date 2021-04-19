import styled from "styled-components";
import React, { useState } from 'react'
import { Button, Input } from "components/ui";
import { useData } from "components/Context";
import { CardData } from "lib/interfaces";

const CardTitle: React.FC<{card: CardData}> = ({ card }) => {
  const [isChange, setIsChange] = useState(false)
  const [value, setValue] = useState(card.title)


  const { cards, user } = useData()

  const setTitle = () => {
    if(value.trim()) {
      cards.changeTitle(card.id, value)
      setIsChange(!isChange)
    }
  }

  const keyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
        blurHandler()
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
  }

  const blurHandler = () => {
    setTitle()
    setIsChange(!isChange);
  };

  return (
    <>
      {!isChange ? (
        <Title>{card.title}</Title>
      ) : (
        <Input
          placeholder={"Введите название карточки"}
          onKeyPress={keyPress}
          onBlur={blurHandler}
          onChange={onChange}
          value={value}
        />
      )}

      {!isChange && card.author === user.name && (
        <Button title="Изменить" clickHandler={() => setIsChange(!isChange)} />
      )}
    </>
  );
};

const Title = styled.div`
  font-size: 2.5rem;
`;

export default CardTitle;


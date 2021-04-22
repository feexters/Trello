import { useState } from "react";
import styled from "styled-components";
import { CardData } from "lib/interfaces";
import { Button, TextArea } from "components/ui";
import { setCardDescription } from "store";
import { useAppDispatch, useAppSelector } from "lib/hooks/hooks";

const CardDescription: React.FC<{card: CardData}> = ({ card }) => {
  const [isChange, setIsChange] = useState(false)
  const user = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()

  const onSubmit = (value: string) => {
    if (value.trim()) {
      dispatch(setCardDescription({id: card.id, value: value}))
      setIsChange(!isChange);
    }
  };

  return (
    <Wrapper>
      {!isChange && card.description && <Text>{card.description}</Text>}
      {!isChange && card.author === user.name && (
        <Button clickHandler={() => setIsChange(!isChange)}>Изменить</Button>
      )}
      {isChange && (
        <TextArea
          placeholder={"Введите описание карточки"}
          onSubmit={onSubmit}
          value={card.description}
        />
      )}
    </Wrapper>
  );
};

const Text = styled.p`
  padding: 5px;
  font-size: 1.3rem;
`

const Wrapper = styled.div`
  display: flex;
  & > * {
    margin-right: 10px;
  }
`;


export default CardDescription;
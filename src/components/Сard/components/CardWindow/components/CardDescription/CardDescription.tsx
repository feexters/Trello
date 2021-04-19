import { useState } from "react";
import styled from "styled-components";
import { CardData } from "lib/interfaces";
import { useData } from "components/Context";
import { Button, TextArea } from "components/ui";

const CardDescription: React.FC<{card: CardData}> = ({ card }) => {
  const [isChange, setIsChange] = useState(false)
  const [value, setValue] = useState(card.description)
  const { cards, user } = useData()

  const setDescription = () => {
    if (value.trim()) {
      cards.changeDescription(card.id, value);
      setIsChange(!isChange);
    }
    console.log(value);
  };

  const keyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      blurHandler();
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const blurHandler = () => {
    setDescription();
    setIsChange(!isChange);
  };

  return (
    <Wrapper>
      {!isChange && card.description && <Text>{card.description}</Text>}
      {!isChange && card.author === user.name && (
        <Button title="Изменить" clickHandler={() => setIsChange(!isChange)} />
      )}
      {isChange && (
        <TextArea
          placeholder={"Введите название карточки"}
          onKeyPress={keyPress}
          onBlur={blurHandler}
          onChange={onChange}
          value={value}
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
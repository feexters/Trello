import React, { useState } from "react";
import styled from "styled-components";
import { CardPreview } from "components/Сard";
import { ColumnData, CardData } from 'lib/interfaces'
import { useData } from "components/Context";
import { Button, Input } from "components/ui";
import { getId, getCardsById } from "lib/utils";
import ColumnTitle from "./components/ColumnTitle/ColumnTitle";

const Column: React.FC<{ column: ColumnData }> = ({ column }) => {
  const [isVisibleInput, setIsVisibleInput] = useState(false);
  const [inputValue, setInputValue] = useState('')

  const { cards, user } = useData()

  const addCard = () => {
    if (inputValue.trim()) {

      const newCard: CardData = {
        id: getId(),
        title: inputValue,
        author: user.name!,
        description: "",
        columnId: column.id
      }

      cards.add(newCard)
    }
  }

  const keyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
        blurHandler()
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value)
  }

  const blurHandler = () => {
    addCard()
    setInputValue('')
    setIsVisibleInput(!isVisibleInput);
  };

  return (
    <Wrapper>
      <ColumnTitle column={column} />
      {getCardsById(column.id, cards.list).map((card) => {
        return (
          <CardPreview card={card} column={column} key={card.id}></CardPreview>
        );
      })}

      <InputWrapper>
        {!isVisibleInput ? (
          <Button
            title={"+ Добавить еще одну карточку"}
            clickHandler={() => setIsVisibleInput(!isVisibleInput)}
          ></Button>
        ) : (
          <>
            <Input
              placeholder={"Введите название карточки"}
              onKeyPress={keyPress}
              onBlur={blurHandler}
              onChange={onChange}
              value={inputValue}
            />
            <ButtonWrapper>
              <Button
                title={"Сохранить"}
                clickHandler={() => setIsVisibleInput(!isVisibleInput)}
                success
              ></Button>
            </ButtonWrapper>
          </>
        )}
      </InputWrapper>
      {/* <InputAdd
        setValue={(value: string) => addCard(value)}
        placeholder="Введите название карточки"
        buttons={{ title: "+ Добавить еще одну карточку" }}
      ></InputAdd> */}
    </Wrapper>
  );
};

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


const InputWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  
  & > * {
    margin: 5px
  }
`

const ButtonWrapper = styled.div`
  & > * {
    margin-right: 10px;
  }
`

export default Column

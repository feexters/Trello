import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { CardPreview } from "components/Сard";
import { ColumnData, CardData } from "lib/interfaces";
import { Button, Input } from "components/ui";
import { getId } from "lib/utils";
import ColumnTitle from "./components/ColumnTitle/ColumnTitle";
import { addCard } from "store";
import { useAppDispatch, useAppSelector } from "lib/hooks/hooks";
import { Field, Form } from "react-final-form";

const Column: React.FC<{ column: ColumnData }> = ({ column }) => {
  const [isVisibleInput, setIsVisibleInput] = useState(false);

  const dispatch = useAppDispatch();

  const { cards, user } = useAppSelector((state) => state);

  const onSubmit = (value: string) => {
    if (value.trim()) {
      const newCard: CardData = {
        id: getId(),
        title: value,
        author: user.name!,
        description: "",
        columnId: column.id,
      };

      dispatch(addCard(newCard));
    }
    setIsVisibleInput(!isVisibleInput);
  };

  const cardsList = useMemo(
    () => cards.list.filter((elem) => elem.columnId === column.id),
    [cards.list, column.id]
  );

  return (
    <Wrapper>
      <ColumnTitle column={column} />
      {cardsList.map((card) => {
        return (
          <CardPreview card={card} column={column} key={card.id}></CardPreview>
        );
      })}

      <InputWrapper>
        {!isVisibleInput ? (
          <Button clickHandler={() => setIsVisibleInput(!isVisibleInput)}>
            + Добавить еще одну карточку
          </Button>
        ) : (
          <>
            <Form
              onSubmit={(value) => {
                onSubmit(value.value || "");
              }}
              initialValues={{ value: '' }}
              render={({ handleSubmit, form }) => (
                <form onSubmit={handleSubmit}>
                  <Field
                    name="value"
                    placeholder={"Введите название карточки"}
                    onBlur={() => form.submit()}
                    component={Input}
                    autoFocus
                  />
                  <ButtonWrapper>
                    <Button
                      type="submit"
                      isSuccessTheme
                    >
                      Добавить
                    </Button>
                  </ButtonWrapper>
                </form>
              )}
            />
          </>
        )}
      </InputWrapper>
    </Wrapper>
  );
};

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
    margin: 5px;
  }
`;

const ButtonWrapper = styled.div`
  & > * {
    margin-right: 10px;
  }
`;

export default Column;

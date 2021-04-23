import { useState } from "react";
import styled from "styled-components";
import { CardData } from "lib/interfaces";
import { Button, TextArea } from "components/ui";
import { setCardDescription } from "store";
import { useAppDispatch, useAppSelector } from "lib/hooks/hooks";
import { Field, Form } from "react-final-form";

const CardDescription: React.FC<{ card: CardData }> = ({ card }) => {
  const [isChange, setIsChange] = useState(false);
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const onSubmit = (value: string) => {
    if (value.trim()) {
      dispatch(setCardDescription({ id: card.id, value: value }));
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
        <Form
          onSubmit={(value) => {
            onSubmit(value.value || "");
            value.value = "";
          }}
          initialValues={{ value: card.description }}
          render={({ handleSubmit, form }) => (
            <DescriptionForm onSubmit={handleSubmit}>
              <Field
                name="value"
                placeholder={"Введите комментарий"}
                onBlur={() => form.submit()}
                component={TextArea}
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
            </DescriptionForm>
          )}
        />
      )}
    </Wrapper>
  );
};

const Text = styled.pre`
  padding: 5px;
  font-size: 1.3rem;
`;

const DescriptionForm = styled.form`
  width: 100%
` 

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > * {
    margin-right: 10px;
  }
`;

const ButtonWrapper = styled.div`
  & > * {
    margin-right: 10px;
  }
`;

export default CardDescription;

import React, { useRef, useState } from "react";
import styled from "styled-components";
import { CardProps } from "../interfaces";
import Button from "./Button";
import InputForm from "./InputForm";

const StyledDescription = styled.div`
  font-size: 1.5rem;
`;

const StyledDescriptWrap = styled.div`
  display: flex;
  & > * {
    margin-right: 10px;
  }
`;

const CardDescription: React.FC<CardProps> = ({ card }) => {
  const [change, setChange] = useState<boolean>(false);
  const inputDescrip = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState(card.description);
  card.description = value;

  /* Press Enter */
  const keyHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      setValue(inputDescrip.current!.value);
    }
  };

  return (
    <StyledDescriptWrap>
      {change ? (
        <>
          <InputForm
            keyPress={keyHandler}
            inputRef={inputDescrip}
            placeholder="Введите название карточки"
          />
          <Button
            title={"Сохранить"}
            clickHandler={() => {
              setChange(!change);
              setValue(inputDescrip.current!.value);
            }}
          />
        </>
      ) : (
        <>
          <StyledDescription>{card.description}</StyledDescription>
          <Button title={"Изменить"} clickHandler={() => setChange(!change)} />
        </>
      )}
    </StyledDescriptWrap>
  );
};

export default CardDescription;

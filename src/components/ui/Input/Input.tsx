import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { InputSettings } from '../../../lib/types/types';
import { InputForm, Button } from '../index';

const Input: React.FC<InputSettings> = ({ setValue, placeholder, buttons }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);


  const [isVisibleInput, setIsVisibleInput] = useState<boolean>(false);
  
  const onClose = (isSave: boolean) => {
    if(isSave) {
      setValue(inputRef.current!.value);
      setIsVisibleInput(!isVisibleInput);
    } else {
      inputRef.current!.value = ''
      setIsVisibleInput(!isVisibleInput)
    }
  }
  /* Press Enter */
  const keyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      setValue(inputRef.current!.value);
      setIsVisibleInput(!isVisibleInput);
    }
  };

  /* Input is out of focus */
  const blurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    if (closeRef.current! === event.relatedTarget) {
      onClose(false)
    } else {
      onClose(true)
    }
  };

  /* Focus on the input */
  useEffect(() => {
    if (isVisibleInput) {
      inputRef.current!.focus();
    }
  }, [isVisibleInput]);

  return (
    <InputWrapper>
      {!isVisibleInput ? (
        /* Open input area */
        <Button
          title={buttons.title}
          clickHandler={() => setIsVisibleInput(!isVisibleInput)}
        ></Button>
      ) : (
        /* Creating a new card */
        <>
          <InputForm
            keyPress={keyPress}
            blurHandler={blurHandler}
            inputRef={inputRef}
            placeholder={placeholder}
          />
          <ButtonWrapper>
            <Button
              title={"Сохранить"}
              clickHandler={() => setIsVisibleInput(!isVisibleInput)}
              success
            ></Button>
            <Button
              title={"X"}
              btnRef={closeRef}
              clickHandler={() => {}}
            ></Button>
          </ButtonWrapper>
        </>
      )}
    </InputWrapper>
  );
}

export default Input;

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

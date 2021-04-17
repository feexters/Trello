import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { InputSettings } from '../../../lib/types';
import { Input, Button } from '../index';

interface InputAddProps {
  setValue(value: string): void,
  placeholder: string,
  buttons: {
      title: string
  }
}

const InputAdd: React.FC<InputAddProps> = ({ setValue, placeholder, buttons }) => {
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

  const inputSettings: InputSettings = {
    onKeyPress: keyPress,
    onBlur: blurHandler,
    ref: inputRef,
    placeholder: placeholder
  }

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
          <Input settings={inputSettings} />
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

export default InputAdd;

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

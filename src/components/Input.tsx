import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { InputSettings } from '../types';
import Button from './Button';
import InputForm from './InputForm';

const StyledInput = styled.div`
  width: 100%;
  max-width: 400px;
  
  & > * {
    margin: 5px
  }
`

const StyledButtonWrap = styled.div`
  & > * {
    margin-right: 10px;
  }
`

const Input: React.FC<InputSettings> = ({ setValue, placeholder, buttons }) => {
  // Ref for input
  const inputRef = useRef<HTMLInputElement>(null);
  // Open or close input
  const [input, setInput] = useState<boolean>(true);
  
  /* Press Enter */
  const keyPress = (event: React.KeyboardEvent) => {
    // Add new value, if user press Enter
    if (event.key === "Enter") {
      setValue(inputRef.current!.value);
      // Close input
      setInput(!input);
    }
  };

  /* Input is out of focus */
  const blurHandler = () => {
    // Add card
    setValue(inputRef.current!.value);
    // Close input
    setInput(!input);
  };

  /* Focus on the input */
  useEffect(() => {
    if (!input) {
      inputRef.current!.focus();
    }
  }, [input]);

  return (
    <StyledInput>
      {/* Create cards */}
      {input ? (
        /* Open input area */
        <Button
          title={buttons.title}
          clickHandler={() => setInput(!input)}
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
          <StyledButtonWrap>
            <Button
              title={"Сохранить"}
              clickHandler={() => setInput(!input)}
              success
            ></Button>
            <Button
              title={"X"}
              clickHandler={() => setInput(!input)}
            ></Button>
          </StyledButtonWrap>
        </>
      )}
    </StyledInput>
  );
}

export default Input;

import React from 'react';
import styled from 'styled-components';
import { Button } from '..';

interface InputChangeProps {
    placeholder: string, 
    setValue(value: string): void,
    inputRef: React.RefObject<HTMLInputElement>,
}

const InputChange: React.FC<InputChangeProps> = ({placeholder, setValue, inputRef}) => {
    /* Press Enter */
    const keyPress = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            setValue(inputRef.current!.value);
        }
    };

    /* Input is out of focus */
    const blurHandler = () => {
        setValue(inputRef.current!.value);
    };

    const clickHandler = () => {
        setValue(inputRef.current!.value)
    }
      
    return (
      <Wrapper>
        <StyledInput
          placeholder={placeholder}
          onKeyPress={keyPress}
          onBlur={blurHandler}
          ref={inputRef}
        />
        <Button title="Сохранить" clickHandler={clickHandler} success/>
      </Wrapper>
    );
}

export default InputChange;

const Wrapper = styled.div`
`

const StyledInput = styled.input`
    width: 100%;
    padding: 5px 10px;
    background-color: white;
    border-radius: 5px;
    align-self: center;
    border: 1px solid black;
    font-size: 1.5rem;

    &:focus {
        outline: none
    }
`
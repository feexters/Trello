import React from 'react';
import styled from 'styled-components';

interface InputProps {
    placeholder: string,
    keyPress(event: React.KeyboardEvent): void,
    blurHandler?(event: React.FocusEvent<HTMLInputElement>): void
    inputRef: React.RefObject<HTMLInputElement>,
    changeHandler?(): void
}

const InputForm: React.FC<InputProps> = ({placeholder, keyPress, blurHandler, inputRef, changeHandler = () => {}}) => {
    return (
        <StyledInput 
            onKeyPress={keyPress}
            onBlur={blurHandler}
            ref={inputRef}
            type="text"
            placeholder={placeholder}
            onChange={changeHandler}>
        </StyledInput>
    );
}

export default InputForm;

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
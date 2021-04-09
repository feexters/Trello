import React from 'react';
import styled from 'styled-components';


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
interface InputProps {
    placeholder: string,
    keyPress(event: React.KeyboardEvent): void,
    blurHandler?(): void
    inputRef: React.RefObject<HTMLInputElement>
}

const InputForm: React.FC<InputProps> = ({placeholder, keyPress, blurHandler, inputRef}) => {
    return (
        <StyledInput 
            onKeyPress={keyPress}
            onBlur={blurHandler}
            ref={inputRef}
            type="text"
            placeholder={placeholder}>
        </StyledInput>
    );
}

export default InputForm;

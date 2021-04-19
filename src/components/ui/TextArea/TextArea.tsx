import React from 'react';
import styled from 'styled-components';

interface TextAreaSettings {
    placeholder: string,
    onKeyPress(event: React.KeyboardEvent): void,
    onBlur?(): void,
    onChange?(event: React.ChangeEvent<HTMLTextAreaElement>): void,
    value: string
} 

const TextArea: React.FC<TextAreaSettings> = ({placeholder, onKeyPress, onBlur, onChange, value}) => {
    return (
      <StyledTextArea
        placeholder={placeholder}
        onKeyPress={onKeyPress}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        autoFocus
      />
    );
}

const StyledTextArea = styled.textarea`
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

export default TextArea;

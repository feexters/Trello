import React from 'react';
import { Field, Form } from 'react-final-form';
import styled from 'styled-components';

interface InputSettings {
    placeholder: string,
    onKeyPress(event: React.KeyboardEvent): void,
    onBlur?(): void,
    onChange?(event: React.ChangeEvent<HTMLInputElement>): void,
    value: string
} 

const Input: React.FC<InputSettings> = ({placeholder, onKeyPress, onBlur, onChange, value}) => {
    const initialValues = { value: value };

    return (
      <StyledInput>
        <Form
          onSubmit={() => {}}
          initialValues={initialValues}
          render={() => (
            <Field
              name="value"
              component="input"
              placeholder={placeholder}
              onKeyPress={onKeyPress}
              onBlur={onBlur}
              onChange={onChange}
              autoFocus
            />
          )}
        />
      </StyledInput>
    );
}

const StyledInput = styled.div`
  width: 100%;
  
  input {
    width: 100%;
    padding: 5px 10px;
    background-color: white;
    border-radius: 5px;
    align-self: center;
    border: 1px solid black;
    font-size: 1.5rem;

    &:focus {
      outline: none;
    }
  }
`;

export default Input;
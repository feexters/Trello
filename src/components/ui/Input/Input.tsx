import React from 'react';
import { Field, Form } from 'react-final-form';
import styled from 'styled-components';

interface InputSettings {
    placeholder: string,
    onSubmit(value: string): void,
    value?: string
} 

const Input: React.FC<InputSettings> = ({placeholder, value, onSubmit}) => {

    return (
      <StyledInput>
        <Form
          onSubmit={(value) => {
            onSubmit(value.value || '')
          }}
          initialValues={{value: value}}
          render={({ handleSubmit, form }) => (
            <form onSubmit={handleSubmit}>
              <Field
                name="value"
                component="input"
                placeholder={placeholder}
                onBlur={() => form.submit()}
                autoFocus
              />
            </form>
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
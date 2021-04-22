import React from 'react';
import { Field, Form } from 'react-final-form';
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
      <StyledTextArea>
        <Form
          onSubmit={() => {}}
          initialValues={{ value: value }}
          render={() => (
            <Field
              name="value"
              component="textarea"
              placeholder={placeholder}
              onKeyPress={onKeyPress}
              onBlur={onBlur}
              onChange={onChange}
              autoFocus
            />
          )}
        />
      </StyledTextArea>
    );
}

const StyledTextArea = styled.div`
  textarea {
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

export default TextArea;

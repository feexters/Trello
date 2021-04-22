import React from 'react';
import { Field, Form } from 'react-final-form';
import styled from 'styled-components';

interface TextAreaSettings {
    placeholder: string,
    onSubmit(value: string): void
    value: string
} 

const TextArea: React.FC<TextAreaSettings> = ({placeholder, onSubmit , value}) => {
    return (
      <StyledTextArea>
        <Form
          onSubmit={(value) => {
            onSubmit(value.value || '')
            value.value = ''
          }}
          initialValues={{ value: value }}
          render={({ handleSubmit, form }) => (
            <form onSubmit={handleSubmit}>
              <Field
                name="value"
                component="textarea"
                placeholder={placeholder}
                onKeyPress={(event: React.KeyboardEvent) => {
                  if (event.key === 'Enter') {
                    form.submit()
                  }
                }}
                onBlur={() => form.submit()}
                autoFocus
              />
            </form>
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

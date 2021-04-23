import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import styled from 'styled-components';

type TextAreaProps = FieldRenderProps<string, any>;

const TextArea: React.FC<TextAreaProps> = ({ input, meta, ...rest }: TextAreaProps) => {
    return (
      <StyledTextArea {...input} {...rest} />
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
    outline: none;
  }
`;

export default TextArea;

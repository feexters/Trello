import React from 'react';
import styled from 'styled-components';
import { InputSettings } from '../../../lib/types';


const Input: React.FC<{settings: InputSettings}> = ({settings}) => {
    return (
        <StyledInput 
            {...settings}>
        </StyledInput>
    );
}

export default Input;

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
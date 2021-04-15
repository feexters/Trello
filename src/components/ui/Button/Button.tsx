import React from 'react';
import styled from 'styled-components'

type ButtonProps = {
    title: string, 
    clickHandler(): void,
    success?: boolean
}

const Button: React.FC<ButtonProps> = ({ title, clickHandler, success=  false }) => {
    
    return (
       <StyledButton onClick={clickHandler} success={success}>{title}</StyledButton> 
    );
}

export default Button;

const StyledButton = styled.button<{success: boolean}>`
    border: none;
    border-radius: 5px;
    padding: 5px;
    font-size: 1.2rem;

    color: ${({ success }) => success ? 'white' : 'black'};
    background-color: ${({ success }) => success ? 'rgb(97, 189, 79)' : 'rgb(230, 230, 230)'};
    cursor: pointer;

    &:hover {
        /* background-color: rgb(200, 200, 200); */
        background-color: ${({ success }) => success ? 'rgb(47, 177, 43)' : 'rgb(200, 200, 200)'};
    }

    &:focus {
        outline: none
    }
`

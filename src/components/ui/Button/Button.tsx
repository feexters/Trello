import React from 'react';
import styled from 'styled-components'

type ButtonProps = { 
    clickHandler(): void,
    isSuccessTheme?: boolean
}

const Button: React.FC<ButtonProps> = ({ clickHandler, isSuccessTheme = false, children}) => {
    
    return (
       <StyledButton onClick={clickHandler} isSuccessTheme={isSuccessTheme}>{children}</StyledButton> 
    );
}

const StyledButton = styled.button<{isSuccessTheme: boolean}>`
    border: none;
    border-radius: 5px;
    padding: 5px;
    font-size: 1.2rem;
    margin: 2px 0;
    

    color: ${({ isSuccessTheme }) => isSuccessTheme ? 'white' : 'black'};
    background-color: ${({ isSuccessTheme }) => isSuccessTheme ? 'rgb(97, 189, 79)' : 'rgb(210, 210, 210)'};
    cursor: pointer;

    &:hover {
        background-color: ${({ isSuccessTheme }) => isSuccessTheme ? 'rgb(47, 177, 43)' : 'rgb(200, 200, 200)'};
    }

    &:focus {
        outline: none
    }
`

export default Button;
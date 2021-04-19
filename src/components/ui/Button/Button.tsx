import React from 'react';
import styled from 'styled-components'

type ButtonProps = { 
    clickHandler(): void,
    isSuccessTheme?: boolean
    btnRef?: React.RefObject<HTMLButtonElement>
}

const Button: React.FC<ButtonProps> = ({ clickHandler, isSuccessTheme = false, btnRef , children}) => {
    
    return (
       <StyledButton onClick={clickHandler} isSuccessTheme={isSuccessTheme} ref={btnRef}>{children}</StyledButton> 
    );
}

export default Button;

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
        /* background-color: rgb(200, 200, 200); */
        background-color: ${({ isSuccessTheme }) => isSuccessTheme ? 'rgb(47, 177, 43)' : 'rgb(200, 200, 200)'};
    }

    &:focus {
        outline: none
    }
`

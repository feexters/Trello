import React from 'react';
import styled from 'styled-components'

const StyledButton = styled.button`
    border: none;
    border-radius: 5px;
    padding: 5px;
    font-size: 1.2rem;

    
    background-color:rgb(230, 230, 230);
    cursor: pointer;

    &:hover {
        background-color: rgb(200, 200, 200);
    }

    &:focus {
        outline: none
    }
`

interface ButtonProps {
    title: string, 
    clickHandler(): void,
}

const Button: React.FC<ButtonProps> = ({title, clickHandler}) => {
    
    return (
       <StyledButton onClick={clickHandler}>{title}</StyledButton> 
    );
}

export default Button;

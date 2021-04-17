import React from 'react';
import styled from 'styled-components'

type ButtonProps = {
    title: string, 
    clickHandler(): void,
    success?: boolean
    btnRef?: React.RefObject<HTMLButtonElement>
}

const Button: React.FC<ButtonProps> = ({ title, clickHandler, success = false, btnRef }) => {
    
    return (
       <StyledButton onClick={clickHandler} success={success} ref={btnRef}>{title}</StyledButton> 
    );
}

export default Button;

const StyledButton = styled.button<{success: boolean}>`
    border: none;
    border-radius: 5px;
    padding: 5px;
    font-size: 1.2rem;
    margin-top: 5px;

    color: ${({ success }) => success ? 'white' : 'black'};
    background-color: ${({ success }) => success ? 'rgb(97, 189, 79)' : 'rgb(210, 210, 210)'};
    cursor: pointer;

    &:hover {
        /* background-color: rgb(200, 200, 200); */
        background-color: ${({ success }) => success ? 'rgb(47, 177, 43)' : 'rgb(200, 200, 200)'};
    }

    &:focus {
        outline: none
    }
`

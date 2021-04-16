import React from 'react';
import styled from 'styled-components';

interface ChangePanelProps {
    onDelete(): void
}

const ChangePanel: React.FC<ChangePanelProps> = ({onDelete}) => {
    return (
        <Wrapper>
            <StyledButton>Изменить</StyledButton>
            <StyledButton onClick={onDelete}>Удалить</StyledButton>
        </Wrapper>
    );
}

export default ChangePanel;

const Wrapper = styled.div`
`
const StyledButton = styled.button`
    margin-right: 10px;
    padding: 5px;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: underline;
    
    &:hover {
        background-color: rgba(0, 0, 0, 0.2);
    }
`

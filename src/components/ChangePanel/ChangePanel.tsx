import React from 'react';
import styled from 'styled-components';

interface ChangePanelProps {
    onDelete(): void,
    onChange?(): void
}

const ChangePanel: React.FC<ChangePanelProps> = ({onDelete, onChange}) => {
    return (
        <Wrapper>
            {onChange && <StyledButton onClick={onChange}>Изменить</StyledButton>}
            <StyledButton onClick={onDelete}>Удалить</StyledButton>
        </Wrapper>
    );
}

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

export default ChangePanel;
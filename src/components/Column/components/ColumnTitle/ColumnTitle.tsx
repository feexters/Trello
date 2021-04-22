import React, { useState } from 'react';
import styled from 'styled-components';
import { ColumnData } from 'lib/interfaces';
import { Button, Input } from 'components/ui';
import { setColumnTitle } from 'store';
import { useAppDispatch } from 'lib/hooks/hooks';

const ColumnTitle: React.FC<{column: ColumnData}> = ({ column }) => {
  const [isChange, setIsChange] = useState(false);
  const [value, setValue] = useState(column.title)

  const dispatch = useAppDispatch()

  const setTitle = () => {
    if (value.trim()) {
      dispatch(setColumnTitle({id: column.id, title: value}))
      setIsChange(!isChange);
    }
  };

  const keyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
        blurHandler()
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
  }

  const blurHandler = () => {
    setTitle()
    setIsChange(!isChange);
  };

  return (
    <>
      {!isChange ? (
        <Title>{column.title}</Title>
      ) : (
        <Input
          placeholder={"Введите название карточки"}
          onKeyPress={keyPress}
          onBlur={blurHandler}
          onChange={onChange}
          value={value}
        />
      )}
      {!isChange && (
        <Button clickHandler={() => setIsChange(!isChange)}>Изменить</Button>
      )}
    </>
  );
}

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

export default ColumnTitle
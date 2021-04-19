import React, { useState } from 'react';
import styled from 'styled-components';
import { ColumnData } from 'lib/interfaces';
import { useData } from 'components/Context';
import { Button, Input } from 'components/ui';

const ColumnTitle: React.FC<{column: ColumnData}> = ({ column }) => {
  const [isChange, setIsChange] = useState(false);
  const [value, setValue] = useState(column.title)

  const { columns } = useData();

  const setTitle = () => {
    if (value.trim()) {
      columns.changeTitle(column.id, value);
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
        <Button title="Изменить" clickHandler={() => setIsChange(!isChange)} />
      )}
    </>
  );
}

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

export default ColumnTitle
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ColumnData } from '../../lib/interfaces';
import { useData } from '../Context';
import { Button, InputChange } from '../ui';

const ColumnTitle: React.FC<{column: ColumnData}> = ({ column }) => {
  const [isChange, setIsChange] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null)

  const { columns } = useData();

  const setTitle = (value: string): void => {
    if (value.trim()) {
      columns.changeTitle(column.id, value);
      setIsChange(!isChange);
    }
  };

  /* Focus on the input */
  useEffect(() => {
    if (isChange) {
      inputRef.current!.focus();
      inputRef.current!.value = column.title;
    }
  }, [isChange, column.title]);

  return (
    <>
      {!isChange ? (
        <Title>{column.title}</Title>
      ) : (
        <InputChange
          placeholder="Имя карточки"
          setValue={setTitle}
          inputRef={inputRef}
        />
      )}
      {!isChange && (
        <Button title="Изменить" clickHandler={() => setIsChange(!isChange)} />
      )}
    </>
  );
}

export default ColumnTitle;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;
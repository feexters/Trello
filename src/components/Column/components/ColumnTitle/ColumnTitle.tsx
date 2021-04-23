import React, { useState } from "react";
import styled from "styled-components";
import { ColumnData } from "lib/interfaces";
import { Button, Input } from "components/ui";
import { setColumnTitle } from "store";
import { useAppDispatch } from "lib/hooks/hooks";
import { Field, Form } from "react-final-form";

const ColumnTitle: React.FC<{ column: ColumnData }> = ({ column }) => {
  const [isChange, setIsChange] = useState(false);

  const dispatch = useAppDispatch();

  const onSubmit = (value: string) => {
    if (value.trim()) {
      dispatch(setColumnTitle({ id: column.id, title: value }));
      setIsChange(!isChange);
    }
  };

  return (
    <>
      {!isChange ? (
        <Title>{column.title}</Title>
      ) : (
        <Form
          onSubmit={(value) => {
            onSubmit(value.value || "");
          }}
          initialValues={{ value: column.title }}
          render={({ handleSubmit, form }) => (
            <form onSubmit={handleSubmit}>
              <Field
                name="value"
                placeholder={"Введите название колонки"}
                onBlur={() => form.submit()}
                component={Input}
                autoFocus
              />
            </form>
          )}
        />
      )}
      {!isChange && (
        <Button clickHandler={() => setIsChange(!isChange)}>Изменить</Button>
      )}
    </>
  );
};

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

export default ColumnTitle;

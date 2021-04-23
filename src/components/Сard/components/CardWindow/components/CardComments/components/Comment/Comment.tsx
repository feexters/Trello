import React, { useState } from "react";
import { CommentData } from "lib/interfaces";
import styled from "styled-components";
import { ChangePanel } from "components/ChangePanel";
import { Button, TextArea } from "components/ui";
import { useAppDispatch, useAppSelector } from "lib/hooks/hooks";
import { deleteComment, setCommentValue } from "store";
import { Field, Form } from "react-final-form";

const Comment: React.FC<{ comment: CommentData }> = ({ comment }) => {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user);
  const [isChange, setIsChange] = useState(false);

  const onSubmit = (value: string): void => {
    if (value.trim()) {
      dispatch(setCommentValue({ id: comment.id, value: value }));
      setIsChange(!isChange);
    }
  };

  return (
    <Wrapper>
      {!isChange ? (
        <>
          <Author>{comment.author}:</Author>
          <Value>{comment.value}</Value>
        </>
      ) : (
        isChange && (
          <Form
            onSubmit={(value) => {
              onSubmit(value.value || "");
              value.value = "";
            }}
            initialValues={{ value: comment.value }}
            render={({ handleSubmit, form }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name="value"
                  placeholder={"Введите комментарий"}
                  onBlur={() => form.submit()}
                  component={TextArea}
                  autoFocus
                />
                <ButtonWrapper>
                  <Button
                    type="submit"
                    isSuccessTheme
                  >
                    Сохранить
                  </Button>
                </ButtonWrapper>
              </form>
            )}
          />
        )
      )}
      {!isChange && comment.author === user.name && (
        <ChangePanel
          onDelete={() => dispatch(deleteComment(comment.id))}
          onChange={() => setIsChange(!isChange)}
        ></ChangePanel>
      )}
    </Wrapper>
  );
};

export default Comment;

const Wrapper = styled.div`
  width: 50%;
  padding: 5px 10px;
  background-color: white;
  border-bottom: 2px solid grey;
  align-self: center;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  & > * {
    margin-right: 10px;
  }
`;

const Value = styled.pre`
  font-size: 1.5rem;
`;

const Author = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
`;

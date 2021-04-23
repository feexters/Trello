import { Comment } from "./components/Comment";
import { Button, TextArea } from "components/ui";
import { CardData, CommentData } from "lib/interfaces";
import { getId } from "lib/utils";
import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "lib/hooks/hooks";
import { addComment } from "store";
import { Field, Form } from "react-final-form";

const CardComments: React.FC<{ card: CardData }> = ({ card }) => {
  const { comments, user } = useAppSelector((state) => state);
  const [isVisibleInput, setIsVisibleInput] = useState(false);
  const dispatch = useAppDispatch();

  const onSubmit = (value: string) => {
    if (value.trim()) {
      const newComment: CommentData = {
        id: getId(),
        value: value,
        author: user.name!,
        cardId: card.id,
      };

      dispatch(addComment(newComment));
    }
  };

  const commentsList = useMemo(
    () => comments.list.filter((elem) => elem.cardId === card.id),
    [comments.list, card.id]
  );

  return (
    <div>
      {isVisibleInput ? (
        <Form
          onSubmit={(value) => {
            onSubmit(value.value || "");
            value.value = "";
          }}
          initialValues={{ value: '' }}
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
                  Добавить
                </Button>
              </ButtonWrapper>
            </form>
          )}
        />
      ) : (
        <Button clickHandler={() => setIsVisibleInput(!isVisibleInput)}>
          Оставить комментарий
        </Button>
      )}

      <CommentList>
        <Text>Комментарии</Text>
        {commentsList.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </CommentList>
    </div>
  );
};

const CommentList = styled.div`
  margin: 10px;
`;

const Text = styled.pre`
  font-size: 1.4rem;
  font-weight: 400;
  color: rgb(102, 102, 102);
`;


const ButtonWrapper = styled.div`
  & > * {
    margin-right: 10px;
  }
`;

export default CardComments;

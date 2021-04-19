import { Comment } from "components/Comment";
import { useData } from "components/Context";
import { Button, TextArea } from "components/ui";
import { CardData, CommentData } from "lib/interfaces";
import { getCommentsById, getId } from "lib/utils";
import React, { useState } from "react";
import styled from "styled-components";

const CardComments: React.FC<{ card: CardData }> = ({ card }) => {
  const { comments, user } = useData();
  const [inputValue, setInputValue] = useState("");
  const [isVisibleInput, setIsVisibleInput] = useState(false);

  const addComment = () => {
    if (inputValue.trim()) {
      const newComment: CommentData = {
        id: getId(),
        value: inputValue,
        author: user.name!,
        cardId: card.id,
      };

      comments.add(newComment);
    }
  };

  const keyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      blurHandler();
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const blurHandler = () => {
    addComment();
    setIsVisibleInput(!isVisibleInput)
    setInputValue("");
  };

  return (
    <div>
      {isVisibleInput ? (
        <TextArea
          placeholder={"Введите комментарий"}
          onKeyPress={keyPress}
          onBlur={blurHandler}
          onChange={onChange}
          value={inputValue}
        />
      ) : (
        <Button
          title="Оставить комментарий"
          clickHandler={() => setIsVisibleInput(!isVisibleInput)}
        />
      )}

      <CommentList>
        <Text>Комментарии</Text>
        {/* Show comments */}
        {getCommentsById(card.id, comments.list).map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </CommentList>
    </div>
  );
};

const CommentList = styled.div`
  margin: 10px;
`;

const Text = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  color: rgb(102, 102, 102);
`;

export default CardComments;

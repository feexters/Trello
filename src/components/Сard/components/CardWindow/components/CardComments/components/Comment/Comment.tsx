import React, { useState } from "react";
import { CommentData } from "lib/interfaces";
import styled from "styled-components";
import { useData } from "components/Context";
import { ChangePanel } from "components/ChangePanel";
import { TextArea } from "components/ui";

const Comment: React.FC<{ comment: CommentData }> = ({ comment }) => {
  const [value, setValue] = useState(comment.value)

  const { user, comments } = useData()
  const [isChange, setIsChange] = useState(false)

  const changeComment = () => {
    if (value.trim()) {
      comments.change(comment.id, value)
      setIsChange(!isChange)
    }
  }

  const keyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
        blurHandler()
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(event.target.value)
  }

  const blurHandler = () => {
    changeComment()
    setIsChange(!isChange);
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
          <TextArea
            placeholder={"Введите название карточки"}
            onKeyPress={keyPress}
            onBlur={blurHandler}
            onChange={onChange}
            value={value}
          />
        )
      )}
      {!isChange && comment.author === user.name && (
        <ChangePanel
          onDelete={() => comments.delete(comment.id)}
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

const Value = styled.div`
  font-size: 1.5rem;
`;

const Author = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
`;

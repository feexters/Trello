import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { CardDescription, CardTitle} from './components'
import { Comment, CommentInput } from 'components/Comment'
import { useData } from "components/Context";
import { CardData, ColumnData, CommentData } from "lib/interfaces"
import { getId, getCommentsById } from "lib/utils";

interface CardModalProps {
    card: CardData,
    column: ColumnData,
    close(): void
}

const CardWindow: React.FC<CardModalProps> = ({ card, column, close }) => {
  const { comments, user } = useData()
  const refWindow = useRef<HTMLDivElement>(null)

  const addComment = (value: string) =>  {
    if (value.trim()) {
      const newComment: CommentData = {
        id: getId(),
        value: value,
        author: user.name!,
        cardId: card.id
      }
      
      comments.add(newComment)
    }
  }

  const onClose = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if ((event.target as Element).classList.contains("overlay")) {
      close()
    }
  }

  const onKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
        close()
    }
  };

  useEffect(() => {
    refWindow.current!.focus()
  })

  return (
    <Wrapper
      className={"overlay"}
      onClick={onClose}
      onKeyDown={onKeyPress}
      tabIndex={-1}
      ref={refWindow}
    >
      <Card>
        <CardHeader>
          <div>
            <CardTitle card={card} />
            <Text>
              {" "}
              в колонке
              <ColumnTitle>{column.title}</ColumnTitle>
            </Text>
            <Author>Создал: {card.author}</Author>
          </div>

          <Close onClick={close}>X</Close>
        </CardHeader>

        <Block>
          <BlockTitle>Описание</BlockTitle>
          <CardDescription card={card} />
        </Block>

        <Block>
          <BlockTitle>Действия</BlockTitle>
          <CommentInput addComment={addComment} />

          <CommentList>
            <Text>Комментарии</Text>
            {/* Show comments */}
            {getCommentsById(card.id, comments.list).map((comment) => (
              <Comment comment={comment} key={comment.id} />
            ))}
          </CommentList>
        </Block>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  margin: 0;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
        outline: none
  }
`;

const Card = styled.div`
  width: 100%;
  max-width: 800px;
  min-height: 100px;
  padding: 10px 20px;
  background-color: white;
  border: 2px solid black;
  border-radius: 10px;
  position: relative;
  top: -10%;
`;

const Author = styled.div`
  font-size: 1.3rem;
  margin-top: 10px;
  text-decoration: underline;
`

const Block = styled.div`
  margin-bottom: 20px;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const BlockTitle = styled.div`
  font-size: 1.8rem;
`;

const Text = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  color: rgb(102, 102, 102);
`;

const ColumnTitle = styled.span`
  font-size: 1.7rem;
  text-decoration: underline;
  cursor: pointer;
`;

const CommentList = styled.div`
  margin: 10px;
`

const Close = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
`;

export default CardWindow;
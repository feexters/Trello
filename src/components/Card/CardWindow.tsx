import React from "react";
import styled from "styled-components";
import { CardDescription, CardTitle} from './index'
import { Comment, CommentInput } from '../Comment/index'
import { CardModalProps } from "../../types";
import { useData } from "../Context/DataContext";
import { CommentData } from "../../interfaces"

const CardWindow: React.FC<CardModalProps> = ({ card, column, close }) => {
  // Get comments list
  const { comments, user } = useData()
  // Comments id
  const id = card.commentsId

  // Add new comment 
  const addComment = (value: string) =>  {
    if (value.trim()) {
      // Create new comment
      const newComment: CommentData = {
        id: comments.list[id].length,
        value: value,
        author: user.name!
      }
      // Add new comment in list
      comments.change(id, newComment)
    }
  }

  return (
    <Wrapper>
      <Card>

        <CardHeader>
          <div>
            <CardTitle title={card.title} />
            <Text>
              в колонке <ColumnTitle>{column.title}</ColumnTitle>
            </Text>
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
            {comments.list[id].map((com) => (
              <Comment comment={com} key={com.id} />
            ))}
          </CommentList>
        </Block>
        
      </Card>
    </Wrapper>
  );
};

export default CardWindow;

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
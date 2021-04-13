import styled from "styled-components";
import { CardData } from "../interfaces";
import Input from "./Input";

const StyledDescriptWrap = styled.div`
  display: flex;
  & > * {
    margin-right: 10px;
  }
`;

const CardDescription: React.FC<{card: CardData}> = ({ card }) => {
  
  // Update description of card
  const addDescription = (value: string) => {
    card.description = value
  }

  return (
    <StyledDescriptWrap>
      <Input
        setValue={(value) => addDescription(value)}
        placeholder="Введите описание"
        buttons={{ title:"Изменить" }}
      />
    </StyledDescriptWrap>
  );
};

export default CardDescription;

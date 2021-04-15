import styled from "styled-components";
import { CardData } from "../../lib/interfaces/interfaces";
import { Input } from "../ui/index";

const CardDescription: React.FC<{card: CardData}> = ({ card }) => {
  
  // Update description of card
  const addDescription = (value: string) => {
    card.description = value
  }

  return (
    <Wrapper>
      <Input
        setValue={(value) => addDescription(value)}
        placeholder="Введите описание"
        buttons={{ title:"Изменить" }}
      />
    </Wrapper>
  );
};

export default CardDescription;

const Wrapper = styled.div`
  display: flex;
  & > * {
    margin-right: 10px;
  }
`;
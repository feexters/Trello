import { useRef, useState } from "react";
import styled from "styled-components";
import { CardData } from "lib/interfaces";
import { useData } from "components/Context";
import { Button, InputChange } from "components/ui";

const CardDescription: React.FC<{card: CardData}> = ({ card }) => {
  const [isChange, setIsChange] = useState(false)
  const { cards, user } = useData()
  const inputRef = useRef<HTMLInputElement>(null)

  // Update description of card
  const setDescription = (value: string): void => {
    if (value.trim()) {
      cards.changeDescription(card.id, value)
      setIsChange(!isChange)
    }
    console.log(value)
  }

    // /* Focus on the input */
    // useEffect(() => {
    //   if (isChange) {
    //     inputRef.current!.focus();
    //     inputRef.current!.value = card.description
    //   }
    // }, [isChange, card.description]);

  return (
    <Wrapper>
      {!isChange && card.description && <Text>{card.description}</Text>}
      {!isChange && card.author === user.name && (
          <Button title="Изменить" clickHandler={() => setIsChange(!isChange)} />
      )}
      {isChange && (
        <InputChange
          placeholder="Описание"
          setValue={setDescription}
          inputRef={inputRef}
          value={card.description}
        />
      )}
    </Wrapper>
  );
};

const Text = styled.div`
  padding: 5px;
  font-size: 1.3rem;
`

const Wrapper = styled.div`
  display: flex;
  & > * {
    margin-right: 10px;
  }
`;


export default CardDescription;
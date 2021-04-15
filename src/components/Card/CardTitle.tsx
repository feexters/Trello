import styled from "styled-components";

const CardTitle: React.FC<{ title: string }> = ({ title }) => {
  return <Title>{title}</Title>;
};

export default CardTitle;

const Title = styled.div`
  font-size: 2.5rem;
`;

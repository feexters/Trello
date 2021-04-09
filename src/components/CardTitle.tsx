import styled from "styled-components";

const StyledTitle = styled.div`
  font-size: 2.5rem;
`;

const CardTitle: React.FC<{ title: string }> = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>;
};

export default CardTitle;

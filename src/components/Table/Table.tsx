import React from "react";
import { Column } from "components/Column";
import styled from "styled-components";
import { useAppSelector } from "lib/hooks/hooks";

const Table: React.FC = () => {
  const columns = useAppSelector(state => state.columns);

  return (
      <Wrapper>
        <ColumnsList>
          {columns.list.map((column) => (
            <Column column={column} key={column.id} />
          ))}
        </ColumnsList>
      </Wrapper>
  );
};

export default Table;

/* Styles */
const Wrapper = styled.div`
  width: 100%;
`;

const ColumnsList = styled.div`
  display: grid;
  align-items: flex-start;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-column-gap: 5px;
  grid-row-gap: 10px;
`;

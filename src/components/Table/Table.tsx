import React from "react";
import { Column }from "../column/index";
import styled from "styled-components";
import { useData } from "../context/index";

const Table: React.FC = () => {
  /* Columns information */
  const { columns } = useData()

  return (
      <Wrapper>
        <ColumnsList>
          {/* Columns */}
          {columns.map((col) => (
            <Column column={col} key={col.id} />
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

import React, { useState } from "react";
import Column from "./Column";
import styled from "styled-components";
import { ColumnData } from "./../classes";

/* Styles */
const StyledTable = styled.div`
  width: 100%;
`;

const StyledColumnsList = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-column-gap: 5px;
  grid-row-gap: 10px;
`;

const Table: React.FC = () => {
  /* Columns information */
  const columns: Array<ColumnData> = JSON.parse(localStorage.getItem('columns')!)

  return (
    <StyledTable>
      <StyledColumnsList>
        {/* Columns */}
        {columns.map((col) => (
          <Column column={col} key={col.id} />
        ))}
      </StyledColumnsList>
    </StyledTable>
  );
};

export default Table;

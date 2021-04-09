import React from "react";
import Column from "./Column";
import styled from "styled-components";
import { ColumnInfo, CardInfo } from "./../classes";

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
  const columnsList = [
    new ColumnInfo(0, "TODO", []),
    new ColumnInfo(1, "In Progress", []),
    new ColumnInfo(2, "Testing", []),
    new ColumnInfo(3, "Done", []),
  ];

  /* Add new card */
  function addCard(title: string, columnId: number): void {
    if (title.trim()) {
      columnsList[columnId].cards.push(
        new CardInfo(columnsList[columnId].cards.length - 1, title, "", "", [])
      );
      console.log(columnsList);
    }
  }

  return (
    <StyledTable>
      <StyledColumnsList>
        {columnsList.map((col) => (
          <Column column={col} key={col.id} addCard={addCard} />
        ))}
      </StyledColumnsList>
    </StyledTable>
  );
};

export default Table;

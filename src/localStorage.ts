import { CardData, ColumnData, ColumnInfo, CommentData } from "./classes";

/* Columns information */
const columnsList = [
    new ColumnData(0, "TODO", 0),
    new ColumnData(1, "In Progress", 1),
    new ColumnData(2, "Testing", 2),
    new ColumnData(3, "Done", 3),
];

/* Cards information */
const cardsList: Array<Array<CardData>> = [[], [], [], []]

/* Comments information */
const commentsList: Array<CommentData> = []

localStorage.setItem('columns', JSON.stringify(columnsList))
localStorage.setItem('cards', JSON.stringify(cardsList))
localStorage.setItem('comments', JSON.stringify(commentsList))
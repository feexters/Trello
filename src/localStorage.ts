import { CardData, ColumnData, CommentData } from "./classes";

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
const commentsList: Array<Array<CommentData>> = []

if (!localStorage.getItem('columns')) localStorage.setItem('columns', JSON.stringify(columnsList))
if (!localStorage.getItem('cards')) localStorage.setItem('cards', JSON.stringify(cardsList))
if (!localStorage.getItem('comments')) localStorage.setItem('comments', JSON.stringify(commentsList))

// localStorage.setItem('columns', JSON.stringify(columnsList))
// localStorage.setItem('cards', JSON.stringify(cardsList))
// localStorage.setItem('comments', JSON.stringify(commentsList))
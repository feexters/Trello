import { ColumnData, CardData, CommentData } from "./interfaces";

/* Columns information */
const columnsList: Array<ColumnData> = [
    {id: 0, title: "TODO", cardsId: 0},
    {id: 1, title: "In Progress", cardsId: 1},
    {id: 2, title: "Testing", cardsId: 2},
    {id: 3, title: "Done", cardsId: 3}
];


/* Cards information */
const cardsList: Array<Array<CardData>> = [[], [], [], []]

/* Comments information */
const commentsList: Array<Array<CommentData>> = []

// Create localstorage
localStorage.setItem('user', '')
if (!localStorage.getItem('columns')) localStorage.setItem('columns', JSON.stringify(columnsList))
if (!localStorage.getItem('cards')) localStorage.setItem('cards', JSON.stringify(cardsList))
if (!localStorage.getItem('comments')) localStorage.setItem('comments', JSON.stringify(commentsList))
console.log(localStorage.getItem('user'))

// localStorage.setItem('columns', JSON.stringify(columnsList))
// localStorage.setItem('cards', JSON.stringify(cardsList))
// localStorage.setItem('comments', JSON.stringify(commentsList))
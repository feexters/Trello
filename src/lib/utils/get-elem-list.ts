import { CardData, CommentData } from "../interfaces";

function getCommentsById(id: string, list: CommentData[]): CommentData[] {
    return list.filter(elem => elem.cardId === id)
}

function getCardsById(id: string, list: CardData[]): CardData[] {
    return list.filter(elem => elem.columnId === id)
}

 

export { getCardsById, getCommentsById }


import { CardData, CommentData } from "../interfaces/interfaces";

function deleteElemById(id: string, list: CommentData[]): CommentData[] 
function deleteElemById(id: string, list: CardData[]): CardData[] 
function deleteElemById(id: string, list: any[]): any[] {
    return list.filter(elem => elem.id !== id)
}

export { deleteElemById }
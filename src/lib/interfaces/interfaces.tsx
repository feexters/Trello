export interface ColumnData {
    id: string, 
    title: string
}

export interface CardData {
    id: string, 
    title: string, 
    author: string, 
    description: string, 
    columnId: string
}

export interface CommentData {
    id: string, 
    value: string, 
    author: string,
    cardId: string
}
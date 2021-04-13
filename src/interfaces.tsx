export interface ColumnData {
    id: number, 
    title: string, 
    cardsId: number
}

export interface CardData {
    id: number, 
    title: string, 
    author: string, 
    description: string, 
    commentsId: number
}

export interface CommentData {
    id: number, 
    value: string, 
    author: string
}
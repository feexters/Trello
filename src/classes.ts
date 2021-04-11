class CommentInfo {
    constructor(
        public id: number, 
        public value: string, 
        public author: string
        ) {}
}

class ColumnInfo {
    constructor(
        public id: number, 
        public title: string, 
        public cards: Array<CardInfo>) {}
}

class CardInfo {
    constructor( 
        public id: number, 
        public title: string, 
        public author: string, 
        public description: string, 
        public comments: Array<CommentInfo>
    ) {}  
}

export class ColumnData {
    constructor(
        public id: number, 
        public title: string, 
        public cardsId: number) {}
}

export class CardData {
    constructor( 
        public id: number, 
        public title: string, 
        public author: string, 
        public description: string, 
        public commentsId: number
    ) {}  
}

export class CommentData {
    constructor(
        public id: number, 
        public value: string, 
        public author: string
        ) {}
}

export {CardInfo, ColumnInfo, CommentInfo} 
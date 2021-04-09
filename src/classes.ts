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

export {CardInfo, ColumnInfo, CommentInfo} 
import { CardData, ColumnData, CommentData } from "../interfaces"

class StorageService {
    public USER = 'user'
    public COLUMNS = 'columns'
    public CARDS = 'cards'
    public COMMENTS = 'comments'

    constructor() {
        this.init()
    }

    private init() {
        const columnsList: ColumnData[] = [
            {id: '0', title: "TODO"},
            {id: '1', title: "In Progress",},
            {id: '2', title: "Testing"},
            {id: '3', title: "Done"}
        ];
        const cardsList: CardData[] = []
        const commentsList: CommentData[] = []

        localStorage.setItem('user', '')
        if (!localStorage.getItem('columns')) localStorage.setItem('columns', JSON.stringify(columnsList))
        if (!localStorage.getItem('cards')) localStorage.setItem('cards', JSON.stringify(cardsList))
        if (!localStorage.getItem('comments')) localStorage.setItem('comments', JSON.stringify(commentsList))
        // localStorage.setItem('columns', JSON.stringify(columnsList))
        // localStorage.setItem('cards', JSON.stringify(cardsList))
        // localStorage.setItem('comments', JSON.stringify(commentsList))
    }

    addUser(value: string) {
        localStorage.setItem(this.USER, value)
    }

    addColumns(value: ColumnData[]) {
        localStorage.setItem(this.COLUMNS, JSON.stringify(value))
    }

    addCards(value: CardData[]) {
        localStorage.setItem(this.CARDS, JSON.stringify(value))
    }

    addComments(value: CommentData[]) {
        localStorage.setItem(this.COMMENTS, JSON.stringify(value))
    }

    getUser(): string | null{
        return localStorage.getItem(this.USER)
    }

    getCards(): CardData[] {
        return JSON.parse(localStorage.getItem(this.CARDS)!)
    }

    getColumns(): ColumnData[] {
        return JSON.parse(localStorage.getItem(this.COLUMNS)!)
    }

    getComments(): CommentData[] {
        return JSON.parse(localStorage.getItem(this.COMMENTS)!)
    }
} 

export default new StorageService()

export default class Storage {
    public USER = 'user'
    public COLUMNS = 'columns'
    public CARDS = 'cards'
    public COMMENTS = 'comments'

    setUser(value: string) {
        localStorage.setItem(this.USER, value)
    }

    setColumns(value: string) {
        localStorage.setItem(this.COLUMNS, value)
    }

    setCards(value: string) {
        localStorage.setItem(this.CARDS, value)
    }

    setComments(value: string) {
        localStorage.setItem(this.COMMENTS, value)
    }
} 

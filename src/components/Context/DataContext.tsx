import React, { useContext, useEffect, useState } from 'react';
import {  ColumnData, CardData, CommentData } from 'lib/interfaces';
import { StorageService } from 'lib/utils'


const DataContext = React.createContext({
    user: {
        name: localStorage.getItem('user'),
        change: ((value: string | null) => {})
    },

    columns: {
        list: (StorageService.getColumns()) as ColumnData[],
        changeTitle(id: string, value: string) {}
    },
    
    cards: {
        list: (StorageService.getCards()) as CardData[],
        add(value: CardData) {},
        delete(id: string) {},
        changeTitle(id: string, value: string) {},
        changeDescription(id: string, value: string) {}
    },

    comments: {
        list: (StorageService.getComments()) as CommentData[],
        add(value: CommentData) {},
        delete(id: string) {},
        change(id: string, value: string) {}
    }
})

export function useData() {
    return useContext(DataContext);
}

const DataProvider: React.FC = ({ children }) => {
    const [comments, setComments] = useState<CommentData[]>(StorageService.getComments())
    const [cards, setCards]       = useState<CardData[]>(StorageService.getCards())
    const [userName, setUserName] = useState<string | null>(StorageService.getUser())
    const [columns, setColumns] = useState<ColumnData[]>(StorageService.getColumns())

    const changeUserName = (value: string | null) => {
        setUserName(value)
        StorageService.addUser(value!)
    }
    
    const addComment = (value: CommentData) => {
        setComments(prev => [...prev, value])
    }

    const addCard = (value: CardData) => {
        setCards (prev =>  [...prev, value]) 
    }

    const changeCardTitle = (id: string, value: string) => {
        setCards(prev => prev.map(elem => {
            if (elem.id === id) {
                elem.title = value
            } 

            return elem 
        }))
    }

    const changeCardDescription = (id: string, value: string) => {
        setCards(prev => prev.map(elem => {
            if (elem.id === id) {
                elem.description = value
            } 

            return elem 
        }))
    }

    const changeComment = (id: string, value: string) => {
        setComments(prev => prev.map(elem => {
            if (elem.id === id) {
                elem.value = value
            } 

            return elem 
        }))
    }

    const changeColumnTitle = (id: string, value: string) => {
        setColumns(prev => prev.map(elem => {
            if (elem.id === id) {
                elem.title = value
            } 

            return elem 
        }))
    }

    const deleteCard = (id: string) => {
        setCards((prev) => {
            const cardComments = comments.filter(elem => elem.cardId === id)
            cardComments.map(elem => deleteComment(elem.id))
            return prev.filter(elem => elem.id !== id)
        });
    }

    const deleteComment = (id: string) => {
        setComments(prev => prev.filter(elem => elem.id !== id))
    }

    useEffect(() => {
        StorageService.addColumns(columns)
    },[columns]);

    useEffect(() => {
        StorageService.addCards(cards)
    },[cards]);

    useEffect(() => {
       StorageService.addComments(comments)
    },[comments]);


    // Context values
    const value = {
        user: {
            name: userName,
            change: changeUserName
        },

        columns: {
            list: columns,
            changeTitle: changeColumnTitle
        },

        cards: {
            list: cards,
            add: addCard,
            delete: deleteCard,
            changeTitle: changeCardTitle,
            changeDescription: changeCardDescription
        },

        comments: {
            list: comments, 
            add: addComment,
            delete: deleteComment,
            change: changeComment
        }
    }

    return (
        <DataContext.Provider value={value}>
            { children }
        </DataContext.Provider>
    );
}

export default DataProvider;

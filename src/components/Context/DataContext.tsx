import React, { useContext, useEffect, useState } from 'react';
import {  ColumnData, CardData, CommentData } from '../../lib/interfaces/interfaces';
import { deleteElemById, getCommentsById, StorageService } from '../../lib/utils'


const DataContext = React.createContext({
    user: {
        name: localStorage.getItem('user'),
        change: ((value: string | null) => {})
    },

    columns: Array<ColumnData>(),
    
    cards: {
        list: (JSON.parse(localStorage.getItem('cards')!)) as CardData[],
        add(value: CardData) {},
        delete(id: string) {},
        changeTitle(id: string, value: string) {}
    },

    comments: {
        list: (JSON.parse(localStorage.getItem('comments')!)) as CommentData[],
        add(value: CommentData) {},
        delete(id: string) {}
    }
})

export function useData() {
    return useContext(DataContext);
}

const DataProvider: React.FC = ({ children }) => {
    const [comments, setComments] = useState<CommentData[]>(StorageService.getComments())
    const [cards, setCards]       = useState<CardData[]>(StorageService.getCards())
    const [userName, setUserName] = useState<string | null>(StorageService.getUser())
    const columns: Array<ColumnData> = JSON.parse(localStorage.getItem('columns')!)

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

    const deleteCard = (id: string) => {
        setCards((prev) => {
            // Delete comments
            getCommentsById(id, comments).map(elem => deleteComment(elem.id))
            return deleteElemById(id, prev);
        });
    }

    const deleteComment = (id: string) => {
        setComments(prev => deleteElemById(id, prev))
    }

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

        columns: columns,

        cards: {
            list: cards,
            add: addCard,
            delete: deleteCard,
            changeTitle: changeCardTitle
        },

        comments: {
            list: comments, 
            add: addComment,
            delete: deleteComment
        }
    }

    return (
        <DataContext.Provider value={value}>
            { children }
        </DataContext.Provider>
    );
}

export default DataProvider;

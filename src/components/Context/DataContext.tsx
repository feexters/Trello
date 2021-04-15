import React, { useContext, useEffect, useState } from 'react';
import {  ColumnData, CardData, CommentData } from '../../lib/interfaces/interfaces';
import { StorageService } from '../../lib/utils'


const DataContext = React.createContext({
    user: {
        name: localStorage.getItem('user'),
        change: ((value: string | null) => {})
    },

    columns: Array<ColumnData>(),
    
    cards: {
        list: (JSON.parse(localStorage.getItem('cards')!)) as CardData[],
        add(value: CardData) {}
    },

    comments: {
        list: (JSON.parse(localStorage.getItem('comments')!)) as CommentData[],
        add(value: CommentData) {}
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
            add: addCard
        },

        comments: {
            list: comments, 
            add: addComment
        }
    }

    return (
        <DataContext.Provider value={value}>
            { children }
        </DataContext.Provider>
    );
}

export default DataProvider;

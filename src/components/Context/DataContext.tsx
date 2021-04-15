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
        list: Array<Array<CardData>>(JSON.parse(localStorage.getItem('cards')!)),
        change(id: number, value: CardData | null = null,) {}
    },

    comments: {
        list: Array<Array<CommentData>>(JSON.parse(localStorage.getItem('comments')!)),
        change(id: number, value: CommentData | null = null,) {}
    }
})

export function useData() {
    return useContext(DataContext);
}

const DataProvider: React.FC = ({ children }) => {
    const [comments, setComments] = useState<Array<Array<CommentData>>>(StorageService.getComments())
    const [cards, setCards]       = useState<Array<Array<CardData>>>(StorageService.getCards())
    const [userName, setUserName] = useState<string | null>(StorageService.getUser())
    const columns: Array<ColumnData> = JSON.parse(localStorage.getItem('columns')!)

    const changeUserName = (value: string | null) => {
        setUserName(value)
        StorageService.addUser(value!)
    }
    
    // Render new comments
    const changeComments = (id: number, value: CommentData | null = null) => {
        setComments(prev => {
            // If it's a new card
            const cardComments = prev[id] ? prev[id] : Array<CommentData>()

            // New Card
            if (value) {
                return prev.map((elem, elemId) => {
                    // Update cards list
                    if (elemId === id) return [...elem, value]
                    else return elem
                })
            }

            return [...prev, [...cardComments]]

            
        })
    }

    const changeCards = (id: number, value: CardData | null = null) => {
        setCards (prev => {

            // If it's a new card
            const tableCards = prev[id] ? prev[id] : Array<CardData>()

            // New Card
            if (value) {
                return prev.map((elem, elemId) => {
                    // Update cards list
                    if (elemId === id) return [...elem, value]
                    else return elem
                })
            }

            // Create cards list for new Column
            return [...prev, [...tableCards]]

        }) 
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
            change: changeCards
        },

        comments: {
            list: comments, 
            change: changeComments
        }
    }

    return (
        <DataContext.Provider value={value}>
            { children }
        </DataContext.Provider>
    );
}

export default DataProvider;

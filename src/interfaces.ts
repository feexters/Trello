import { CardInfo, ColumnInfo } from "./classes";

export interface CardProps {
    card: CardInfo,
    colTitle?: string,
}

export interface CardModalProps {
    card: CardInfo,
    colTitle?: string,
    close(): any
}

export interface ColumnProps {
    column: ColumnInfo
    addCard(title: string, columnId: number): void
}


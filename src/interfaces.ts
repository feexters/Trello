import { CardData, ColumnData,} from "./classes";

export interface CardProps {
    card: CardData,
    colTitle?: string,
}

export interface CardModalProps {
    card: CardData,
    colTitle?: string,
    close(): any
}

export interface ColumnProps {
    column: ColumnData
}


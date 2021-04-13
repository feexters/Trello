import { CardData, ColumnData } from "./classes";

export type CardModalProps = {
    card: CardData,
    column: ColumnData,
    close(): void
}

export type CardPreviewProps = {
    card: CardData,
    column: ColumnData
}

export type InputSettings = {
    setValue(value: string): void,
    placeholder: string,
    buttons: {
        title: string
    }
}
import { ColumnData, CardData } from "./interfaces"

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
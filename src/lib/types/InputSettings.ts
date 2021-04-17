export type InputSettings = {
    placeholder: string,
    onKeyPress(event: React.KeyboardEvent): void,
    onBlur?(event: React.FocusEvent<HTMLInputElement>): void
    type?: string,
    onChange?(): void,
    ref: React.RefObject<HTMLInputElement> 
}  

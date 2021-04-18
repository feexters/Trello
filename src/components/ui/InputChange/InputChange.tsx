import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Button } from '..';
import { InputSettings } from '../../../lib/types';
import { Input } from '../index'

interface InputChangeProps {
    placeholder: string, 
    setValue(value: string): void,
    inputRef: React.RefObject<HTMLInputElement>,
    value: string
}

const InputChange: React.FC<InputChangeProps> = ({placeholder, setValue, inputRef, value}) => {
    /* Press Enter */
    const keyPress = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            setValue(inputRef.current!.value);
        }
    };

    /* Input is out of focus */
    const blurHandler = () => {
        setValue(inputRef.current!.value);
    };

    const clickHandler = () => {
        setValue(inputRef.current!.value)
    }

    const inputSettings: InputSettings = {
      placeholder: placeholder,
      onKeyPress: keyPress,
      onBlur: blurHandler,
      ref: inputRef
    }

    useEffect(() => {
      inputSettings.ref.current!.focus()
      inputSettings.ref.current!.value = value
    })
      
    return (
      <Wrapper>
        <Input settings={inputSettings} />
        <Button title="Сохранить" clickHandler={clickHandler} success/>
      </Wrapper>
    );
}

export default InputChange;

const Wrapper = styled.div`
`
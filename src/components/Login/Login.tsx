import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useData } from '../Context/DataContext';
import { InputForm, Button } from '../ui/index';

const Login: React.FC  = () => {
    // Ref for input 
    const inputRef = useRef<HTMLInputElement>(null)
    // State for open or close button
    const [isVisibleButton, setIsVisibleButton] = useState(false)
    // Get user
    const { user } = useData()

    // Set new user name
    const setUserName = () => {
        if (inputRef.current!.value.trim()) {
            user.change(inputRef.current!.value)
        }
    }

     /* Press Enter */
    const keyPress = (event: React.KeyboardEvent) => {
        // Add new value, if user press Enter
        if (event.key === "Enter") {
            setUserName()
        }
    };

    // Open or close button 
    const inputToggle = () => {
        if (inputRef.current!.value.trim()) {
            setIsVisibleButton(true)
        } else {
            setIsVisibleButton(false)
        }
    }

    return (
        <>
        {!user.name && 
            <Wrapper>
                <LoginWindow>
                    <Title>Введите ваше имя:</Title>
                    <InputWrap> 
                        <InputForm 
                            placeholder="Имя пользователя"
                            keyPress={keyPress}
                            inputRef={inputRef}
                            changeHandler={inputToggle}
                        ></InputForm>
                        {isVisibleButton &&
                            <Button title="Войти" clickHandler={setUserName} success/>
                        }
                    </InputWrap>
                </LoginWindow>
            </Wrapper>
        }
        </>
    );
}

export default Login;


const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.2);
    margin: 0;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const LoginWindow = styled.div`
    width: 90%;
    max-width: 500px;
    padding: 15px;
    background-color: white;
    position: relative;
    top: -20%;
    border-radius: 10px;
`

const Title = styled.div`
    font-size: 1.5rem;
`

const InputWrap = styled.div`
    display: flex;
    align-items: stretch;

    & > * {
        margin-right: 5px;
    }
`

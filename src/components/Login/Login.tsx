import React, { useState } from 'react';
import styled from 'styled-components';
import { Input } from 'components/ui';
import { store, setUserName } from 'store'
import { useAppSelector } from 'lib/hooks/hooks';

const Login: React.FC  = () => {
    const userName = useAppSelector(state => state.user.name)!
    const [value, setValue] = useState('')

    const keyPress = (event: React.KeyboardEvent) => {
      if (event.key === "Enter" && value.trim()) {
        store.dispatch(setUserName(value))
      }
    };

    const onChange  = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
    }

    return (
      <>
        {!userName && (
          <Wrapper>
            <LoginWindow>
              <Title>Введите ваше имя:</Title>
              <InputWrap>
                <Input
                  placeholder="Имя пользователя"
                  onKeyPress={keyPress}
                  onChange={onChange}
                  value={value}
                />
              </InputWrap>
            </LoginWindow>
          </Wrapper>
        )}
      </>
    );
}

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

export default Login;
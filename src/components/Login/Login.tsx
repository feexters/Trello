import React from 'react';
import styled from 'styled-components';
import { Input } from 'components/ui';
import { setUserName } from 'store'
import { useAppDispatch, useAppSelector } from 'lib/hooks/hooks';
import { Field, Form } from 'react-final-form';

const Login: React.FC  = () => {
    const userName = useAppSelector(state => state.user.name)!

    const dispatch = useAppDispatch()

    const onSubmit = (value: string) => {
      if (value.trim()) {
        dispatch(setUserName(value));
      }
    };

    return (
      <>
        {!userName && (
          <Wrapper>
            <LoginWindow>
              <Title>Введите ваше имя:</Title>
              <InputWrap>
                <Form
                  onSubmit={(value) => {
                    onSubmit(value.value || "");
                  }}
                  initialValues={{ value: '' }}
                  render={({ handleSubmit, form }) => (
                    <LoginForm onSubmit={handleSubmit}>
                      <Field
                        name="value"
                        placeholder={"Введите имя пользователя"}
                        onBlur={() => form.submit()}
                        component={Input}
                        autoFocus
                      />
                    </LoginForm>
                  )}
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

const LoginForm = styled.form`
  width: 100%;
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
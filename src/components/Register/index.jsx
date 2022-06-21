import React, { useState } from 'react';
import { Container, Wrapper, Info, Error } from './style';
import Input from '../Generic/Input';
import Button from '../Generic/Button';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

const { REACT_APP_BASE_URL: url } = process.env;

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const { mutate } = useMutation(() => {
    return fetch(`${url}/public/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => res.json());
  });

  const onSubmit = () => {
    if (email.length && password.length) {
      mutate(
        {},
        {
          onSuccess: (res) => {
            console.log(res);
            if (res?.authenticationToken) {
              localStorage.setItem('token', res?.authenticationToken);
              setError(false);
              navigate('/signin');
            } else {
              setError('Email yoki passwordda hatolik');
            }
          },
          onError: (res) => {
            console.log(res, 'error');
          },
        }
      );
    } else {
      setError('Email yoki password bosh bolmasligi kerak');
    }
  };

  return (
    <Wrapper>
      <Container>
        <div className='title'>Register</div>
        <Input
          onChange={({ target: { value } }) => {
            setError(false);
            setEmail(value);
          }}
          value={email}
          pl={8}
          mt={30}
          placeholder='Login'
        />
        <Input
          onChange={({ target: { value } }) => {
            setError(false);
            setEmail(value);
          }}
          value={email}
          pl={8}
          mt={30}
          placeholder='First name'
        />
        <Input
          onChange={({ target: { value } }) => {
            setError(false);
            setEmail(value);
          }}
          value={email}
          pl={8}
          mt={30}
          placeholder='Last name'
        />
        <Input
          onChange={({ target: { value } }) => {
            setError(false);
            setEmail(value);
          }}
          value={email}
          pl={8}
          mt={30}
          placeholder='Email'
        />
        <Input
          onChange={({ target: { value } }) => {
            setError(false);
            setEmail(value);
          }}
          value={email}
          pl={8}
          mt={30}
          placeholder='User role'
        />
        <Input
          type='password'
          onChange={({ target: { value } }) => {
            setError(false);
            setPassword(value);
          }}
          value={password}
          pl={8}
          mt={30}
          placeholder='Password'
        />
        <Input
          type='password'
          onChange={({ target: { value } }) => {
            setError(false);
            setPassword(value);
          }}
          value={password}
          pl={8}
          mt={25}
          placeholder='Re-enter password'
        />
        {error?.length ? <Error>{error}</Error> : null}
        <Info>
          <Checkbox>Remember me</Checkbox>
          <a href='/signup'>Register</a>
        </Info>
        <Button mt={32} type='primary' onClick={onSubmit}>
          Register
        </Button>
      </Container>
    </Wrapper>
  );
};

export default Register;

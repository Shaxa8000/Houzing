import React, { useState } from 'react';
import { Container, Wrapper, Info } from './style';
import Input from '../Generic/Input';
import Button from '../Generic/Button';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

const { REACT_APP_BASE_URL: url } = process.env;

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    console.log(email, password);
    mutate(
      {},
      {
        onSuccess: (res) => {
          if (res?.authenticationToken) {
            localStorage.setItem('token', res?.authenticationToken);
          navigate('/home')
          }
        },
      }
    );
  };

  return (
    <Wrapper>
      <Container>
        <div className='title'>Sign In</div>
        <Input
          onChange={({ target: { value } }) => setEmail(value)}
          value={email}
          pl={8}
          mt={68}
          placeholder='Email'
        />
        <Input
          type='password'
          onChange={({ target: { value } }) => setPassword(value)}
          value={password}
          pl={8}
          mt={25}
          placeholder='Password'
        />
        <Info>
          <Checkbox>Remember me</Checkbox>
          <a href='/'>Forget</a>
        </Info>
        <Button mt={32} type='primary' onClick={onSubmit}>
          Login
        </Button>
      </Container>
    </Wrapper>
  );
};

export default Signin;

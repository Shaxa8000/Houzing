import React, { useState } from 'react';
import { Wrapper, Body } from './style';
import Filter from '../Filter';
import { useQuery } from 'react-query';
import Card from '../Card';
import { useLocation } from 'react-router-dom';


const { REACT_APP_BASE_URL: url } = process.env;


const Properties = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();



  useQuery(
    ['getHomeList', search],
    () => fetch(`${url}/v1/houses/list${search || '?'}`).then((res) => res.json()),
    {
      onSuccess: (res) => {
        setData(res?.data || []);
      },
    }
  );


  return (
    <>
      <Filter />
      <Wrapper>
        <div className='title center'>Properties</div>
        <div className='description center'>
          Siz orzu qilgan shinam va arzon uylar.
        </div>
      </Wrapper>
      <Body.Wrapper>
      <Body>
        {data.map((value) => {
          return <Card key={value.id} info={value}/>
        })}
      </Body>
      </Body.Wrapper>
    </>
  );
};

export default Properties;

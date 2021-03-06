import React, { useEffect, useState } from 'react';
import { Body, Wrapper } from './style';
import Filter from '../Filter';
import { useQuery } from 'react-query';
import Card from '../Card';
import { useLocation, useNavigate } from 'react-router-dom';
import useSearch from '../../hooks/useSearch';

const { REACT_APP_BASE_URL: url } = process.env;


const Properties = () => {
  const [title, setTitle] = useState('Properties');
  const [data, setData] = useState([]);
  const query = useSearch();
  const { search } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (!query.get('category_id')) {
      setTitle('Properties');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.get('category_id')]);

  const { isLoading, isRefetching } = useQuery(
    ['getHouses'],
    () =>
      query.get('category_id') &&
      fetch(`${url}/v1/categories/${query.get('category_id')}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }).then((res) => res.json()),
    {
      onSuccess: (res) => {
        query.get('category_id') &&
          setTitle(res?.data[query.get('category_id') - 2].name);
      },
    }
  );
  useQuery(
    ['getHomeList', search],
    () =>
      fetch(`${url}/v1/houses/list${search || '?'}`).then((res) => res.json()),

    {
      onSuccess: (res) => {
        setData(res?.data || []);
      },
    }
  );
  const onClick = (id) => {
    navigate(`/properties/:${id}`);
  };

  return (
    <>
      <Filter />
      <Wrapper>
        <div className='title center'>
          {isLoading || isRefetching ? <h4>Loading...</h4> : title}
        </div>
        <div className='center description'>
          Siz orzu qilgan , siz izlagan shinam va arzon uylar.
        </div>
      </Wrapper>
      <Body.Wrapper>
        <Body>
          {data.map((value) => {
            return (
              <Card
                onClick={() => onClick(value.id)}
                key={value?.id}
                info={value}
              />
            );
          })}
        </Body>
      </Body.Wrapper>
    </>
  );
};

export default Properties;

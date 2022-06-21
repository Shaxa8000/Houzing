import React, { useState } from 'react';
import { Input, Button } from '../Generic';
import { Container, Wrapper, Section } from './style';
import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useHttp } from '../../hooks/useHttp';

import { message } from 'antd';

const { REACT_APP_BASE_URL: url } = process.env;
const { REACT_APP_GoogleApiKey: key } = process.env;


const AddHouse = () => {
  const [data, setData] = useState({});
  const [map, setMap] = React.useState(null);
  const { request } = useHttp();

  const navigate = useNavigate();
  const { id } = useParams();

  useQuery(
    'getSingleItem',
    () => {
      return id && request({ url: `/v1/houses/${id}`, token: true });
    },
    {
      onSuccess: (res) => {
        console.log(res, 'res');
        setData(res?.data);
      },
    }
  );


  // Google Map

  const [center, setCenter] = useState({
    lat: 41.2995,
    lng: 69.2401,
  });

  const containerStyle = {
    width: '100%',
    height: '600px',
  };


  const { isLoaded } = useJsApiLoader({
    id: 'edit-house',
    googleMapsApiKey: key,
  });

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const onMapClick = (e) => {
    setCenter({
      lat: e?.latLng?.lat(),
      lng: e?.latLng?.lng(),
    });
  };

  //Create

  const { mutate } = useMutation(() =>
    request({
      url: '/v1/houses',
      method: 'POST',
      token: true,
      body: {
        address: 'Webbrain offline internship',
        attachments: [
          {
            imgPath:
              'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&w=1000&q=80',
          },
        ],
        categoryId: 0,
        city: '',
        componentsDto: {
          additional: 'string',
          airCondition: true,
          courtyard: true,
          furniture: true,
          gasStove: true,
          internet: true,
          tv: true,
        },
        country: 'Samarkand',
        description: 'react js',
        favorite: true,
        homeAmenitiesDto: {
          additional: 'string',
          busStop: true,
          garden: true,
          market: true,
          park: true,
          parking: true,
          school: true,
          stadium: true,
          subway: true,
          superMarket: true,
        },
        houseDetails: {
          area: 10,
          bath: 20,
          beds: 30,
          garage: 20,
          room: 10,
          yearBuilt: 2022,
        },
        locations: {
          latitude: center?.lat,
          longitude: center?.lng,
        },
        name: 'Off intern g1',
        price: 0,
        region: 'Samarkand',
        salePrice: 0,
        status: true,
        zipCode: '123456',
      },
    })
  );

  //Edit 

  const { mutate: update } = useMutation((id) => {
    return (
      id &&
      request({
        url: `/v1/houses/${id}`,
        method: 'PUT',
        token: true,
        body: data,
      })
    );
  });


  const onSubmit = () => {
    if (id) {
      update(id, {
        onSuccess: (res) => {
          if (res?.success) {
            message.info('updated');
            navigate('/profile/properties');
          }
        },
      });
    } else {
      mutate('', {
        onSuccess: (res) => {
          if (res?.success) {
                message.info('succesfully added');
            navigate('/profile/properties');
          }
        },
      });
    }
  };


  const onChange = ({target: {name, value}}) => {
    setData({
      ...data,
      [name]: value
    })
  }

  return (
    <Container>
      <section>
        <div className='subTitle'>Contact Information</div>
        <Wrapper>
          <Input
            name='address'
            onChange={onChange}
            value={data?.address}
            placeholder={'Property title'}
          />
          <Input
            name='category'
            placeholder={'Category'}
            onChange={onChange}
            value={data?.category}
          />
        </Wrapper>
        <Wrapper>
          <Input
            name='description'
            value={data?.description}
            placeholder={'Property description'}
            onChange={onChange}
          />
        </Wrapper>
      </section>
      <section>
        <div className='subTitle'>Additional</div>
        <Wrapper>
          <Input
            name='houseDetails-bath'
            value={data?.houseDetails?.bath}
            placeholder={'bath'}
            onChange={onChange}
          />
          <Input
            name='houseDetails-bed'
            value={data?.houseDetails?.bed}
            placeholder={'bed'}
            onChange={onChange}
          />
          <Input
            name='houseDetails-garage'
            value={data?.houseDetails?.garage}
            placeholder={'garage'}
            onChange={onChange}
          />
        </Wrapper>
        <Wrapper>
          <Input
            value={data?.yearBuilt}
            name='yearBuilt'
            placeholder={'year built'}
            onChange={onChange}
          />
          <Input placeholder={'home area'} />
          <Input placeholder={'rooms'} />
        </Wrapper>
      </section>
      <section>
        <div className='subTitle'>Price</div>
        <Wrapper>
          <Input
            name='price'
            value={data?.price}
            placeholder={'Price'}
            onChange={onChange}
          />
          <Input
            name='salePrice'
            value={data?.salePrice}
            placeholder={'salePrice'}
            onChange={onChange}
          />
        </Wrapper>
      </section>
      <section>
        <div className='subTitle'>Location</div>
        <Wrapper>
          <Input
            name='region'
            value={data?.region}
            placeholder={'Region'}
            onChange={onChange}
          />
          <Input
            name='address'
            value={data?.address}
            placeholder={'Address'}
            onChange={onChange}
          />
        </Wrapper>
        <Wrapper>
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={15}
              onLoad={onLoad}
              onUnmount={onUnmount}
              onClick={onMapClick}
            >
              <Marker position={center} />
              <Marker position={center} />
              <></>
            </GoogleMap>
          ) : (
            <></>
          )}
        </Wrapper>
      </section>
      <Button mt={10} onClick={onSubmit} type='primary' width={'150px'}>
        Submit
      </Button>
    </Container>
  );
};

export default AddHouse;

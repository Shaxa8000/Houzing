import React from 'react';
import { Container, Icon, Advanced, Section } from './style';
import { Popover } from 'antd';
import { Button, Input } from '../Generic';

const Filter = () => {

  const advancedSearch = (
      <Advanced>
        <Advanced.Title>Address</Advanced.Title>
        <Section>
          <Input placeholder='Country' />
          <Input placeholder='Region' />
          <Input placeholder='City' />
          <Input placeholder='Zip Code' />
        </Section>
        <Advanced.Title>Apartment Info</Advanced.Title>
        <Section>
          <Input placeholder='Address' />
          <Input placeholder='House Name' />
          <Input placeholder='Rooms' />
        </Section>
        <Advanced.Title>Price</Advanced.Title>
        <Section>
          <Input placeholder='Min Price' />
          <Input placeholder='Max Price' />
        </Section>
        <Section>
          {/* <Button width={"131px"} ml={20} type={"secondary"}>
          Search
        </Button> */}
          <Button width={'131px'} ml={20} type={'primary'}>
            Search
          </Button>
        </Section>
      </Advanced>
  );


  return (
    <div className='center'>
      <Container>
        <Input
          pl={50}
          placeholder={'Enter an address, neighborhood, city, or ZIP code'}
        >
          <Icon.Home />
        </Input>
        <Popover
          placement='bottomRight'
          content={advancedSearch}
          trigger='click'
        >
          <Button width={'131px'} type={'secondary'}>
            <Icon.Setting /> Advanced
          </Button>
        </Popover>
        <Button width={'131px'} type={'primary'}>
          <Icon.Search /> Search
        </Button>
      </Container>
    </div>
  );
};

export default Filter;

import Card from '../Card';
import React from 'react';
import { useQuery, useMutation } from 'react-query';
import {
  Container,
  Wrapper,
  Title,
  Box,
  Subtitle,
  Image,
  TexContainer,
  Icons,
} from './style';
import { Button } from '../Generic';
import { useNavigate } from 'react-router-dom';

const { REACT_APP_BASE_URL: url } = process.env;

const MyProperties = () => {
  const navigate = useNavigate();

  const { data, refetch } = useQuery(
    '',
    () =>
      fetch(`${url}/v1/houses/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }).then((res) => res.json()),
    {
      onSuccess: function (res) {
        console.log(res, 'res');
      },
      keepPreviousData: true, // bu browserdan tashqariga chiqib yana kirsa, yana yurishni oldini olish uchun
      refetchOnWindowFocus: false, // bu ham focus bolgan vaqti malumot olib kelish
    }
  );


  //delete

  const { mutate } = useMutation(({ id }) => {
    return fetch(`${url}/v1/houses/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "Application/json",
        Authorization:` Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => res.json());
  });

  const onDelete = (id) => {
    mutate(
      { id },
      {
        onSuccess: (res) => {
          refetch();
          // console.log(res, "deleted");
        },
        
      }
    );
  };

  return (
    <Container>
      <Wrapper>
        <Wrapper.Title>
          <Title>My Properties</Title>
          <Button
            onClick={() => navigate('/profile/add')}
            type='primary'
            width={'131px'}
          >
            Add New
          </Button>
        </Wrapper.Title>
        <Box>
          <Box.Container>
            <Box.Wrapper>
              <Subtitle first>Listing Title</Subtitle>
            </Box.Wrapper>
            <Box.Wrapper>
              <Subtitle>Date Published</Subtitle>
            </Box.Wrapper>
            <Box.Wrapper>
              <Subtitle>Status</Subtitle>
            </Box.Wrapper>
            <Box.Wrapper>
              <Subtitle>View</Subtitle>
            </Box.Wrapper>
            <Box.Wrapper>
              <Subtitle last>Action</Subtitle>
            </Box.Wrapper>
          </Box.Container>

          {data?.data.map((value) => {
            return (
              <Box.Container key={value.id}>
                <Box.Wrapper>
                  <Image>
                    <Image.Button>Featured</Image.Button>
                    <Image.Img
                      src={value?.attachments && value?.attachments[0]?.imgPath}
                    />
                  </Image>
                  <TexContainer>
                    <TexContainer.Title>
                      {value?.region}{' '}
                      <TexContainer.Sale>FOR SALE</TexContainer.Sale>
                    </TexContainer.Title>
                    <TexContainer.Desc>{value?.description}</TexContainer.Desc>
                    <TexContainer.DeletedPrice>
                      $2,800/mo
                    </TexContainer.DeletedPrice>
                    <TexContainer.Price>$7,500/mo</TexContainer.Price>
                  </TexContainer>
                </Box.Wrapper>
                <Box.Wrapper>
                  <TexContainer.Status>30 December 2022</TexContainer.Status>
                </Box.Wrapper>
                <Box.Wrapper>
                  <TexContainer.Status>Pending</TexContainer.Status>
                </Box.Wrapper>
                <Box.Wrapper>
                  <TexContainer.Status>5933</TexContainer.Status>
                </Box.Wrapper>
                <Box.Wrapper>
                  <Icons>
                    <Icons.Wrapper>
                      <Icons.Edit
                        onClick={() => navigate(`/profile/add/${value.id}`)}
                      />
                    </Icons.Wrapper>
                    <Icons.Wrapper>
                      <Icons.Trash onClick={()=> onDelete(value.id)}/>
                    </Icons.Wrapper>
                  </Icons>
                </Box.Wrapper>
              </Box.Container>
            );
          })}
        </Box>
      </Wrapper>
    </Container>
  );
};

export default MyProperties;

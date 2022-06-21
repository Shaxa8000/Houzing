import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import img1 from '../../assets/img/img-one.png';
import img2 from '../../assets/img/img-two.png';
import img3 from '../../assets/img/img-three.png';
import img4 from '../../assets/img/img-four.png';
import user from '../../assets/img/user.png';
import { Checkbox, Button } from '../Generic';
import Map from './Map';


import { Container, Wrapper, ImgWrap, Img, Left, Right } from './style';
const { REACT_APP_BASE_URL: url } = process.env;

const Detailes = () => {
  const { id } = useParams();

  const { data } = useQuery(
    'gethouse by id',
    () =>
      fetch(`${url}/v1/houses/${id?.replace(':', '')}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }).then((res) => res.json()),
    {
      onSuccess: (res) => {
        console.log(res, 'res');
      },
    }
  );

  return (
    <Container>
      <Wrapper>
        <ImgWrap>
          <ImgWrap.Main src={data?.data.attachments[0]?.imgPath} />
          <ImgWrap.Small>
            <ImgWrap.Box>
              <Img src={img1} />
              <Img src={img2} />
            </ImgWrap.Box>
            <ImgWrap.Box>
              <Img src={img3} />
              <Img src={img4} />
            </ImgWrap.Box>
          </ImgWrap.Small>
        </ImgWrap>
        <Wrapper.Wrapper>
          <Left>
            <Left.TitleWrap>
              <div className='title'>{data?.data?.name}</div>
              <Left.IconWrap>
                <Left.Share />
                <Left.IconText>Share</Left.IconText>
                <Left.Heart />
                <Left.IconText>Save</Left.IconText>
              </Left.IconWrap>
            </Left.TitleWrap>
            <Left.Address>{data?.data?.address}</Left.Address>
            <Left.Details>
              <Left.DetailsWrap>
                <Left.Detail>
                  <Left.BedsIcon />
                  <Left.IconText>
                    {data?.data?.houseDetails?.beds || 0} Beds
                  </Left.IconText>
                </Left.Detail>

                <Left.Detail>
                  <Left.BathIcon />
                  {data?.data?.houseDetails?.bath || 0} Bath
                </Left.Detail>

                <Left.Detail>
                  <Left.GarageIcon />
                  {data?.data?.houseDetails?.garage || 0} Garage
                </Left.Detail>

                <Left.Detail>
                  <Left.SquareIcon />
                  {data?.data?.houseDetails?.area || 0} Sq Ft
                </Left.Detail>

                <Left.Detail>
                  <Left.BuiltIcon />
                  Year Built:
                  {data?.data?.houseDetails?.yearBuilt || 2022}
                </Left.Detail>
              </Left.DetailsWrap>
              <Left.Price>
                ${data?.data?.price || 0}/mo
                <Left.IconText>Est. Mortgage</Left.IconText>
              </Left.Price>
            </Left.Details>
            <Left.Description>
              <div className='subTitle'>Description</div>
              <Left.IconText>
                {data?.data?.description || 'description'}
              </Left.IconText>
            </Left.Description>
            <Left.Description>
              <div className='subTitle'>Documents</div>
              <Left.DetailsWrap>
                <Left.Detail>
                  <Left.Download />
                  <Left.IconText>test_property.pdf</Left.IconText>
                </Left.Detail>
                <Left.Detail>
                  <Left.DownloadText>Download</Left.DownloadText>
                </Left.Detail>
                <Left.Detail>
                  <Left.Download />
                  <Left.IconText>test_property.pdf</Left.IconText>
                </Left.Detail>
                <Left.Detail>
                  <Left.DownloadText>Download</Left.DownloadText>
                </Left.Detail>
                <Left.Detail>
                  <Left.Download />
                  <Left.IconText>test_property.pdf</Left.IconText>
                </Left.Detail>
                <Left.Detail>
                  <Left.DownloadText>Download</Left.DownloadText>
                </Left.Detail>
              </Left.DetailsWrap>
            </Left.Description>
            <Left.Border />
            <Left.Map>
               <Map/>
            </Left.Map>
          </Left>
          <Right>
            <Right.Wrapper>
              <Right.User>
                <img src={user} alt='user' />
                <Right.Name>
                  <div className='subTitle'>Darrel Steward</div>
                  <Right.Text>(123)456-7890</Right.Text>
                </Right.Name>
              </Right.User>
              <Right.Form>
                <Right.Text>Name</Right.Text>
                <Right.Border />
              </Right.Form>
              <Right.Form>
                <Right.Text>Phone</Right.Text>
                <Right.Border />
              </Right.Form>
              <Right.Form>
                <Right.Text>Email</Right.Text>
                <Right.Border />
              </Right.Form>
              <Right.Message>Message</Right.Message>
              <Right.SubMessage>
                Hello, I am interested in [New Apartment]
              </Right.SubMessage>
              <Right.Border />
              <Right.CheckboxWrap>
                <Checkbox />
                <Right.SubMessage>
                  By submitting this form I agree to Terms of Use
                </Right.SubMessage>
              </Right.CheckboxWrap>
              <Button type='primary'>Send request</Button>
            </Right.Wrapper>
          </Right>
        </Wrapper.Wrapper>
      </Wrapper>
    </Container>
  );
};

export default Detailes;

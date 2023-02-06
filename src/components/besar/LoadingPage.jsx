/* eslint-disable linebreak-style */
/* eslint-disable react/no-unknown-property */
import React from 'react';
import styled from '@emotion/styled';
import Logo from '../../img/logo-forum.png';
import { colors } from '../../utils/colors';

const Container = styled('div')`
display: flex ;
justify-content: center ;
align-items: center ;
flex-direction: column ;
width: 100vw ;
height: 100vh ;
background-color: ${colors.seconWhite};
`;

const Image = styled('img')`
width: 150px;
margin-bottom: 10px ;
`;

function LoadingPage() {
  return (
    <Container>
      <Image src={Logo} alt="logo" />
      <span>Loading...</span>
    </Container>
  );
}

export default LoadingPage;

import React from 'react';
import styled from 'styled-components';
import sclogo from '../../../assets/logos/sc.svg';

export const HeaderComponent = styled.div`
  background-color: #f6f6f6;
  padding: 20px;
  color: white;
  position: relative;
  display: flex;
  justify-content: flex-end;
`

const HeaderWrapper = styled.div`
  height: 100%;
  position: relative;
  right:0;
`

const HeaderLogo = styled.img`
  height: 60px;
  position: relative;
  display: inline-block;
  vertical-align: middle;
`

export const HeaderContents = () => (
  <HeaderWrapper>
    <HeaderLogo src={sclogo} alt='logo'/>
  </HeaderWrapper>
)

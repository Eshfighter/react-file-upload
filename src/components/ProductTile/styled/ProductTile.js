import styled from 'styled-components';

export const ProductImage = styled.img`
  height: 60px;
  position: relative;
  display: inline-block;
  vertical-align: middle;
`

export const ProductTileTitle = styled.p`
  font-size: 14px;
  color: white;
`

export const ProductTileWrapper = styled.div`
  width: 300px
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 10px;
  img{
    height: 160px;
    margin-bottom:10px;
    border-radius: 7px;
    box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.5)
  }
  @media screen and (max-device-width: 480px){
    img{
      margin-right:0px;
    }
  }
`

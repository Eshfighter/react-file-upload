import styled from 'styled-components';
import uploadBackground from '../../../assets/upload-background.jpg'

export const UploadComponentWrapper = styled.div`
  position: relative;
  padding-bottom: 130px;
  background-size: cover;
  background-position: right bottom;
  background-image: linear-gradient(rgba(20,20,20, .5), rgba(20,20,20, .5)), url(${uploadBackground});
  @media screen and (max-device-width: 480px){
    background: linear-gradient(
    rgba(20,20,20, .5),
    rgba(20,20,20, .5)),
    url(${uploadBackground});
    background-size: cover;
  }
  @media screen and (device-height: 1024px){
    height: 1024px
  }
  @media screen and (device-height: 1366px){
    height: 1366px
  }
`

export const DocumentUploadTitle = styled.div`
  font-size: 35px;
  border-bottom: 1px solid white;
  margin: 0px auto 30px;
  padding-top: 33px;
  width: 300px;
  color: white;
  padding-bottom: 5px;
  box-shadow: inset 0px -9px 14px -10px #CCC;
`

export const ProductWrapper = styled.div`
  display: inline-block;
  position: relative;
`

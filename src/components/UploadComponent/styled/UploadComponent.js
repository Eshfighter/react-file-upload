import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ProgressBar } from 'react-bootstrap';
import uploadLogoSvg from '../../../assets/logos/upload.svg';
import GoCheck from 'react-icons/lib/go/check';
import GoTrashCan from 'react-icons/lib/go/trashcan';
import FaSpinner from 'react-icons/lib/fa/spinner'

// Styling for DropArea
const Container = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  width: 100%;
  margin: 0px auto 20px;
  height: 120px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  background-color: white;
  font-family: "SC Sans Web", sans-serif;
`

export const DropArea = ({ onDragEnter, onDragOver, onDragLeave, onDrop, children, hoveringStyle }) => {
  return (
    <Container onDragEnter={onDragEnter}
               onDragLeave={onDragLeave}
               onDragOver={onDragOver}
               onDrop={onDrop}
               style={hoveringStyle}>
      {children}
    </Container>
  )
}

// Styling for Progress Bar when file is uploaded and deleted
const ProgressBarContainer = styled.div`
  margin-top: -242px;
  margin-bottom: 0px;
  backface-visibility: hidden;
  overflow: hidden;
  background: white;
  height: 120px;
  font-size: 28px;
  width:100%;
  position: relative;
  line-height: 120px;
  font-weight: 200;
  left:0;
  color: #54c2f6;
  @media screen and (max-device-width: 480px){
    font-size: 17px;
  }
`

const ProgressBarloading = styled.div`
  background:#54c2f6;
  color:#fff;
  width: ${(props) => props.now}%;
  height: 100%;
  position:absolute;
  left:0;
  top:0;
  overflow:hidden;
  line-height: 120px;
  transition: width 0.5s ease;
  @media screen and (max-device-width: 480px){
    font-size: 17px;
  }
`

const ProgressBartext = styled.div`
  width: 520px;
  @media screen and (max-device-width: 480px){
    width: 286px;
  }
  
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const SpinningIconWrapper = styled.div`
  display: inline-block;
  animation: ${rotate360} 2s linear infinite;
  color: white;
  z-index:1;
  position:absolute;
  left: 115px;
  @media screen and (max-device-width: 480px){
    left: 20px !important;
  }
`

export const SpinningIcon = (props) => (
  <SpinningIconWrapper style={props.style}>
    <FaSpinner/>
  </SpinningIconWrapper>
)

export const UploadProgressBar = ({progress}) => {
  return (
    <div>
      <ProgressBarContainer> 
        <ProgressBarloading now={progress}>
          <SpinningIcon style={{'z-index':'2'}}/>
          <ProgressBartext>Uploading File...</ProgressBartext>
        </ProgressBarloading>
        <SpinningIcon style={{color:'#54c2f6'}} />Uploading File...
      </ProgressBarContainer>
    </div>                     
  )
}

export const DeleteProgressBar = () => (
  <ProgressBarContainer> 
    <ProgressBarloading now={100}><SpinningIcon /> Deleting File...</ProgressBarloading>
  </ProgressBarContainer>   
)

// Styling for Upload Button
const UploadButtonContainer = styled.div`
  width: 30%;
  display: inline-block;
  font-size: 13px;
  @media screen and (max-device-width: 480px){
    font-size: 10px;
  }
`
const StyledLabel = styled.label`
  margin: 0px;
  height: 120px;
  padding: 17px;
  cursor: pointer;
  color: #54c2f6;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  line-height: normal;
  font-weight: 300;
  font-family: "SC Sans Web", sans-serif;
`

const HoveredLabel = styled.label`
  line-height: 120px;
  width: 100%;
  height: 120px;
  margin: 0px;
  cursor: pointer;
  color: #54c2f6;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  font-weight: 300;
  font-family: "SC Sans Web", sans-serif;
`

const UploadButtonLabelWrapper = styled.div`
  display: inline-block;
  position: relative;
  top: 0;
  transition: all .3s ease-out;
  line-height: 120px;
  &:hover{
    top: -120px;
    transition: all .3s ease-out;
  }
`

const DeleteButtonLabelWrapper = styled.div`
  display: inline-block;
  position: relative;
  line-height: 120px;
  height: 242px;
  width: 100%;
  cursor: pointer;
`

const DeleteLabel = styled.div`
  line-height: normal;
  display: inline-block;
  vertical-align: middle;
`

const FileInput = styled.input`
  display: none !important;
`

const UploadLogo = styled.img`
  height: 40px;
`
export const BrowseFileButton = (props) => {
  const { id, onChange, documentUploaded, deleteFile } = props;
  return (
    <UploadButtonContainer>
      <FileInput type="file" id={id} accept="image/*" onChange={onChange} />
      {!documentUploaded ?
        <UploadButtonLabelWrapper>
          <StyledLabel htmlFor={id}>
            <UploadLogo src={uploadLogoSvg}/>
            <br/>
            Choose a file or drag to upload
          </StyledLabel>
          <HoveredLabel htmlFor={id}>
            BROWSE FILES
          </HoveredLabel>
        </UploadButtonLabelWrapper> :
        <DeleteButtonLabelWrapper onClick={deleteFile}>
          <DeleteLabel>
            <GoTrashCan size={35} color='lightgray'/>
          </DeleteLabel>
        </DeleteButtonLabelWrapper>
      }
    </UploadButtonContainer>
  )
}

// Styling for Document Details (which document to upload)
const DocumentDetailsContainer = styled.div`
  height: 120px;
  display: inline-block;
  border-right: 1px solid black;
  width: 70%;
  vertical-align: top;
  box-sizing:border-box;
`
const DocumentDetailsWrapper = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: left;
  height: 120px;
  padding-left: 15px;
`

const DocumentLabel = styled.p`
  margin: 0;
  font-size: 11px;
  color: gray;
  font-family: "SC Sans Web", sans-serif;
`

const Classification = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 300;
  color: #0085d4;
  font-family: "SC Sans Web", sans-serif;
`

export const DocumentTypeDetails = (props) => {
  const { classification, documentName } = props;
  if (documentName) {
    console.log('File Uploaded :: '+ documentName)
  }
  // TODO: Handle classification text logic
  return (
    <DocumentDetailsContainer>
      <DocumentDetailsWrapper>
        {documentName ? '' : <DocumentLabel>Please upload a file of type</DocumentLabel>}
        <Classification>
          {documentName ? <GoCheck color={'green'}/> : ''}
          {documentName ?  ' ' + documentName : classification}
        </Classification>
      </DocumentDetailsWrapper>
    </DocumentDetailsContainer>
  )
}

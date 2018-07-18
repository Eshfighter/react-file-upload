import React from 'react';
import styled from 'styled-components';
import TimeoutIconImage from '../../../assets/icon_timeout.png';
import loginBackground from '../../../assets/login-background.jpg';
import TimeoutBackground from '../../../assets/time-parts-fix-solution-2c.jpg';


export const TimeoutPageWrapper = styled.div`
    background-image: linear-gradient(rgba(20,20,20, .5), rgba(20,20,20, .5)),url(${TimeoutBackground});
    background-size: cover;
    background-position: center;
    height: auto;
    position: relative;
    color: white;
    height: 90vh;
`

const TimeoutIconPicture = styled.div`
    background-image: url(${TimeoutIconImage});
    background-color: transparent;
    background-size: cover;
    height: 150px;
    width: 150px;
    margin: 50px auto;
    position: relative;
    display: inline-block;
`

const TimeoutInfoText = styled.div`
    position: relative;
    font-size: 30px;
`

const TimeoutInfoContactText = styled.div`
    position: relative;
    font-size: 17px;
    margin-top: 30px;
`

const PolicyContainerText = styled.div`
    font-size: 10px;
    position: absolute;
    bottom: 10px;
    width:100%;
`

export const TimeoutIcon = () => (
    <TimeoutIconPicture></TimeoutIconPicture>
)

export const TimeoutInfo = () => (
    <TimeoutInfoText>
        The link that you are trying to access has expired.
    </TimeoutInfoText>
)

export const TimeoutInfoContact = () => (
    <TimeoutInfoContactText>
        Please proceed to contact one of our RM or branch for assistance
    </TimeoutInfoContactText>
)

export const PolicyContainer = () => (
    <PolicyContainerText>
        Access to this data is restricted to authorised Standard chartered employee. Any unauthorised access will be prosecuted to the fullest extent of the law.
    </PolicyContainerText>
)
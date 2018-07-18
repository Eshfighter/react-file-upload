import React, { Component } from 'react';
import { TimeoutIcon, TimeoutInfo, TimeoutInfoContact, TimeoutPageWrapper, PolicyContainer} from './styled/SessionTimeout';

class SessionTimeout extends Component {
    render() {
        return (
            <TimeoutPageWrapper>
                <div className="timeout-container">
                    <TimeoutIcon/>
                    <TimeoutInfo/>
                    <TimeoutInfoContact/>
                </div>
            <PolicyContainer/>
        </TimeoutPageWrapper>
        );
    }
}

export default SessionTimeout;

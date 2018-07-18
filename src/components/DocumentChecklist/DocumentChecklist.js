import React, { Component } from 'react';
import UploadComponent from '../UploadComponent/UploadComponentContainer';
import { DocumentChecklistWrapper } from './styled/DocumentChecklist';

class DocumentChecklist extends Component {

  render() {
    const { docCheckList } = this.props;
    const { mandatory, optional } = docCheckList;
    return (
      <DocumentChecklistWrapper>
        {mandatory.map((docItem, i) => {
          return <UploadComponent key={`mandatory-${i}`} elementId={`uploadComponentM-${i}`} classification={docItem}/>
        })}
        {optional.map((docItem, i) => {
          return <UploadComponent key={`optional-${i}`} elementId={`uploadComponentO-${i}`} classification={docItem}/>
        })}
      </DocumentChecklistWrapper>
    )
  }
}

export default DocumentChecklist;

import SubmitButton from './SubmitButton';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// This method gets the state from the store, and passes it as props
const mapStateToProps = (state) => {
  return {
    // Add only if require any state as props
    uploadedFiles: state.uploadedFiles,
    docCheckListMandatory: state.docCheckList.mandatory
  }
}

const mapDispatchToProps = dispatch => {
    return {
    }
  }

const SubmitButtonContainer = connect(mapStateToProps,mapDispatchToProps)(SubmitButton);

export default withRouter(SubmitButtonContainer);
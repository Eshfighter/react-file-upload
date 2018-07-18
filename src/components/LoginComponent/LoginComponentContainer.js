import LoginComponent from './LoginComponent';
import { connect } from 'react-redux';
import { documentChecklistRequest } from '../../actions';
import { withRouter } from 'react-router-dom';
import { documentChecklistUrl } from '../../utils/constants';
import { validateLinkUrl } from '../../utils/constants';
import { validateLinkRequest } from '../../actions';

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  authenticateApplication(appNum, appPass) {
    return new Promise((resolve, reject) => {
      console.log('App Number :: ' + appNum);
      console.log('App Password :: ' + appPass);
      resolve();
    })
  },
  fetchDocumentCheckList(appNum, redirectToUploadPage) {
    const url = documentChecklistUrl // + appNum + '/document-checklist'
    dispatch(
      documentChecklistRequest(url, redirectToUploadPage)
    )
  },
  validateLink(userType, appId) {
    const url = validateLinkUrl;
    dispatch(
      validateLinkRequest(url, userType, appId)
    )
  }
})

const LoginComponentContainer = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

export default withRouter(LoginComponentContainer);

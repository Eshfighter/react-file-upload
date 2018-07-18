import DocumentChecklist from './DocumentChecklist';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

const mapStateToProps = ({docCheckList}) => ({
  docCheckList
})

const Container = connect(mapStateToProps)(DocumentChecklist);

 export default withRouter(Container);

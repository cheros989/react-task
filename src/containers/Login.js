import { connect } from 'react-redux'
import { authenticate, startPreload, stopPreload } from '../actions'
import Login from '../components/Login'
import { withAlert } from "react-alert";

const mapStateToProps = state => ({
  currentUser: state.login.currentUser
})

const mapDispatchToProps = dispatch => ({
    authenticate: currentUser => dispatch(authenticate(currentUser)),
    startPreload: () => dispatch(startPreload()),
    stopPreload: () => dispatch(stopPreload())
})

export default withAlert(connect(
  mapStateToProps,
  mapDispatchToProps
)(Login))
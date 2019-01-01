import { connect } from 'react-redux'
import { authenticate } from '../actions'
import Login from '../components/Login'
import { withAlert } from "react-alert";

const mapStateToProps = state => ({
  currentUser: state.login.currentUser
})

const mapDispatchToProps = dispatch => ({
    authenticate: currentUser => dispatch(authenticate(currentUser))
})

const mappedLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

const withAlertMappedLogin = withAlert(mappedLogin)

export default withAlertMappedLogin
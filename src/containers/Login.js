import { connect } from 'react-redux'
import { authenticate } from '../actions'
import Login from '../components/Login'

const mapStateToProps = state => ({
  isAuthenticated: state.login.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
    authenticate: isAuthenticated => dispatch(authenticate(isAuthenticated))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
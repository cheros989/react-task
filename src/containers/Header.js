import { connect } from 'react-redux'
import Header from '../components/Header'
import { authenticate } from '../actions'

const mapStateToProps = state => {
  return {
    currentUser: state.login.currentUser
  }
}

const mapDispatchToProps = dispatch => ({
  authenticate: currentUser => dispatch(authenticate(currentUser))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
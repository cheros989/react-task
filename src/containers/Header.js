import { connect } from 'react-redux'
import Header from '../components/Header'

const mapStateToProps = state => {
  return {
    isAuthenticated: state.login.isAuthenticated
  }
}

export default connect(
  mapStateToProps
)(Header)
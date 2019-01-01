import { connect } from 'react-redux'
import Profile from '../components/Profile'

const mapStateToProps = state => ({
  currentUser: state.login.currentUser
})

export default connect(
  mapStateToProps
)(Profile)
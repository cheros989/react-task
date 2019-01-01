import { connect } from 'react-redux'
import Profile from '../components/Profile'
import { startPreload, stopPreload } from '../actions.js'
import { withAlert } from "react-alert";

const mapStateToProps = state => ({
  currentUser: state.login.currentUser
})

const mapDispatchToProps = dispatch => ({
  startPreload: () => dispatch(startPreload()),
  stopPreload: () => dispatch(stopPreload())
})

export default withAlert(connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile))
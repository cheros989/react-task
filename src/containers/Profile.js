import { connect } from 'react-redux'
import Profile from '../components/Profile'
import { startPreload, stopPreload, setUserData } from '../actions.js'
import { withAlert } from "react-alert";

const mapStateToProps = state => {
  console.log(1)
  console.log(state)
  return {
    currentUser: state.login.currentUser,
    userData: state.user.userData
  }
}

const mapDispatchToProps = dispatch => ({
  startPreload: () => dispatch(startPreload()),
  stopPreload: () => dispatch(stopPreload()),
  setUserData: userData => dispatch(setUserData(userData))
})

export default withAlert(connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile))
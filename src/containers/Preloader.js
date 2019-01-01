import { connect } from 'react-redux'
import Preloader from '../components/Preloader'

const mapStateToProps = state => ({isLoading: state.preload.isLoading})

export default connect(
  mapStateToProps
)(Preloader)
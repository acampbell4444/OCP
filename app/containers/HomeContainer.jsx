import Home from '../components/Home'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  const user = state.auth
  const navBarActive = state.navBar.navBarActive
  return {
    user,
    navBarActive
  }
}

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

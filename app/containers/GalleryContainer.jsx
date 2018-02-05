import Gallery from '../components/Gallery'
import {connect} from 'react-redux'
import { navShow } from '../reducers/navBar'

const mapStateToProps = (state) => {
  const user = state.auth
  return {
    user
  }
}

const mapDispatchToProps = dispatch => ({
  showNav(bool) {
  	return dispatch(navShow(bool))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)

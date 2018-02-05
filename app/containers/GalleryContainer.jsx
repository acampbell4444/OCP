import Gall from '../components/Gallery'
import {connect} from 'react-redux'
import { navShow, footShow } from '../reducers/navBar'

const mapStateToProps = (state) => {
  const user = state.auth
  return {
    user
  }
}

const mapDispatchToProps = dispatch => ({
  showNav(bool) {
  	return dispatch(navShow(bool))
  },
  footShow(bool) {
  	return dispatch(footShow(bool))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Gall)

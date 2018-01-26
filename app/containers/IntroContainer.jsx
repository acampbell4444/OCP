import Intro from '../components/Intro'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  const user = state.auth
  return {
    user
  }
}

export default connect(mapStateToProps)(Intro)
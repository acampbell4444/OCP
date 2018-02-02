import Contact from '../components/Contact'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  const user = state.auth
  return {
    user
  }
}

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
import Rate from '../components/Rate'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  const user = state.auth
  return {
    user
  }
}

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Rate)
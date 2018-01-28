import Chunk1 from '../components/Chunk1'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  const user = state.auth
  return {
    user
  }
}

export default connect(mapStateToProps)(Chunk1)

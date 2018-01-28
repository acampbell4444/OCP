import Sunrise from '../components/Sunrise'
import {connect} from 'react-redux'
import { setSunRiseDimensions } from '../reducers/sunRise'

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = dispatch => (
  {
    updateSunRiseDimensions(h,w) {
      return dispatch( setSunRiseDimensions(h,w))
    }
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Sunrise)

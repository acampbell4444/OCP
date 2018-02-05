import Reservation from '../components/Reservation'
import { connect } from 'react-redux'
import { navShow, footShow } from '../reducers/navBar'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  showNav(bool){
    return dispatch(navShow(bool))
  },
  showFoot(bool){
    return dispatch(footShow(bool))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Reservation)

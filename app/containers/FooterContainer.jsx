import Footer from '../components/Footer'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  const footShow = state.navBar.footShow
  return {
    footShow
  }
}

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
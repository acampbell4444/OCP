import Footer from '../components/Gallery'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  const footerShow = state.navBar.footerShow
  return {
    footerShow
  }
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
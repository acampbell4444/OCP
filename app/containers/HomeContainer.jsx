import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Home from '../components/Home'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  const user = state.auth
  const navBarActive = state.navBar.navBarActive
  const sunRiseHeight = state.sunRise.sunRiseHeight
  return {
    user,
    navBarActive,
    sunRiseHeight
  }
}

const mapDispatchToProps = dispatch => (
  {
    scrollToTop() {
      scroll.scrollToTop()
    },
    scrollToBottom() {
      scroll.scrollToBottom()
    },
    scrollTo() {
      scroll.scrollTo(100)
    },
    scrollMore() {
      scroll.scrollMore(100)
    }
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Home)

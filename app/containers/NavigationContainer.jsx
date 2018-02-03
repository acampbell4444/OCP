import Navigation from '../components/Navigation'
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'

let currentSection
const mapStateToProps = (state) => {
  currentSection = state.navBar.currentSection
  return {
    currentSection,
  }
}

const mapDispatchToProps = dispatch => (
  {
    handleSectionChange(section) {
      if (section===1&&currentSection!==1) { browserHistory.push('/home') }
      if (section===2&&currentSection!==2) { browserHistory.push('/reservations') }
      if (section===3&&currentSection!==3) { browserHistory.push('/rates') }
      if (section===4&&currentSection!==4) { browserHistory.push('/location') }
      if (section===5&&currentSection!==5) { browserHistory.push('/FAQ') }
      if (section===6&&currentSection!==6) { browserHistory.push('/contact') }
    }
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)

import Navigation from '../components/Navigation'
import {browserHistory} from 'react-router'
import {connect} from 'react-redux'
import { updateNavbarActive, updateCurrentSection } from '../reducers/navBar'

let currentSection
const mapStateToProps = (state) => {
  const navBarActive = state.navBar.navBarActive
  currentSection = state.navBar.currentSection
  return {
    navBarActive,
    currentSection
  }
}

const mapDispatchToProps = dispatch => (
  {
    updateNavbarActive(bool) {
      return dispatch(updateNavbarActive(bool))
    },
    handleSectionChange(section) {
      if(section===1&&currentSection!==1){browserHistory.push('/home'); return dispatch(updateCurrentSection(section))}
      if(section===2&&currentSection!==2){browserHistory.push('/reservations'); return dispatch(updateCurrentSection(section))}
      if(section===3&&currentSection!==3){console.log('taco'); return dispatch(updateCurrentSection(section))}
      if(section===4&&currentSection!==4){console.log('taco'); return dispatch(updateCurrentSection(section))}
      if(section===5&&currentSection!==5){console.log('taco'); return dispatch(updateCurrentSection(section))}
      if(section===6&&currentSection!==6){console.log('taco'); return dispatch(updateCurrentSection(section))}
    }
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)

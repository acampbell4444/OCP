import Navigation from '../components/Navigation'
import {connect} from 'react-redux'
import { updateNavbarActive, updateCurrentSection } from '../reducers/navBar'

const mapStateToProps = (state) => {
  const navBarActive = state.navBar.navBarActive
  const currentSection = state.navBar.currentSection
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
      return dispatch(updateCurrentSection(section))
    }
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)

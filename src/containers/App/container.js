import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { activateNavigationItem, openNavigationMenu } from '../../actions';
import App from './App';

const mapStateToProps = state => ({
  activatedIndex: state.activatedIndex,
  isVisible: state.isVisible,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  { activateNavigationItem, openNavigationMenu },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

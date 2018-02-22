import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { flazzleActions, FlazzleDashboard } from '../../lib';
import Main from '../components/main';

const App = props => {
  return (
    <Router>
      <div>
        <Route exact path="/" render={() => <Content {...props} />} />
        <Route path="/flazzle" render={(ownProps) => <FlazzleDashboard flags={props.flags} updateFlags={props.actions.updateFlags} goBack={() => ownProps.history.push('/')} />} /> 
      </div>
    </Router>
  );
}

const Content = props => (<div className="App">
    <Link to="flazzle"><button>click to open the awesome dashboard for feature flags!</button></Link>
    <Main flags={props.flags} state={props.state} />
</div>);


function mapStateToProps(state) {
  return { state: state.app, flags: state.flags }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(flazzleActions, dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)


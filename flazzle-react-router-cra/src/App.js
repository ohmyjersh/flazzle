import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import { Flag, actions } from './flazzle';
import FlazzleDashboard from './flazzleDashboard';

const App = props => {
  return (
    <Router>
      <div>
        <Route exact path="/" render={() => <Main {...props} />} />
        <Route path="/flazzle" render={(ownProps) => <FlazzleDashboard flags={props.flags} updateFlags={props.actions.updateFlags} goBack={() => ownProps.history.push('/')} />} /> 
      </div>
    </Router>
  );
}

const Main = props => (<div className="App">
  <Link to="flazzle"><button>dashboard</button></Link>
  <Flag flag={props.flags.feature1} experimental={() => <Experimental />} stable={() => <Stable content={props.state.content} />} />
  <Flag flag={props.flags.featureStuffThings2} experimental={() => <Experimental />} />
</div>);

const Stable = props => (<span>{props.content}</span>);
const Experimental = () => (<span>SECRET STUFF GOES HERE</span>);

function mapStateToProps(state) {
  return { state: state.app, flags: state.flags }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)


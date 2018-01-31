import React from 'react';
import Modal from './modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { flazzleActions, FlazzleDashboard } from '../../lib';
import Main from '../components/main';

class App extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = { isOpen: false };
      }
    
      toggleModal = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render()
    {
        let props = this.props;
  return (
      <div>
        <button onClick={this.toggleModal}>
          Open the modal
        </button> 
        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
            <FlazzleDashboard flags={props.flags} updateFlags={props.actions.updateFlags} goBack={() => this.toggleModal()} />
            </Modal>
        <Main flags={this.props.flags} state={this.props.state} />
      </div>
  );
}
}

function mapStateToProps(state) {
  return { state: state.app, flags: state.flags }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(flazzleActions, dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)


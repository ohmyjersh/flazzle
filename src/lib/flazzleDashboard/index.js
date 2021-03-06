import React from 'react';
import PropTypes from 'prop-types';
import Feature from './feature';
import './flazzleDashboard.css';

class FlazzleDashboard extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            formChanged: false,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    getFormValues() {
        return Object.keys(this.props.flags).reduce((acc, flag) => {
            return { ...acc, ...{ [flag]: this.form[flag] && this.form[flag].checked } };
        }, {});
    }

    handleSubmit(e) {
        e.preventDefault();
        let flags = this.getFormValues();
        this.props.updateFlags(flags);
        this.props.goBack();
    }

    handleChange(event) {
        this.setState({
            formChanged: true,
        })
    }
    render() {
        let { title, flags, goBack } = this.props;
        return (
            <section className="dashboard">
                <form onChange={this.handleChange} onSubmit={this.handleSubmit} ref={form => this.form = form}>
                    <header className="dashboardHeader">
                        <button className="headerButton" type={"submit"} title="Save">Save</button>
                        <span className="featureHeader">{title && `${title} - `}Features</span>
                        <button className="headerButton" type={"button"} onClick={goBack} title="Close">Close</button>
                    </header>
                        <section className="featureList">
                            {Object.keys(flags).map((flag, i) => <Feature feature={flag} key={i} enabled={flags[flag]} />)}
                    </section>
                </form>
            </section>
        );
    }
}

FlazzleDashboard.propTypes = {
    updateFlags: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    title: PropTypes.string,
    flags: PropTypes.object.isRequired
}

FlazzleDashboard.defaultProps = {
    flags: {}
}

export default FlazzleDashboard;
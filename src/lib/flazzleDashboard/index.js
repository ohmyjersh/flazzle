import React from 'react';
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
            return { ...acc, ...{ [flag]: this.form[flag].checked } };
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
                        <button type={"submit"} title="Save">Save</button>
                        <button type={"button"} onClick={goBack} title="Close">Close</button>
                    </header>
                    <section>
                        <h1 className="featureHeader">{title && `${title} - `}Features</h1>
                        <section className="featureList">
                            {Object.keys(flags).map((flag, i) => <Feature feature={flag} key={i} enabled={flags[flag]} />)}
                        </section>
                    </section>
                </form>
            </section>
        );
    }
}

export default FlazzleDashboard;
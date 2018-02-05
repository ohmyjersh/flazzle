import React from 'react';
import Feature from './feature';
import './flazzleDashboard.css';

const sectionHeadingStyle = { padding: "5px 10px" };


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
            return { ...acc, ...{ [`${flag}`]: this.form[flag].checked } };
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
                        <button type={"submit"} style={{ border: "none", background: "transparent" }}><div style={{ width: '19px', height: '19px', cursor: 'pointer' }} title="Save" />Save</button>
                        <button type={"button"} onClick={goBack} style={{ border: "none", background: "transparent" }} title="Close">Close</button>
                    </header>
                    <section>
                        <h1 style={sectionHeadingStyle}>{title && `${title} - `}Features</h1>
                        <section style={{ backgroundColor: "#fff", margin: "10px", display: 'flex', flexWrap: 'wrap', flexDirection: 'row', alignItems:'center' }}>
                            {Object.keys(flags).map((flag, i) => <Feature feature={flag} key={i} enabled={flags[flag]} />)}
                        </section>
                    </section>
                </form>
            </section>
        );
    }
}

export default FlazzleDashboard;
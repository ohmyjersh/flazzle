import React from 'react';
import './flazzleDashboard.css';

const appSettingsStyles = {
    position: "absolute",
    top: "10px",
    left: "10px",
    right: "10px",
    backgroundColor: "rgba(204, 204, 204, 0.9)",
    height: "calc(100vh - 2vh)"
}

const appSettingStyle = { padding: "10px", display: "flex" };
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
            return {...acc, ...{[`${flag}`]:this.form[flag].checked}};
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
        let {title, flags, goBack} = this.props;
                return (
            <section style={appSettingsStyles}>
                <form onChange={this.handleChange} onSubmit={this.handleSubmit} ref={form => this.form = form}>
                    <header style={{ display: "flex", justifyContent: "space-between", padding: "10px", fontSize: "14px", backgroundColor: "rgba(254, 254, 254, 0.9)" }}>
                        <button type={"submit"} style={{ border: "none", background:"transparent"}}><div style={{width:'19px', height: '19px', cursor: 'pointer'}} title="Save" />Save</button>
                        <button type={"button"} onClick={goBack} style={{ border: "none", background:"transparent"}} title="Close">Close</button>
                    </header>
                    <section>
                        <h1 style={sectionHeadingStyle}>{title && `${title} - `}Features}</h1>
                        <section style={{ backgroundColor: "#fff", margin: "10px", display:'flex', flexWrap:'wrap', flexDirection:'rownpm' }}>
                            {Object.keys(flags).map((flag, i) => <Feature feature={flag} key={i} enabled={flags[flag]} />)}
                        </section>
                    </section>
                </form>
            </section>
        );
    }
}

const Feature = ({feature, enabled}) => {
    return(<div style={appSettingStyle}>
    <span>{unCamelCase(`${feature}`)}</span><input defaultChecked={enabled} type="checkbox" id={`${feature}`} /><label htmlFor={`${feature}`}><span className="ui"></span></label>                
</div>)}

const unCamelCase = str => str
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
        .replace(/^./, str => str.toUpperCase());

export default FlazzleDashboard;
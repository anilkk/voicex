import React from 'react';
import TextField from 'material-ui/Input';

class VoiceTextInputForm extends React.Component{

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            voiceText: ''
        };
    }

    handleChange(e) {
        this.setState({
            voiceText: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.addVoiceText(this.state.voiceText);
        this.setState({
            voiceText: ''
        });
    }

    render() {
        return (<form onSubmit={this.handleSubmit}>
                <TextField
                    id="voiceText"
                    label="voice-text"
                    placeholder="Add text to get voice"
                    fullWidth
                    onChange={this.handleChange}
                    value={this.state.voiceText}
                />
            </form>);
    }
}


export default VoiceTextInputForm;
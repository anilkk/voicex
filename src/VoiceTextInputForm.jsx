import React from 'react';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';


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
                <FormControl>
                    <InputLabel htmlFor="name-simple">Add text to get voice</InputLabel>
                    <Input
                        id="voiceText"
                        label="Hello world"
                        value={this.state.voiceText}
                        onChange={this.handleChange}
                        margin="normal"
                    />
                </FormControl>
            </form>);
    }
}


export default VoiceTextInputForm;
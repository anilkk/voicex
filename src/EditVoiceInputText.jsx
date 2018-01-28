import React from 'react';
import PropTypes from 'prop-types';
import Input from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';

class EditVoiceInputtext extends React.Component{
    constructor(props){
        // Pass props to parent class
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            voiceText: ''
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            this.setState({
                voiceText: nextProps.voiceText.text
            });
        }
    }

    handleChange(e) {
        this.setState({
            voiceText: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.update(this.state.voiceText, this.props.voiceText.id);
    }

    render() {
        // Each VoiceText
        return (<form onSubmit={this.handleSubmit} className="edit-voice-input">
                <FormControl>
                    <Input
                        id="editVoiceText"
                        type="text"
                        value={this.state.voiceText || this.props.voiceText.text}
                        onChange={this.handleChange}
                        onBlur={this.props.blur}
                    />
                </FormControl>
            </form>);
    }
}

EditVoiceInputtext.propTypes = {
    voiceText: PropTypes.objectOf(PropTypes.any).isRequired,
    update: PropTypes.func.isRequired,
    blur: PropTypes.func.isRequired

};

export default EditVoiceInputtext;
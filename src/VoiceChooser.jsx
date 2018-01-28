import React from 'react';
import { withStyles } from 'material-ui/styles';
import  Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class VoiceChooser extends React.Component{
    constructor(props){
        // Pass props to parent class
        super(props);
        this.state = {
            currentSelectedLanguage: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        window.responsiveVoice.setDefaultVoice(event.currentTarget.getAttribute('data-value'));
    }
    render() {
        return (<form autoComplete="off">
            <FormControl>
                    <InputLabel htmlFor="language-simple">Choose Language</InputLabel>
                    <Select
                        value={this.state.currentSelectedLanguage}
                        onChange={this.handleChange}
                        input={<Input name="currentSelectedLanguage" id="language-simple" />}
                        autoWidth
                    >
                        {window.responsiveVoice.getVoices().map((lang, index) => {
                            return (<MenuItem value={index} data-value={lang.name} key={index}>{lang.name}</MenuItem>);
                        })}
                    </Select>
                <FormHelperText>Some important helper text</FormHelperText>
            </FormControl>
                </form>);
    }
}

export default withStyles(styles)(VoiceChooser);
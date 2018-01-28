import React from 'react';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
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

class DeviceChooser extends React.Component{
    constructor(props){
        // Pass props to parent class
        super(props);
        this.state = {
            currentSelectedDevice: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        this.props.clickHandler(event.currentTarget.getAttribute('data-value'));
    }
    render() {
        return (<form autoComplete="off">
            <FormControl>
                <InputLabel htmlFor="anguage-simple">Choose Device</InputLabel>
                <Select
                    value={this.state.currentSelectedDevice}
                    onChange={this.handleChange}
                    input={<Input name="currentSelectedDevice" id="language-simple" />}
                    autoWidth
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={1} data-value="echodot">Amazon Alexa</MenuItem>
                    <MenuItem value={2} data-value="googlehome">Google Home</MenuItem>
                    <MenuItem value={3} data-value="homepod">Apple homepod</MenuItem>
                    <MenuItem value={4} data-value="mobile">Mobile</MenuItem>
                    <MenuItem value={5} data-value="watch">Watch</MenuItem>
                    {/*<MenuItem value={6} data-value="tv">Smart TV</MenuItem>*/}
                    <MenuItem value={7} data-value="male">Male Avatar</MenuItem>
                    <MenuItem value={8} data-value="female">Female Avatar</MenuItem>

                </Select>
                <FormHelperText>Some important helper text</FormHelperText>
            </FormControl>
        </form>);
    }
}

export default withStyles(styles)(DeviceChooser);
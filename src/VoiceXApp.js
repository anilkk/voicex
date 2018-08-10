/* global responsiveVoice */
import React from 'react';
import DeviceChooser from './DeviceChooser';
import DevicePreview from './DevicePreview';
import VoiceChooser from './VoiceChooser';
import VoiceTextInputForm from './VoiceTextInputForm';
import VoiceTextList from './VoiceTextList';
import Grid from 'material-ui/Grid';
import Switch from 'material-ui/Switch';
import { FormControlLabel, FormGroup } from 'material-ui/Form';

class VoiceXApp extends React.Component{
    constructor(props){
        // Pass props to parent class
        super(props);
        this.handleKeypress = this.handleKeypress.bind(this);
        this.handleSpeech = this.handleSpeech.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.updateLocalStorage = this.updateLocalStorage.bind(this);
        this.clearList = this.clearList.bind(this);
        this.selectDevice = this.selectDevice.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleTestModeChange = this.handleTestModeChange.bind(this);
        // Set initial state
        this.state = {
            data: JSON.parse(localStorage.getItem('data')) || [],
            testingMode: false
        }
    }

    componentDidMount () {
        // Detects clicks everywhere on the screen
        document.addEventListener('keypress', this.handleKeypress)
    }

    componentWillUnmount () {
        document.removeEventListener('keypress', this.handleKeypress)
    }

    handleKeypress (event) {
        if ((event.keyCode >= 48) && (event.keyCode <= 57) &&
            (event.target.classList.value.indexOf('form-control') === -1)) {
            this.handleSpeech(parseInt(event.key));
        }
    }

    // Add voiceText handler
    addVoiceText(val){
        this.state.data.push({text: val, id: this.state.data.length+1});
        console.log('state', this.state.data);
        this.setState({
            data: this.state.data
        });
        this.updateLocalStorage();
    }

    updateLocalStorage() {
        localStorage.setItem('data', JSON.stringify(this.state.data));
    }

    clearList() {
        this.setState({
            data: []
        }, () => {
            this.updateLocalStorage();
        })
    }

    // Handle speech
    handleSpeech(id) {
        this.state.data.filter((voiceText) => {
            if (voiceText.id === id && this.state.testingMode) return responsiveVoice.speak(voiceText.text);
        })
    }

    handleRemove (id) {
        // Filter all voiceTexts except the one to be removed
        const remainder = this.state.data.filter((voiceText) => {
            if(voiceText.id !== id) return voiceText;
        });

        this.setState({data: remainder});
        this.updateLocalStorage();
    }

    handleUpdate (value, id) {
        // Filter all voiceTexts except the one to be removed
        const remainder = this.state.data.map((voiceText) => {
            if(voiceText.id === id) {
                return {text: value, id};
            }

            return voiceText;
        });

        this.setState({data: remainder});
        this.updateLocalStorage();
    }

    handleTestModeChange(event, checked) {
        this.setState({ testingMode: checked });
    }
    selectDevice(name) {
        this.setState({
            selectedDeviceUrl: name
        });
    }

    render() {
        const {testingMode} = this.state;
        const voiceContainerClassName = testingMode? 'testing-mode-on' : '';
        // Render JSX
        return (
            <div className={voiceContainerClassName}>
                <Grid container
                      spacing={24}
                      alignItems='center'
                      direction='row'
                      justify='center'>
                    <Grid item xs={12}>
                        <Grid container justify="flex-end">
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Switch checked={testingMode} onChange={this.handleTestModeChange} aria-label="TestingModeSwitch" />
                                    }
                                    label={testingMode ? 'Testing mode on' : 'Testing mode off'}
                                />
                            </FormGroup>
                        </Grid>
                    </Grid>
                    {!testingMode && (<Grid item xs={12} sm={4} md={4}>
                        <Grid container>
                            <Grid item xs={12}>
                                <VoiceChooser />
                            </Grid>
                            <Grid item xs={12}>
                                <DeviceChooser  clickHandler={this.selectDevice} />
                            </Grid>
                        </Grid>
                    </Grid>)}
                </Grid>
                {!testingMode && (<Grid>
                    <div className="speech-bubble tri-right border round btm-left-in">
                        <div className="talk-text">
                            <VoiceTextInputForm addVoiceText={this.addVoiceText.bind(this)} />
                        </div>
                    </div>
                </Grid>)}
                <Grid>
                    <DevicePreview selectedDevice={this.state.selectedDeviceUrl} />
                </Grid>
                <Grid>
                    <VoiceTextList
                        voiceTexts={this.state.data}
                        speech={this.handleSpeech.bind(this)}
                        remove={this.handleRemove.bind(this)}
                        update={this.handleUpdate.bind(this)}
                        clearList={this.clearList.bind(this)}
                    />
                </Grid>
            </div>
        );
    }
}

export default VoiceXApp;
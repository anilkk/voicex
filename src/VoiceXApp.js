/* global responsiveVoice */
import React, { Component } from 'react';
const VoiceInputForm = ({addVoiceText}) => {
    // Input Tracker
    let input;
    // Return JSX
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            addVoiceText(input.value);
            input.value = '';
        }}>

            <input className="form-control col-md-12" placeholder="Add text to get the voice" ref={node => {
                input = node;
            }} />
            <br />
        </form>
    );
};

const VoiceText = ({voiceText, speech, remove, index}) => {
    // Each VoiceText
    return (<li className="list-group-item" onClick={() => {speech(voiceText.id)}}>
        {voiceText.id}. {voiceText.text}
        {/*<span className="btn btn-primary pull-right remove-voice-text-item-btn" onClick={(e) => {e.preventDefault(); remove(voiceText.id)}}>X</span>*/}
    </li>);
}

const VoiceTextList = ({voiceTexts, speech, remove}) => {
    // Map through the voiceTexts
    console.log('length of voiceText', voiceTexts);
    const voiceTextNode = voiceTexts.map((voiceText, i) => {

        return (<VoiceText voiceText={voiceText} key={voiceText.id} speech={speech} remove={remove} index={voiceText.id} tabindex={voiceText.id + 3}/>)
    });
    return (<div>
        <h3>{voiceTexts.length? "Click on / press key number of  the list item to trigger voice" :  ""}</h3>
        <div className="list-group" style={{marginTop:'30px'}}>{voiceTextNode}</div>
        </div>);
}

class VoiceXApp extends React.Component{
    constructor(props){
        // Pass props to parent class
        super(props);
        this.handleKeypress = this.handleKeypress.bind(this);
        this.handleSpeech = this.handleSpeech.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        // Set initial state
        this.state = {
            data: []
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
        })
    }

    // Handle speech
    handleSpeech(id) {
        this.state.data.filter((voiceText) => {
            if (voiceText.id === id) return responsiveVoice.speak(voiceText.text);
        })
    }

    handleRemove (id) {
        // Filter all voiceTexts except the one to be removed
        const remainder = this.state.data.filter((voiceText) => {
            if(voiceText.id !== id) return voiceText;
        });

        this.setState({data: remainder});
    }
    render() {
        // Render JSX
        return (
            <div className="voice-container container">
                <div className="row">
                        <VoiceInputForm addVoiceText={this.addVoiceText.bind(this)}/>
                        <VoiceTextList
                            voiceTexts={this.state.data}
                            speech={this.handleSpeech.bind(this)}
                            remove={this.handleRemove.bind(this)}
                        />
                </div>
            </div>
        );
    }
}

export default VoiceXApp;
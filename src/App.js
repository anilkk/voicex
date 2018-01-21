import React, { Component } from 'react';
import VoiceXApp from './VoiceXApp';
import logo from './voicex.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-intro">
                    <h1 className="App-title"><img src={logo} className="App-logo" alt="logo" /> Voice Interface testing</h1>
                    <VoiceXApp />
                </div>
            </div>
        );
    }
}

export default App;

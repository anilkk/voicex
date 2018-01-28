import React, { Component } from 'react';
import VoiceXApp from './VoiceXApp';
import './App.css';
import HeaderNavigation from './HeaderNavigation';

class App extends Component {

    render() {
        return (
            <div className="App mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <HeaderNavigation />
                <main className="mdl-layout__content">
                    <div className="page-content">
                        <div className="App-intro">
                            {/*<h1 className="App-title"><img src={logo} className="App-logo" alt="logo" /> Voice Interface testing</h1>*/}
                            <VoiceXApp />
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;

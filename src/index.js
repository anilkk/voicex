import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import Reboot from 'material-ui/Reboot';
// import {
//     BrowserRouter as Router,
//     Route,
//     Link
// } from 'react-router-dom'
import './index.css';
import Home from './Home';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Whoops404 from "./Whoops404";
import Testing from "./Testing";

ReactDOM.render(<div>
        {/*<ul>*/}
            {/*<li><Link to="/">Home</Link></li>*/}
            {/*<li><Link to="/App">App</Link></li>*/}
            {/*<li><Link to="/Whoops404">Whoops</Link></li>*/}
            {/*<li><Link to="/testing">testing</Link></li>*/}
        {/*</ul>*/}
        <Reboot />
        {/*<Route exact path="/" component={Home}/>*/}
        {/*<Route path="/App" component={App}/>*/}
        {/*<Route path="/Whoops404" component={Whoops404}/>*/}
        {/*<Route path="/testing" component={Testing}/>*/}
        <App />
    </div>, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import logo from './img/voicex-logo-white.svg';
import HeaderSideMenu from  './HeaderSideMenu';
import Hidden from 'material-ui/Hidden';

const styles = {
    root: {
        width: '100%',
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

const HeaderNavigation = (props) => {
    // return (
    //     <div className="android-header mdl-layout__header mdl-layout__header--waterfall">
    //     <div className="mdl-layout__header-row">
    //       <span className="android-title mdl-layout-title">
    //         <img className="voicex-logo-image" src={logo} />
    //       </span>
    //         {/* Add spacer, to align navigation to the right in desktop */}
    //         <div className="android-header-spacer mdl-layout-spacer"></div>
    //         {/* Navigation */}
    //         <div className="android-navigation-container">
    //             <nav className="android-navigation mdl-navigation">
    //                 <Link to="/" className="mdl-navigation__link mdl-typography--text-uppercase">Home</Link>
    //                 <Link to="/app" className="mdl-navigation__link mdl-typography--text-uppercase">App</Link>
    //                 <a className="mdl-navigation__link mdl-typography--text-uppercase" href="https://twitter.com/anilbms75" target="_blank">Twitter</a>
    //                 <a className="mdl-navigation__link mdl-typography--text-uppercase" href="anilkk.github.io/voicex" target="_blank">Github</a>
    //                 <a className="mdl-navigation__link mdl-typography--text-uppercase" href="mailto:anilbms75@gmail.com"  target="_blank">Contact</a>
    //             </nav>
    //         </div>
    //         <span className="android-mobile-title mdl-layout-title">
    //         <img className="voicex-logo-image" src={logo} />
    //       </span>
    //     </div>
    // </div>);
    const { classes } = props;

    return (<div>
        <AppBar position="static">
            <Toolbar>
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                    <Hidden only={['md', 'lg', 'xl']}>
                        <HeaderSideMenu/>
                    </Hidden>
                </IconButton>
                <Typography type="title" color="inherit" className={classes.flex}>
                    <img src={logo} alt="voiceX logo"/>
                </Typography>
                <Hidden only={['xs', 'sm']}>
                    <Button color="inherit" href="https://youtu.be/jiGKqkXu80g" target="_blank">Getting started</Button>
                    <Button color="inherit" href="https://github.com/anilkk/voicex" target="_blank">Github</Button>
                    <Button color="inherit" href="https://twitter.com/anilbms75" target="_blank">Twitter</Button>
                </Hidden>
            </Toolbar>
        </AppBar>
    </div>);
}

export default withStyles(styles)(HeaderNavigation);
// export default HeaderNavigation;
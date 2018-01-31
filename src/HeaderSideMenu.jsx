import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from 'material-ui/Button';
import { MenuItem, MenuList } from 'material-ui/Menu';
import Grow from 'material-ui/transitions/Grow';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import { Manager, Target, Popper } from 'react-popper';
import ClickAwayListener from 'material-ui/utils/ClickAwayListener';
import MenuIcon from 'material-ui-icons/Menu';

const styles = {
    root: {
        display: 'flex',
    },
    popperClose: {
        pointerEvents: 'none',
    },
};

class HeaderSideMenu extends React.Component {
    state = {
        open: false,
    };

    handleClick = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        const { open } = this.state;

        return (
            <div className={classes.root}>
                <Manager>
                    <Target>
                        <Button
                            aria-owns={open ? 'menu-list' : null}
                            aria-haspopup="true"
                            onClick={this.handleClick}
                            color="inherit"
                        >
                            Menu
                        </Button>
                    </Target>
                    <Popper
                        placement="bottom-start"
                        eventsEnabled={open}
                        className={classNames({ [classes.popperClose]: !open })}
                    >
                        <ClickAwayListener onClickAway={this.handleClose}>
                            <Grow in={open} id="menu-list" style={{ transformOrigin: '0 0 0' }}>
                                <Paper>
                                    <MenuList role="menu">
                                        <Button href="https://youtu.be/jiGKqkXu80g" target="_blank">Getting started</Button>
                                        <Button href="https://github.com/anilkk/voicex" target="_blank">Github</Button>
                                        <Button href="https://twitter.com/anilbms75" target="_blank">Twitter</Button>
                                    </MenuList>
                                </Paper>
                            </Grow>
                        </ClickAwayListener>
                    </Popper>
                </Manager>
            </div>
        );
    }
}

HeaderSideMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderSideMenu);

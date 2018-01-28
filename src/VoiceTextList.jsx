import React from 'react';
import VoiceListItem from './VoiceTextListItem';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import ClearIcon from 'material-ui-icons/Clear';
import List from 'material-ui/List';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});

class VoiceTextList extends React.Component{
    constructor(props){
        // Pass props to parent class
        super(props);
    }

    render() {
        const {voiceTexts, speech, remove, update, clearList} = this.props;

        let clearBtn;
        if(voiceTexts.length) {
            clearBtn = (<Button raised color="primary" onClick={clearList} className="clear-all-btn">
                Clear all
                <ClearIcon/>
            </Button>)
        }
        return (<div>
            <h3>{voiceTexts.length? "Click on / press key number of  the list item to trigger voice" :  ""}</h3>
            <div>
                {clearBtn}
            </div>
            <List>
                {voiceTexts.map((voiceText, i) => {

                    return (<VoiceListItem
                        voiceText={voiceText}
                        key={voiceText.id}
                        speech={speech}
                        remove={remove}
                        update={update}
                        index={voiceText.id}
                        tabindex={voiceText.id + 3}/>)
                })}
            </List>
        </div>);
    }
}


export default withStyles(styles)(VoiceTextList);
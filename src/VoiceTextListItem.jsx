import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import EditVoiceInput from './EditVoiceInputText';
import EditIcon from 'material-ui-icons/Edit';
import ClearIcon from 'material-ui-icons/Clear';
import SaveIcon from 'material-ui-icons/Save';

class VoiceTextListItem extends React.Component{
    constructor(props){
        // Pass props to parent class
        super(props);
        this.state = {
            editModeClassName: false
        }
        this.goToEditMode = this.goToEditMode.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onRemove = this.onRemove.bind(this);
    }

    goToEditMode(){
        this.setState({
            editModeClassName: !this.state.editModeClassName
        })
    }
    onSave(){
        this.setState({
            editModeClassName: false
        })
    }
    onRemove(e){
        const {voiceText, remove,} = this.props;
        e.preventDefault();
        remove(voiceText.id);
    }
    render() {
        const {voiceText, speech, remove, update,  index} = this.props;

        var className = (this.state.editModeClassName ? ' voice-text-item alignLeft voice-text-item-edit-mode ' : ' voice-text-item alignLeft ');
        const updateText = (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.onSave();
            update(e.target.value, voiceText.id);
        };
        // Each VoiceText
        return (<ListItem button className={className}>
                <ListItemText className="voice-text-item-text" primary={voiceText.id + '.' + voiceText.text} onClick={() => {speech(voiceText.id)}} />
                <EditIcon className="voice-text-edit-icon" onClick={this.goToEditMode}/>
                <ClearIcon className="voice-text-clear-icon" onClick={this.onRemove} />
                <EditVoiceInput voiceText={voiceText} update={update} blur={updateText}/>
                &ensp;&ensp;
                <SaveIcon className="voice-text-save-icon" onClick={updateText} />

            </ListItem>);
    }
}

export default VoiceTextListItem;
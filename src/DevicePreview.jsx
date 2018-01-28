import React from 'react';
import echodot from './img/echodot.svg';
import echo from './img/echo.svg';
import homepod from './img/homepod.svg';
import googlehome from './img/googlehome.svg';
import watch from './img/watch.svg';
import mobile from './img/mobile.svg';
import Avatar from 'avataaars';

class DevicePreview extends React.Component{
    render() {
        const images = {echodot, echo, homepod, googlehome, mobile, watch};
        const { selectedDevice }= this.props;
        let selectedDeviceDOM;

        if (selectedDevice === 'male') {
            selectedDeviceDOM = (<Avatar
                avatarStyle='Transparent'
                topType='ShortHairShortFlat'
                accessoriesType='Round'
                hairColor='Black'
                facialHairType='Blank'
                clotheType='BlazerShirt'
                eyeType='Default'
                eyebrowType='UpDown'
                mouthType='Smile'
                skinColor='Brown'
            />);
        }
        else if (selectedDevice === 'female') {
            selectedDeviceDOM = (<Avatar
                avatarStyle='Transparent'
                topType='LongHairStraight'
                accessoriesType='Blank'
                hairColor='BrownDark'
                facialHairType='Blank'
                clotheType='BlazerShirt'
                eyeType='Default'
                eyebrowType='Default'
                mouthType='Smile'
                skinColor='Light'
            />);
        }
        else if (!!selectedDevice) {
            selectedDeviceDOM = (<img src={images[selectedDevice]} alt=""/>);
        }

        return (<div className="mdl-textfield mdl-js-textfield getmdl-select">{selectedDeviceDOM}</div>);
    }
}

export default DevicePreview;
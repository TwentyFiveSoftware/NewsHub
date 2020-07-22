import React, {Component} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

import logo from '../assets/twentyfivesoftware-logo.jpg';


export default class Header extends Component {
    render() {
        return (
            <div className={'header'}>
                <img src={logo} alt={''}/>
                <div/>
                <a className="github" href={'https://github.com/TwentyFiveSoftware'}>
                    <FontAwesomeIcon icon={faGithub}/>
                    <div>Github</div>
                </a>
            </div>
        );
    }
}

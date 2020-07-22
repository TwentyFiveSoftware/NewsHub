import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExclamationTriangle, faFire, faTags} from '@fortawesome/free-solid-svg-icons';

export default function OptionsSection({onSelect, selected}) {
    return (
        <div className={'options-selection'}>
            <SelectionButton icon={faExclamationTriangle} text={'Eilmeldungen'} selected={selected === 0} click={() => onSelect(0)}/>
            <SelectionButton icon={faFire} text={'Topmeldungen'} selected={selected === 1} click={() => onSelect(1)}/>
            <SelectionButton icon={faTags} text={'Alle Artikel'} selected={selected === 2} click={() => onSelect(2)}/>
        </div>
    );
}

function SelectionButton({icon, text, selected, click}) {
    return (
        <div className={'selection-button ' + (selected ? 'selection-button--selected' : '')} onClick={() => click()}>
            <FontAwesomeIcon icon={icon}/>
            <div>{text}</div>
        </div>
    );
}

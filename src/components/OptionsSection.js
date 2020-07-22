import React from 'react';

import logoSpiegel from '../assets/logos/spiegel.png';
import logoSpiegelWhite from '../assets/logos/spiegel-white.png';
import logoSueddeutsche from '../assets/logos/sueddeutsche.png';
import logoSueddeutscheWhite from '../assets/logos/sueddeutsche-white.png';

export default function OptionsSection({onSelect, selected}) {
    return (
        <div className={'options-selection'}>
            <SourceSelectionButton images={[logoSpiegel, logoSpiegelWhite]} color={'#E54316'} selected={false}/>
            <SourceSelectionButton images={[logoSueddeutsche, logoSueddeutscheWhite]} color={'#000000'} selected={false}/>
        </div>
    );
}

function SourceSelectionButton({images, color, selected, click}) {
    return (
        <div className={'source-selection-button'} style={{backgroundColor: selected ? color : ''}} onClick={() => click()}>
            <img src={images[selected ? 1 : 0]} alt={''}/>
        </div>
    );
}

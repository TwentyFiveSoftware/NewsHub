import React from 'react';

import logoSpiegel from '../assets/logos/spiegel.png';
import logoSpiegelWhite from '../assets/logos/spiegel-white.png';
import logoSueddeutsche from '../assets/logos/sueddeutsche.png';
import logoSueddeutscheWhite from '../assets/logos/sueddeutsche-white.png';
import logoTaz from '../assets/logos/taz.png';
import logoTazWhite from '../assets/logos/taz-white.png';
import logoWelt from '../assets/logos/welt.png';
import logoWeltWhite from '../assets/logos/welt-white.png';
import logoFaz from '../assets/logos/faz.png';
import logoFazWhite from '../assets/logos/faz-white.png';
import logoZeit from '../assets/logos/zeit.png';
import logoZeitWhite from '../assets/logos/zeit-white.png';

export default function OptionsSection({onSelect, selected}) {
    return (
        <div className={'options-selection'}>
            <SourceSelectionButton images={[logoSpiegel, logoSpiegelWhite]} color={'#E54316'} selected={false}/>
            <SourceSelectionButton images={[logoSueddeutsche, logoSueddeutscheWhite]} color={'#000000'} selected={false}/>
            <SourceSelectionButton images={[logoTaz, logoTazWhite]} color={'#E20336'} selected={false}/>
            <SourceSelectionButton images={[logoWelt, logoWeltWhite]} color={'#013959'} selected={false}/>
            <SourceSelectionButton images={[logoFaz, logoFazWhite]} color={'#000000'} selected={false}/>
            <SourceSelectionButton images={[logoZeit, logoZeitWhite]} color={'#000000'} selected={false}/>
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

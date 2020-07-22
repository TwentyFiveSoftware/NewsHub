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
            <SourceSelectionButton images={[logoSpiegel, logoSpiegelWhite]} color={'#E54316'} selected={selected[0]} click={() => onSelect(0)}/>
            <SourceSelectionButton images={[logoSueddeutsche, logoSueddeutscheWhite]} color={'#000000'} selected={selected[1]} click={() => onSelect(1)}/>
            <SourceSelectionButton images={[logoTaz, logoTazWhite]} color={'#E20336'} selected={selected[2]} click={() => onSelect(2)}/>
            <SourceSelectionButton images={[logoWelt, logoWeltWhite]} color={'#013959'} selected={selected[3]} click={() => onSelect(3)}/>
            <SourceSelectionButton images={[logoFaz, logoFazWhite]} color={'#000000'} selected={selected[4]} click={() => onSelect(4)}/>
            <SourceSelectionButton images={[logoZeit, logoZeitWhite]} color={'#000000'} selected={selected[5]} click={() => onSelect(5)}/>
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

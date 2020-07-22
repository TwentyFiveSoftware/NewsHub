import React, {Component} from 'react';

export default class Article extends Component {
    render() {
        return (
            <div className={'article'}>
                <div className={'article__image'} style={{backgroundImage: 'url(https://cdn.prod.www.spiegel.de/images/1c62c2ce-194d-49cc-a2c1-e6f88807418d_w520_r2.08_fpx50_fpy40.jpg)'}}/>
                <div className={'article__bottom'}>
                    <div className={'article__title'}>Wirecard und Klaus-Dieter Fritsche: Kanzleramt muss weitere Kontakte einräumen</div>
                    <div className={'article__text'}>Wirecard hatte intensiveren Austausch mit dem Kanzleramt als bisher bekannt. Auch ein Ex-Geheimdienstbeauftragter Angela Merkels setzte sich für den mittlerweile insolventen Finanzdienstleister ein.</div>
                    {/*<div className={'article__info'}></div>*/}
                </div>
            </div>
        );
    }
}

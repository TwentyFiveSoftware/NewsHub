import React, {Component} from 'react';

export default class Article extends Component {
    render() {
        return (
            <a className={'article'} href={'https://www.spiegel.de/politik/deutschland/wirecard-und-klaus-dieter-fritsche-kanzleramt-muss-weitere-kontakte-einraeumen-a-4fe5ce20-e882-4b6c-adad-547dd4af10d9#ref=rss'}>
                <div className={'article__image'} style={{backgroundImage: 'url(https://cdn.prod.www.spiegel.de/images/1c62c2ce-194d-49cc-a2c1-e6f88807418d_w520_r2.08_fpx50_fpy40.jpg)'}}/>
                <div className={'article__bottom'}>
                    <div className={'article__title'}>Wirecard und Klaus-Dieter Fritsche: Kanzleramt muss weitere Kontakte einräumen</div>
                    <div className={'article__text'}>Wirecard hatte intensiveren Austausch mit dem Kanzleramt als bisher bekannt. Auch ein Ex-Geheimdienstbeauftragter Angela Merkels setzte sich für den mittlerweile insolventen Finanzdienstleister ein.</div>
                    <div className={'article__info'}>
                        <div>SPIEGEL</div>
                        <div>Politik | 22.07.2020 12:18</div>
                    </div>
                </div>
            </a>
        );
    }
}

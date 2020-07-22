import React from 'react';
import Article from './Article';
import {useState, useEffect} from 'react';

import ArticleInfo from '../models/ArticleInfo';

const calculateArticleColumnCount = () => Math.floor((window.innerWidth - 100) / 430);

export default function ArticleContainer() {
    const [articleColumnCount, setArticleColumnCount] = useState(calculateArticleColumnCount());

    useEffect(() => {
        const handleResize = () => setArticleColumnCount(calculateArticleColumnCount());

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });

    const articleInfo = new ArticleInfo(
        'Wirecard und Klaus-Dieter Fritsche: Kanzleramt muss weitere Kontakte einräumen',
        'https://cdn.prod.www.spiegel.de/images/1c62c2ce-194d-49cc-a2c1-e6f88807418d_w520_r2.08_fpx50_fpy40.jpg',
        'Wirecard hatte intensiveren Austausch mit dem Kanzleramt als bisher bekannt. Auch ein Ex-Geheimdienstbeauftragter Angela Merkels setzte sich für den mittlerweile insolventen Finanzdienstleister ein.',
        '22.07.2020 12:18',
        'Politik',
        'SPIEGEL',
        'https://www.spiegel.de/politik/deutschland/wirecard-und-klaus-dieter-fritsche-kanzleramt-muss-weitere-kontakte-einraeumen-a-4fe5ce20-e882-4b6c-adad-547dd4af10d9#ref=rss');

    return (
        <div className={'article-container'} style={{gridTemplateColumns: `repeat(${articleColumnCount}, max-content)`}}>
            <div className={'article-container__column'}>
                <Article articleInfo={articleInfo}/>
            </div>
            <div className={'article-container__column'}>
                <Article articleInfo={articleInfo}/>
                <Article articleInfo={articleInfo}/>
            </div>
            <div className={'article-container__column'}>
                <Article articleInfo={articleInfo}/>
                <Article articleInfo={articleInfo}/>
                <Article articleInfo={articleInfo}/>
            </div>
        </div>
    );
}

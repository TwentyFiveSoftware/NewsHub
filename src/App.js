import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';

import ArticleInfo from './models/ArticleInfo';
import Source from './models/Source';

import Header from './components/Header';
import ArticleContainer from './components/ArticleContainer';
import OptionsSection from './components/OptionsSection';

const sources = {
    spiegelTop: new Source('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.spiegel.de%2Fschlagzeilen%2Ftops%2Findex.rss',
        'Spiegel', false),
    spiegelEil: new Source('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.spiegel.de%2Fschlagzeilen%2Feilmeldungen%2Findex.rss',
        'Spiegel', false),
    spiegel: new Source('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.spiegel.de%2Fschlagzeilen%2Findex.rss',
        'Spiegel', false),
    sueddeutscheTop: new Source('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frss.sueddeutsche.de%2Frss%2FTopthemen',
        'Süddeutsche Zeitung', true, 'p', 'img'),
    sueddeutscheEil: new Source('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frss.sueddeutsche.de%2Frss%2FEilmeldungen',
        'Süddeutsche Zeitung', true, 'p'),
    sueddeutsche: new Source('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frss.sueddeutsche.de%2Fapp%2Fservice%2Frss%2Falles%2Findex.rss%3Foutput%3Drss',
        'Süddeutsche Zeitung', true, 'p', 'img'),
    taz: new Source('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftaz.de%2F!s%3D%26ExportStatus%3DIntern%26SuchRahmen%3DOnline%3Brss%2F',
        'taz', true, null, 'img'),
}

const sourceCategories = [
    [sources.spiegelTop, sources.sueddeutscheTop],
    [sources.spiegelEil, sources.sueddeutscheEil],
    [sources.spiegel, sources.sueddeutsche, sources.taz]
]

export default function App() {
    const [articles, setArticles] = useState([[], [], []]);
    const [selectedSourceCategoryIndex, setSelectedSourceCategoryIndex] = useState(0);

    useEffect(() => {
        const fetchArticles = async () => {
            let articleLists = [];

            for (let categoryIndex = 0; categoryIndex < sourceCategories.length; categoryIndex++) {
                for (let source of sourceCategories[categoryIndex]) {
                    const result = await axios(source.url);

                    if (articleLists[categoryIndex] === undefined)
                        articleLists[categoryIndex] = [];

                    articleLists[categoryIndex].push(...result.data.items.map(article => new ArticleInfo(article.title, article.enclosure.link, article.description, article.pubDate, source, article.link)));
                }

                articleLists[categoryIndex].sort((a, b) => a.date > b.date ? -1 : 1);
            }

            setArticles(articleLists);
        };

        fetchArticles();
    }, []);

    return (
        <Fragment>
            <Header/>
            <OptionsSection onSelect={index => setSelectedSourceCategoryIndex(index)} selected={selectedSourceCategoryIndex}/>
            <div className={'divider'}/>
            <ArticleContainer articles={articles[selectedSourceCategoryIndex]}/>
        </Fragment>
    );
}

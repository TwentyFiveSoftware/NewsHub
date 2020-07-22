import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';

import ArticleInfo from './models/ArticleInfo';
import Source from './models/Source';

import Header from './components/Header';
import ArticleContainer from './components/ArticleContainer';
import OptionsSection from './components/OptionsSection';

const sources = {
    spiegelEil: new Source('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.spiegel.de%2Fschlagzeilen%2Feilmeldungen%2Findex.rss',
        'Spiegel', false),
    spiegelTop: new Source('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.spiegel.de%2Fschlagzeilen%2Ftops%2Findex.rss',
        'Spiegel', false),
    spiegel: new Source('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.spiegel.de%2Fschlagzeilen%2Findex.rss',
        'Spiegel', false),
    sueddeutscheEil: new Source('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frss.sueddeutsche.de%2Frss%2FEilmeldungen',
        'Süddeutsche Zeitung', true, 'p'),
    sueddeutscheTop: new Source('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frss.sueddeutsche.de%2Frss%2FTopthemen',
        'Süddeutsche Zeitung', true, 'p', 'img'),
    sueddeutsche: new Source('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frss.sueddeutsche.de%2Fapp%2Fservice%2Frss%2Falles%2Findex.rss%3Foutput%3Drss',
        'Süddeutsche Zeitung', true, 'p', 'img'),
}

const sourceCategories = [
    [sources.spiegelEil, sources.sueddeutscheEil],
    [sources.spiegelTop, sources.sueddeutscheTop],
    [sources.spiegel, sources.sueddeutsche]
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

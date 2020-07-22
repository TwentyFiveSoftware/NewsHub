import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';

import ArticleInfo from './models/ArticleInfo';
import Source from './models/Source';

import Header from './components/Header';
import ArticleContainer from './components/ArticleContainer';
import OptionsSection from './components/OptionsSection';

const sources = {
    spiegelTop: new Source('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.spiegel.de%2Fschlagzeilen%2Ftops%2Findex.rss', 'Spiegel', true, ''),
    spiegelEil: new Source('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.spiegel.de%2Fschlagzeilen%2Feilmeldungen%2Findex.rss', 'Spiegel', true, ''),
    spiegel: new Source('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.spiegel.de%2Fschlagzeilen%2Findex.rss', 'Spiegel', true, ''),
    sueddeutscheEil: new Source('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frss.sueddeutsche.de%2Frss%2FEilmeldungen', 'Süddeutsche Zeitung', false, /<p>|<\/p>/g),
}

const sourceCategories = [
    [sources.spiegelTop],
    [sources.spiegelEil, sources.sueddeutscheEil],
    [sources.spiegel]
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

                    articleLists[categoryIndex].push(...result.data.items.map(article => new ArticleInfo(article.title, source.providesImage ? article.enclosure.link : null,
                        article.description.replace(source.replace, ''), article.pubDate, source.name, article.link)));
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

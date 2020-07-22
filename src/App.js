import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';

import ArticleInfo from './models/ArticleInfo';
import Source from './models/Source';

import Header from './components/Header';
import ArticleContainer from './components/ArticleContainer';
import OptionsSection from './components/OptionsSection';

const sources = [
    new Source('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.spiegel.de%2Fschlagzeilen%2Ftops%2Findex.rss', 'SPIEGEL', true, ''),
    new Source('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.spiegel.de%2Fschlagzeilen%2Feilmeldungen%2Findex.rss', 'SPIEGEL', true, ''),
    new Source('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.spiegel.de%2Fschlagzeilen%2Findex.rss', 'SPIEGEL', true, ''),
]

export default function App() {
    const [articles, setArticles] = useState([[], [], []]);
    const [selectedArticleSourceIndex, setSelectedArticleSourceIndex] = useState(0);

    useEffect(() => {
        const fetchArticles = async () => {
            let articleLists = [];

            for (let i = 0; i < sources.length; i++) {
                const result = await axios(sources[i].url);
                articleLists[i] = result.data.items.map(article => new ArticleInfo(article.title, sources[i].providesImage ? article.enclosure.link : null,
                    article.description.replace(sources[i].replace, ''), article.pubDate, sources[i].name, article.link));
            }

            setArticles(articleLists);
        };

        fetchArticles();
    }, []);

    return (
        <Fragment>
            <Header/>
            <OptionsSection onSelect={sourceIndex => setSelectedArticleSourceIndex(sourceIndex)} selected={selectedArticleSourceIndex}/>
            <div className={'divider'}/>
            <ArticleContainer articles={articles[selectedArticleSourceIndex]}/>
        </Fragment>
    );
}

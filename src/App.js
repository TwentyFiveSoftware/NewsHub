import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';

import ArticleInfo from './models/ArticleInfo';
import Source from './models/Source';

import Header from './components/Header';
import ArticleContainer from './components/ArticleContainer';
import OptionsSection from './components/OptionsSection';

const sources = {
    spiegel: new Source([
            'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.spiegel.de%2Fschlagzeilen%2Ftops%2Findex.rss',
            'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.spiegel.de%2Fschlagzeilen%2Findex.rss'],
        'Spiegel', false),
    sueddeutsche: new Source(['https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frss.sueddeutsche.de%2Fapp%2Fservice%2Frss%2Falles%2Findex.rss%3Foutput%3Drss'],
        'Süddeutsche Zeitung', true, 'p', 'img'),
    taz: new Source(['https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftaz.de%2F!s%3D%26ExportStatus%3DIntern%26SuchRahmen%3DOnline%3Brss%2F'],
        'taz', true, null, 'img'),
    welt: new Source(['https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.welt.de%2Ffeeds%2Ftopnews.rss'],
        'Die Welt', false),
    faz: new Source(['https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.faz.net%2Frss%2Faktuell%2F'],
        'faz', true, 'p', 'img'),
    zeit: new Source(['https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnewsfeed.zeit.de%2Findex'],
        'Die Zeit', true, null, 'img'),
}

export default function App() {
    const [articles, setArticles] = useState([]);
    const [selectedSources, setSelectedSources] = useState([true, true, false, false, false, false]);

    useEffect(() => {
        const fetchArticles = async () => {
            let fetchedArticles = [];

            for (let source of Object.values(sources)) {
                for (let url of source.urls) {
                    const result = await axios(url);
                    fetchedArticles.push(...result.data.items.map(article => new ArticleInfo(article.title, article.enclosure.link, article.description, article.pubDate, source, article.link)));
                }
            }

            fetchedArticles.sort((a, b) => a.date > b.date ? -1 : 1);
            setArticles(fetchedArticles);
        };

        fetchArticles();
    }, []);

    return (
        <Fragment>
            <Header/>
            <OptionsSection selected={selectedSources} onSelect={clickedIndex => {
                let newSelectedSources = [...selectedSources];
                newSelectedSources[clickedIndex] = !newSelectedSources[clickedIndex];
                setSelectedSources(newSelectedSources)
            }}/>
            <div className={'divider'}/>
            <ArticleContainer articles={articles}/>
        </Fragment>
    );
}

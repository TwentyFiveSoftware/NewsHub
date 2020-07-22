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
        'spiegel.de', false),
    sueddeutsche: new Source(['https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frss.sueddeutsche.de%2Fapp%2Fservice%2Frss%2Falles%2Findex.rss%3Foutput%3Drss'],
        'sueddeutsche.de', true, 'p', 'img'),
    taz: new Source(['https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftaz.de%2F!s%3D%26ExportStatus%3DIntern%26SuchRahmen%3DOnline%3Brss%2F'],
        'taz.de', true, null, 'img'),
    welt: new Source(['https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.welt.de%2Ffeeds%2Ftopnews.rss'],
        'welt.de', false),
    faz: new Source(['https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.faz.net%2Frss%2Faktuell%2F'],
        'faz.de', true, 'p', 'img'),
    zeit: new Source(['https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnewsfeed.zeit.de%2Findex'],
        'zeit.de', true, null, 'img'),
}

export default function App() {
    const [articles, setArticles] = useState([]);
    const [selectedSources, setSelectedSources] = useState([true, true, false, false, false, false]);

    useEffect(() => {
        const fetchArticles = async () => {
            let fetchedArticles = [];

            for (let i = 0; i < Object.values(sources).length; i++) {
                let source = Object.values(sources)[i];

                for (let url of source.urls) {
                    const result = await axios(url);
                    fetchedArticles.push(...result.data.items.map(article => new ArticleInfo(article.title, article.enclosure.link, article.description, article.pubDate, source, article.link, i)));
                }
            }

            fetchedArticles.sort((a, b) => a.date > b.date ? -1 : 1);
            setArticles(fetchedArticles);
        };

        fetchArticles();

        if (localStorage.getItem('selectedSources') !== null) {
            let savedSelectedSources = JSON.parse(localStorage.getItem('selectedSources'));

            if (savedSelectedSources.filter(s => s).length === 0) {
                savedSelectedSources[0] = true;
                savedSelectedSources[1] = true;
            }

            setSelectedSources(savedSelectedSources);
        }

    }, []);

    let visibleArticles = articles.filter(article => selectedSources[article.sourceIndex]);

    return (
        <Fragment>
            <Header/>
            <OptionsSection selected={selectedSources} onSelect={clickedIndex => {
                let newSelectedSources = [...selectedSources];
                newSelectedSources[clickedIndex] = !newSelectedSources[clickedIndex];
                setSelectedSources(newSelectedSources)
                localStorage.setItem('selectedSources', JSON.stringify(newSelectedSources));
            }}/>
            <div className={'divider'}/>
            <ArticleContainer articles={visibleArticles}/>
        </Fragment>
    );
}

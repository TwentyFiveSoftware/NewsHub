import React, {useState, useEffect} from 'react';
import axios from 'axios';

import ArticleInfo from './models/ArticleInfo';

import Header from './components/Header';
import ArticleContainer from './components/ArticleContainer';
import OptionsSection from './components/OptionsSection';

const articleListUrls = [
    'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.spiegel.de%2Fschlagzeilen%2Ftops%2Findex.rss',
    'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.spiegel.de%2Fschlagzeilen%2Feilmeldungen%2Findex.rss',
    'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.spiegel.de%2Fschlagzeilen%2Findex.rss'
]

export default function App() {
    const [articles, setArticles] = useState([[], [], []]);
    const [selectedArticleListIndex, setSelectedArticleListIndex] = useState(0);

    useEffect(() => {
        const fetchArticles = async () => {
            let articleLists = [];

            for (let i = 0; i < articleListUrls.length; i++) {
                const result = await axios(articleListUrls[i]);
                articleLists[i] = result.data.items.map(article => new ArticleInfo(article.title, article.enclosure.link, article.description, article.pubDate, article.categories.join(', '), 'SPIEGEL', article.link));
            }

            setArticles(articleLists);
        };

        fetchArticles();
    }, []);

    return (
        <div className="app">
            <Header/>
            <OptionsSection onSelect={listIndex => setSelectedArticleListIndex(listIndex)} selected={selectedArticleListIndex}/>
            <ArticleContainer articles={articles[selectedArticleListIndex]}/>
        </div>
    );
}

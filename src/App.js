import React, {useState, useEffect} from 'react';
import axios from 'axios';

import ArticleInfo from './models/ArticleInfo';

import Header from './components/Header';
import ArticleContainer from './components/ArticleContainer';

export default function App() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            const result = await axios('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.spiegel.de%2Fschlagzeilen%2Ftops%2Findex.rss');
            setArticles(result.data.items.map(article => new ArticleInfo(article.title, article.enclosure.link, article.description, article.pubDate, article.categories.join(', '), 'SPIEGEL', article.link)));
        };

        fetchArticles();
    }, []);

    return (
        <div className="app">
            <Header/>
            <ArticleContainer articles={articles}/>
        </div>
    );
}

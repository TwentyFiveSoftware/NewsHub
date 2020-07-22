import React from 'react';
import Article from './Article';
import {useState, useEffect} from 'react';

const calculateArticleColumnCount = () => Math.floor((window.innerWidth - 100) / 430);

export default function ArticleContainer() {
    const [articleColumnCount, setArticleColumnCount] = useState(calculateArticleColumnCount());

    useEffect(() => {
        const handleResize = () => setArticleColumnCount(calculateArticleColumnCount());

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });

    return (
        <div className={'article-container'} style={{gridTemplateColumns: `repeat(${articleColumnCount}, max-content)`}}>
            <div className={'article-container__column'}>
                <Article/>
            </div>
            <div className={'article-container__column'}>
                <Article/>
                <Article/>
            </div>
            <div className={'article-container__column'}>
                <Article/>
                <Article/>
                <Article/>
            </div>
        </div>
    );
}

import React, {useState, useEffect} from 'react';
import Article from './Article';

const calculateArticleColumnCount = () => Math.floor((window.innerWidth - 100) / 430);

export default function ArticleContainer({articles}) {
    const [articleColumnCount, setArticleColumnCount] = useState(calculateArticleColumnCount());

    useEffect(() => {
        const handleResize = () => setArticleColumnCount(calculateArticleColumnCount());

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });


    return (
        <div className={'article-container'} style={{gridTemplateColumns: `repeat(${articleColumnCount}, max-content)`}}>
            <div className={'article-container__column'}>
                {articles.map((article, index) =>
                    <Article articleInfo={article} key={index}/>)
                }
            </div>
        </div>
    );
}

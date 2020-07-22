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

    let articleColumns = [];
    for (let i = 0; i < articleColumnCount; i++) articleColumns[i] = [];
    articles.forEach((article, index) => articleColumns[index % articleColumnCount].push(article))

    return (
        <div className={'article-container'} style={{gridTemplateColumns: `repeat(${articleColumnCount}, max-content)`}}>
            {articleColumns.map((column, cIndex) =>
                <div className={'article-container__column'} key={cIndex}>
                    {column.map((article, rIndex) =>
                        <Article articleInfo={article} key={rIndex}/>)
                    }
                </div>
            )}
        </div>
    );
}

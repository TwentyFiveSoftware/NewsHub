import React from 'react';

export default function Article({articleInfo}) {
    return (
        <a className={'article'} href={articleInfo.url}>
            <div className={'article__image'} style={{backgroundImage: `url(${articleInfo.image})`}}/>
            <div className={'article__bottom'}>
                <div className={'article__title'}>{articleInfo.title}</div>
                <div className={'article__text'}>{articleInfo.text}</div>
                <div className={'article__info'}>
                    <div>{articleInfo.source}</div>
                    <div>{articleInfo.category} | {articleInfo.date}</div>
                </div>
            </div>
        </a>
    );
}

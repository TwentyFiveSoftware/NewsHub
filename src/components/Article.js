import React, {Fragment} from 'react';

export default function Article({articleInfo}) {
    return (
        <a className={'article'} href={articleInfo.url}>
            {articleInfo.image != null ?
                <div className={'article__image'} style={{backgroundImage: `url(${articleInfo.image})`}}/> :
                <Fragment/>
            }
            <div className={'article__bottom'}>
                <div className={'article__title'}>{articleInfo.title}</div>
                <div className={'article__text'}>{articleInfo.text}</div>
                <div className={'article__info'}>
                    <div>{articleInfo.source.name}</div>
                    <div>{articleInfo.dateString}</div>
                </div>
            </div>
        </a>
    );
}

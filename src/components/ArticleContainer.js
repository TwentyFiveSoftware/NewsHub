import React, {Component} from 'react';
import Article from './Article';

export default class ArticleContainer extends Component {
    render() {
        let articleColumnCount = 3;

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
}

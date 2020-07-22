import React, {Component} from 'react';
import Article from './Article';

export default class ArticleContainer extends Component {
    render() {
        return (
            <div className={'article-container'}>
                <Article/>
            </div>
        );
    }
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Article extends Component {

    onDetails = (e) => {
    
    }
    render() {
        const { source, author, title, description, url, urlToImage, publishedAt, content } = this.props.article;

        return (
            <div className='row'>
                <img className='row-image' src={urlToImage} onClick={this.onDetails}></img>
                <div className='row-title'>
                    <a href={{url}}>{title}</a>
                </div>
                <div className='row-description'>
                    {description}
                </div>
                <div className='row-details'>
                    {/* <a href={'http://www.' + source.name}>{source.name}</a> | {author} | {timeAgo(publishedAt)} */}
                </div>
            </div>
        );
    }
}

Article.propTypes = {
    article: PropTypes.any.isRequired
};

export default Article;

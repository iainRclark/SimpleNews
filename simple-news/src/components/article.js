import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Article extends Component {

    onDetails = (e) => {
    
    }
    render() {
        const { source, author, title, description, url, urlToImage, publishedAt, content } = this.props.article;

        return (
            <div className='row p-1 bg-slate-700 text-white rounded-lg m-1'>
                <img className='row-image rounded-lg' src={urlToImage} onClick={this.onDetails}></img>
                <div className='row-info'>
                    <a href={{url}} className='text-lg font-semibold'>{title}</a>
                    <div className='text-sm'>
                        {description}
                    </div>
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

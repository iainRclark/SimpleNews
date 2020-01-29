import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Details extends Component {
    render() {
        const { source, author, title, description, url, urlToImage, publishedAt, content } = this.props.article;

        return (
            <div></div>
        );
    }
}

Details.propTypes = {
    article: PropTypes.any.isRequired
};

export default Details;

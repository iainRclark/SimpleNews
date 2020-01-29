import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Article from './article';
import Filters from './filters';
import axios from '../../node_modules/axios/dist/axios';
import InfiniteScroll from 'react-infinite-scroll-component';

class Articles extends Component {
    state = {
        articles: [],
        totalResults: 0,
        status: '',
        params: {},
        pageSize: 60,
        page: 0
    }

    componentDidMount() {
        this.searchData();
    }

    searchData(filters = {}) {
        const { params } = this.state;
        
        filters.search ? params.q = filters.search : delete params.q;

        if (filters.country && filters.country !== '') {
            params.country = filters.country;
        }

        if (filters.language && filters.language !== '') {
            params.language = filters.language;
        }

        if (filters.category && filters.category !== '') {
            params.category = filters.category;
        }

        //Need atleast 1 search param
        if (Object.entries(params).length === 0) {
            params.language = 'en';
        }

        //Pagination init
        params.pageSize = this.state.pageSize;
        params.page = this.state.page;

        this.setState({ params: params })

        const clearArticles = true;

        this.requestData(clearArticles);

        console.log(filters)
        console.log(params)
    }

    requestData(clearArticles = false) {
        const base = 'https://newsapi.org/v2/top-headlines';
        const headers = {'X-Api-Key': '3f617fb6fdb941bf9cb612257f682723'};
        const { params } = this.state;

        axios.get(base, { params: params, headers: headers })
        .then(res => {
            params.page++;

            if (clearArticles) {
                this.setState({
                    articles: res.data.articles,
                    totalResults: res.data.totalResults,
                    status: res.data.status,
                    params: params
                })
            } else {
                this.setState(
                    prev => ({
                        articles: [...prev.articles, ...res.data.articles],
                        totalResults: res.data.totalResults,
                        status: res.data.status,
                        params: params
                    })
                )
            }
        })
    }

    onFilterChange(filters) {
        this.searchData(filters);
    }

    render() {
        return (
            <Fragment>
                <Filters onFilterChange={this.onFilterChange.bind(this)}/> 
                <InfiniteScroll 
                    next={this.requestData.bind(this)}
                    dataLength={this.state.articles.length}
                    hasMore={this.state.totalResults > this.state.articles.length}
                    loader={<h4>Loading...</h4>}
                    endMessage={<h3>End of data</h3>}>
                    {this.state.articles.map((article, index) => (
                        <Article key={index} article={article}/>
                    ))}
                </InfiniteScroll>
            </Fragment>
        );
    }
}

export default Articles;

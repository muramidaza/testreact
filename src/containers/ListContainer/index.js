import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import ListPosts from '../../components/ListPosts';

import { loadCountPages } from './actions';

import { POST_IN_PAGE } from '../../config';

import {
	selectPostsData,
	selectPostsInPage,
	selectCurrentPage,
} from '../../selectors';

const dividPostsByPages = (posts, postsInPage) => {
	let arrayChunks = [];
	const amountChunks = Math.ceil(posts.length / postsInPage);
	if (amountChunks == 0) return [[]];
	for (let i = 0; i < amountChunks; i++) {
		arrayChunks[i] = posts.slice(
			i * postsInPage,
			i * postsInPage + postsInPage
		);
	}
	return arrayChunks;
};

class ListContaiter extends React.Component {
	render() {
		const preparedPostsData = dividPostsByPages(
			this.props.postsData,
			POST_IN_PAGE
		);

		const countPages = preparedPostsData.length || 0;

		this.props.handleLoadCountPages(countPages);

		const postsInCurrentPage = preparedPostsData[this.props.currentPage] || [];

		return <ListPosts posts={postsInCurrentPage} />;
	}
}

const mapStateToProps = store => {
	return {
		postsData: selectPostsData(store),
		currentPage: selectCurrentPage(store),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleLoadCountPages: countPages => {
			dispatch(loadCountPages(countPages));
		},
	};
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(ListContaiter)
);

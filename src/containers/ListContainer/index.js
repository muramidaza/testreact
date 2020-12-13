import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import PostsList from '../../components/PostsList';

import { loadCountPages } from './actions';

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
			this.props.postsInPage
		);

		const countPages = preparedPostsData.length || 0;

		this.props.handleLoadCountPages(countPages);

		const postsInCurrentPage =
			preparedPostsData[this.props.currentPage] || [];

		return (
			<PostsList
				posts={postsInCurrentPage}
			/>
		);
	}
}

const mapStateToProps = store => {
	return {
		postsData: selectPostsData(store),
		postsInPage: selectPostsInPage(store),
		currentPage: selectCurrentPage(store),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleLoadCountPages: countPages => {
			dispatch(loadCountPages(countPages));
		}
	};
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(ListContaiter)
);

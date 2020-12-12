import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { loadData } from './actions';
import { selectSelectedPost, selectSelectedPostID, selectCommentsLoading, selectCommentsError, selectCommentsSuccess, selectCommentsData } from '../../selectors';

import OnePostPage from '../../components/OnePostPage';
import EmptyPostPage from '../../components/EmptyPostPage';

class OnePostPageContainer extends React.Component {
	componentDidMount() {
		this.props.onFetchCommentsData(
			this.props.url,
			this.props.postsInPage
		);
	}

	handleGoBack = event => {
		event.preventDefault();
		this.props.history.goBack();
	};

	render() {
		if (this.props.selectedPost) {
			return (
				<OnePostPage
					post={this.props.selectedPost}
					onGoBack={this.handleGoBack}
				/>
			);
		} else {
			return <EmptyPostPage onGoBack={this.handleGoBack} />;
		}
	}
}

const mapStateToProps = store => {
	return {
		selectedPost: selectSelectedPost(store),
		selectedPostID: selectSelectedPostID(store),
		loading: selectCommentsLoading(store),
		error: selectCommentsError(store),
		success: selectCommentsSuccess(store),
		commentsData: selectCommentsData(store)				
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onFetchCommentsData: (
			url,
			postID
		) => {
			dispatch(
				loadData(url, postID)
			);
		},
	};
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(OnePostPageContainer)
);

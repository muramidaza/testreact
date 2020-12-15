import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { selectSelectedPost } from '../../selectors';

import OnePostPage from '../../components/OnePostPage';
import EmptyPostPage from '../../components/EmptyPostPage';
import ListCommentsContainer from '../ListCommentsContainer';

import './index.css';

class OnePostPageContainer extends React.Component {

	handleGoBack = event => {
		event.preventDefault();
		this.props.history.goBack();
	};

	render() {
		if (this.props.selectedPost) {
			return (
				<div className="onePostPage">
					<OnePostPage
						post={this.props.selectedPost}
						onGoBack={this.handleGoBack}
					/>
					<ListCommentsContainer
						url={this.props.url}
						PostID={this.props.selectedPost.id}			
					/>
				</div>
			);
		} else {
			return <EmptyPostPage onGoBack={this.handleGoBack} />;
		}
	}
}

const mapStateToProps = store => {
	return {
		selectedPost: selectSelectedPost(store),			
	};
};

export default withRouter(
	connect(mapStateToProps)(OnePostPageContainer)
);

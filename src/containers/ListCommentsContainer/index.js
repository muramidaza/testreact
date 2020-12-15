import React from 'react';
import { connect } from 'react-redux';

import { loadData } from './actions';
import {
	selectCommentsLoading,
	selectCommentsError,
	selectCommentsSuccess,
	selectCommentsData,
} from '../../selectors';
import { URL } from '../../config';

import ListComments from '../../components/ListComments';

class ListCommentsContainer extends React.Component {
	componentDidMount() {
		this.props.onFetchCommentsData(URL, this.props.PostID);
	}

	render() {
		return (
			<ListComments
				loading={this.props.loading}
				error={this.props.error}
				comments={this.props.commentsData}
			/>
		);
	}
}

const mapStateToProps = store => {
	return {
		loading: selectCommentsLoading(store),
		error: selectCommentsError(store),
		success: selectCommentsSuccess(store),
		commentsData: selectCommentsData(store),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onFetchCommentsData: (url, postID) => {
			dispatch(loadData(url, postID));
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ListCommentsContainer);

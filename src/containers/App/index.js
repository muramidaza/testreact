import React from 'react';
import { connect } from 'react-redux';

import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import ListPostsPage from '../ListPostsPage';
import OnePostPageContainer from '../OnePostPageContainer';
import Page404 from '../../components/Page404';

import InfoPage from '../../components/InfoPage';

import { loadData } from './actions';
import { selectLoading, selectError, selectSuccess } from '../../selectors';
import { URL } from '../../config';

class App extends React.Component {
	componentDidMount() {
		this.props.onFetchData(URL, this.props.postsInPage);
	}

	render() {
		if (this.props.loading) {
			return (
				<InfoPage title="Загрузка постов" message="немного подождите..." />
			);
		}

		if (this.props.error) {
			return <InfoPage title="Ошибка загрузки" message={this.props.error} />;
		}

		if (this.props.success)
			return (
				<ConnectedRouter history={this.props.appHistory}>
					<>
						<Switch>
							<Route
								exact
								path={['/', '/posts', '/posts/:page']}
								render={() => <ListPostsPage />}
							/>
							<Route
								exact
								path="/post/:id"
								render={() => <OnePostPageContainer />}
							/>
							<Route render={() => <Page404 />} />
						</Switch>
					</>
				</ConnectedRouter>
			);

		return (
			<InfoPage title="Подготовка к загрузке" message="немного подождите..." />
		);
	}
}

const mapStateToProps = store => {
	return {
		loading: selectLoading(store),
		error: selectError(store),
		success: selectSuccess(store),
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onFetchData: (url, postInPage) => {
			dispatch(loadData(url, postInPage));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

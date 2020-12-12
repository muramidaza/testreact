import React from 'react';

import Header from '../../components/Header';
import ListContainer from '../ListContainer';
import Paginator from '../Paginator';

import './index.css';

export default class ListPostsPage extends React.Component {
	render() {
		return (
			<div className="listPostsPage">
				<div className="listPostsPage__headerSection">
					<Header />
				</div>
				<div className="listPostsPage__mainSection">
					<ListContainer />
					<Paginator />
				</div>
			</div>
		);
	}
}

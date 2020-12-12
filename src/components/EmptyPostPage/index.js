import React from 'react';

import './index.css';

export default class EmptyProductPage extends React.PureComponent {
	render() {
		return (
			<div className="emptyPage">
				<p className="emptyPage__title">
					<button className="emptyPage__linkBack" onClick={this.props.onGoBack}>
						&#8592;
					</button>
					Пост не найден
				</p>
			</div>
		);
	}
}

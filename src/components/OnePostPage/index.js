import React from 'react';

import './index.css';

export default class OnePostPage extends React.PureComponent {
	render() {

		return (
			<div className="onePostPageBlock">
				<div className="onePostPageBlock__header">
					<p className="onePostPageBlock__headerLabel">
						<button className="onePostPageBlock__headerLinkBack" onClick={this.props.onGoBack}>
							&#8592;
						</button>
						{this.props.post.title}
					</p>
				</div>
				<div className="onePostPageBlock__body">
					{this.props.post.body}
				</div>
			</div>
		);
	}
}

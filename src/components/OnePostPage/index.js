import React from 'react';

import './index.css';

export default class OnePostPage extends React.PureComponent {
	render() {

		return (
			<div className='onePostPage'>
				<div>
					<button className="onePostPage__linkBack" onClick={this.props.onGoBack}>
						&#8592;
					</button>
					{this.props.post.title}
				</div>
				<div>
					{this.props.post.body}
				</div>
				<div>
					<p>Комментарии</p>

				</div>
			</div>
		);
	}
}

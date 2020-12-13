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
					{this.props.commentsData.length > 0 &&
						<ul className="onePostPage__commentsList">
							{this.props.commentsData.map((comments, i) => (
								<div className="postsList__cardPost" key={i}>
									<div>
										<p className="onePostPage__commentsList_name">{comments.name}</p>
										<p className="onePostPage__commentsList_body">{comments.body}</p>
										<p className="onePostPage__commentsList_email">{comments.email}</p>
									</div>
								</div>
							))}
						</ul>
					}
					{this.props.loading && 
						<div className="onePostPage__commentsList_loading">Комментарии загружаются</div>
					}
					{this.props.error && 
						<div className="onePostPage__commentsList_error">this.props.error</div>
					}								
				</div>
			</div>
		);
	}
}

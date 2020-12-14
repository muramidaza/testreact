import React from 'react';

import './index.css';

export default class OnePostPage extends React.PureComponent {
	render() {

		return (
			<div className='onePostPage'>
				<div className="onePostPage__header">
					<p className="onePostPage__headerLabel">
						<button className="onePostPage__headerLinkBack" onClick={this.props.onGoBack}>
							&#8592;
						</button>
						{this.props.post.title}
					</p>
				</div>
				<div className="onePostPage__body">
					{this.props.post.body}
				</div>
				<div  className="onePostPage__commentsBlock">
					<p className="commentsBlock__commentsLabel">Комментарии</p>
					{this.props.commentsData.length > 0 &&
						<div className="commentsBlock__commentsList">
							{this.props.commentsData.map((comments, i) => (
								<div className="commentsList__cardComment" key={i}>
									<div>
										<p className="commentsList__cardCommentName">{comments.name}</p>
										<p className="commentsList__cardCommentBody">{comments.body}</p>
										<p className="commentsList__cardCommentEmail"><a href={'mailto:' + comments.email}>{comments.email}</a></p>
									</div>
								</div>
							))}
						</div>
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

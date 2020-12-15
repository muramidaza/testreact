import React from 'react';

import './index.css';

export default class ListComments extends React.PureComponent {
	render() {

		return (
			<div  className="listComments">
				<p className="listComments__commentsLabel">Комментарии</p>
				{this.props.comments.length > 0 &&
					<div className="listComments__list">
						{this.props.comments.map((comment, i) => (
							<div className="commentsList__cardComment" key={i}>
								<div>
									<p className="listComments__cardCommentName">{comment.name}</p>
									<p className="listComments__cardCommentBody">{comment.body}</p>
									<p className="listComments__cardCommentEmail"><a href={'mailto:' + comment.email}>{comment.email}</a></p>
								</div>
							</div>
						))}
					</div>
				}
				{this.props.comments.length == 0 &&	
					<div className="listComments__empty">Комментариев нет</div>
				}
				{this.props.loading && 
					<div className="listComments__loading">Комментарии загружаются...</div>
				}
				{this.props.error && 
					<div className="listComments__error">this.props.error</div>
				}								
			</div>
		);
	}
}

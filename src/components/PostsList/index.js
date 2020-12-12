import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

export default class PostsList extends React.Component {
	render() {
		return (
			<ul className="postsList">
				{this.props.posts.map((post, i) => (
					<div className="postsList__cardPost" key={i}>
						<div>
							<p className="postsList__cardPost_number">{post.id}</p>
							<p className="postsList__cardPost_header">{post.title}</p>
							<p className="postsList__cardPost_body">{post.body}</p>
						</div>
						<Link className={'postsList__linkPost'} to={'/post/' + i}>
							Посмотреть
						</Link>
					</div>
				))}
			</ul>
		);
	}
}

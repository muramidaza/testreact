import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

export default class ListPosts extends React.Component {
	render() {
		return (
			<div className="listPosts">
				{this.props.posts.length > 0 &&
					this.props.posts.map((post, i) => (
						<div className="listPosts__cardPost" key={i}>
							<div>
								<p className="listPosts__cardPost_number">- {post.id} -</p>
								<p className="listPosts__cardPost_header">{post.title}</p>
								<p className="listPosts__cardPost_body">{post.body}</p>
							</div>
							<Link className="listPosts__linkPost" to={"/post/" + i}>
								Посмотреть
							</Link>
						</div>
					))
				}
				{this.props.posts.length == 0 &&
					<div className="listPosts__empty">Постов нет</div>
				}
			</div>
		);
	}
}

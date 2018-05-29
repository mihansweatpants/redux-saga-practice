import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';

class Posts extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id} className="post">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts.posts,
    newPost: state.posts.post,
    deletePost: state.posts.posts
});

export default connect(mapStateToProps, { fetchPosts })(Posts);

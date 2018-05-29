import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';

import PostCard from '../PostCard';

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
            <PostCard key={post.id} title={post.title} body={post.body} />
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

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchPosts } from './actions';

import PostCard from '../PostCard';
import Placeholder from '../Placeholder';

class Posts extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost && !nextProps.error) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        let posts;
        if (this.props.posts) {
            posts = this.props.posts.map(post => (
                <PostCard key={post.id} title={post.title} body={post.body} />
            ));
        }

        return (
            <div>
                {this.props.fetching ? (
                    <Placeholder text="Fetching" sz="3rem" />
                ) : (
                    <h2 style={{ fontSize: '3rem' }}>Posts</h2>
                )}
                {this.props.error ? (
                    <h2 style={{ color: 'orangered' }}>
                        Unable to fetch posts:<br />
                        {this.props.error}
                    </h2>
                ) : (
                    posts
                )}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts())
});

const mapStateToProps = state => ({
    posts: state.posts.posts,
    fetching: state.posts.fetching,
    error: state.posts.fetchError,
    newPost: state.posts.newPost
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchPosts } from './actions';
import selectors from './selectors';

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

const mapStateToProps = state => ({
    posts: selectors.getPosts(state),
    fetching: selectors.getPostFetching(state),
    error: selectors.getError(state),
    newPost: selectors.getNewPost(state)
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

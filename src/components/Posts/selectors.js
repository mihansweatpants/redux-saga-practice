export default {
    getPosts: state => state.posts.posts,
    getPostFetching: state => state.posts.fetching,
    getError: state => state.posts.fetchError,
    getNewPost: state => state.posts.newPost
};

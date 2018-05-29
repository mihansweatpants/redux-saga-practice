import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from './actions';

class PostForm extends Component {
    state = {
        title: '',
        body: ''
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        };

        this.props.addPost(post);
    };

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="">Title:</label>
                        <br />
                        <input
                            type="text"
                            name="title"
                            value={this.props.title}
                            onChange={this.onChange}
                        />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="">Body:</label>
                        <br />
                        <textarea
                            type="text"
                            name="body"
                            value={this.props.body}
                            onChange={this.onChange}
                        />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default connect(null, { addPost })(PostForm);

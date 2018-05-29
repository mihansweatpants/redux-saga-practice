import React, { Component } from 'react';
import styled from 'styled-components';
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
                <Form onSubmit={this.onSubmit}>
                    <Title>
                        <label htmlFor="">Title:</label>
                        <br />
                        <input
                            type="text"
                            name="title"
                            value={this.props.title}
                            onChange={this.onChange}
                        />
                    </Title>
                    <Body>
                        <label htmlFor="">Body:</label>
                        <br />
                        <textarea
                            type="text"
                            name="body"
                            value={this.props.body}
                            onChange={this.onChange}
                        />
                    </Body>
                    <Btn type="submit">Submit</Btn>
                </Form>
            </div>
        );
    }
}

const Form = styled.form`
    margin-bottom: 20px;
`;

const Title = styled.div`
    margin-bottom: 20px;
`;
const Body = styled.div`
    margin-bottom: 20px;
`;
const Btn = styled.button``;

export default connect(null, { addPost })(PostForm);

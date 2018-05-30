import React, { Component } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { addPost } from './actions';

import Placeholder from '../Placeholder';

class PostForm extends Component {
    state = {
        title: null,
        body: null,
        validationErr: null
    };

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
            validationErr: null
        });
    };

    onSubmit = event => {
        event.preventDefault();

        if (this.state.title && this.state.body) {
            const post = {
                title: this.state.title,
                body: this.state.body
            };
            this.props.addPost(post);
        } else
            this.setState({
                ...this.state,
                validationErr: 'Posts must have title and body'
            });
    };

    displayMessage = () => {
        if (this.state.validationErr) {
            return (
                <h1 style={{ color: 'orangered' }}>
                    Unable to submit:<br />
                    {this.state.validationErr}
                </h1>
            );
        } else if (this.props.error) {
            return (
                <h1 style={{ color: 'orangered' }}>
                    Unable to submit:<br />
                    {this.props.error}
                </h1>
            );
        } else if (this.props.submitting) {
            return <Placeholder text="Submitting" sz="2rem" />;
        } else return <h1>Add post</h1>;
    };

    render() {
        return (
            <Container>
                {this.displayMessage()}
                <Form onSubmit={this.onSubmit}>
                    <Title>
                        <label htmlFor="">Title:</label>
                        <br />
                        <input
                            type="text"
                            name="title"
                            autoComplete="off"
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
            </Container>
        );
    }
}

const Container = styled.div`
    width: 50%;
    margin: auto;
    text-align: center;
    @media (max-width: 900px) {
        width: 100%;
        text-align: left;
    }
`;

const Form = styled.form`
    font-size: 1.2rem;
    margin-bottom: 20px;

    h1 {
        margin-top: 0;
    }
`;

const Title = styled.div`
    margin-bottom: 20px;

    input {
        width: 100%;
        height: 20px;
        border: 3px solid lightgray;
        padding: 5px;
        outline: none;
        font-size: 1.2rem;
    }

    input:focus {
        border: 3px solid lightblue;
    }
`;
const Body = styled.div`
    margin-bottom: 20px;

    textarea {
        width: 100%;
        height: 120px;
        border: 3px solid lightgray;
        padding: 5px;
        outline: none;
        font-size: 1.2rem;
    }

    textarea:focus {
        border: 3px solid lightblue;
    }
`;

const Btn = styled.button`
    border-radius: 3px;
    padding: 1rem 0;
    min-width: 11rem;
    border: 2px solid white;
    transition: 0.3s ease-in-out;
    font-size: 1.2rem;
    display: inline-block;
    margin-right: 20px;

    &:hover {
        color: white;
        background: lightblue;
    }
`;

const mapStateToProps = state => ({
    error: state.posts.submitError,
    submitting: state.posts.submitting
});

export default connect(mapStateToProps, { addPost })(PostForm);

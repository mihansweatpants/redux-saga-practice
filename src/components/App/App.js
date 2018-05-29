import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

import Posts from '../Posts';
import PostForm from '../PostForm';

export default () => (
    <App>
        <Header>
            <img src={logo} alt="" />
            <h1>Welcome to React</h1>
        </Header>
        <PostForm />
        <Divider />
        <Posts />
    </App>
);

const App = styled.div`
    width: 90%;
    margin: auto;
`;

const Header = styled.header`
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
    margin-bottom: 40px;

    h1 {
        font-size: 1.5em;
    }

    img {
        animation: App-logo-spin infinite 20s linear;
        height: 80px;
    }

    @keyframes App-logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

const Divider = styled.div`
    height: 1px;
    width: 100%;
    background: lightgray;
`;

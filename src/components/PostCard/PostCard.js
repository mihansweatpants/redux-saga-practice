import React from 'react';
import styled from 'styled-components';

export default ({ title, body }) => (
    <Card>
        <h3>{title}</h3>
        <p>{body}</p>
    </Card>
);

const Card = styled.div`
    background: lightgray;
    margin: 15px 0 15px 0;
    padding: 15px;
    transition: 0.2s ease-out;
    border-radius: 3px;

    &:hover {
        cursor: pointer;
        background: lightblue;
        transform: translate(0, -5px);
    }
`;

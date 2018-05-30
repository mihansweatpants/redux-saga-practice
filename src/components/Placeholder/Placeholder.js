import React from 'react';
import styled from 'styled-components';

export default ({ text, sz }) => {
    return (
        <Placeholder>
            <h2 style={{ fontSize: sz }}>
                {text}
                <span>.</span>
                <span>.</span>
                <span>.</span>
            </h2>
        </Placeholder>
    );
};

const Placeholder = styled.div`
    @keyframes blink {
        0% {
            opacity: 0.2;
        }
        20% {
            opacity: 1;
        }
        100% {
            opacity: 0.2;
        }
    }

    h2 span {
        animation-name: blink;
        animation-duration: 1.4s;
        animation-iteration-count: infinite;
        animation-fill-mode: both;
    }

    h2 span:nth-child(2) {
        animation-delay: 0.2s;
    }

    h2 span:nth-child(3) {
        animation-delay: 0.4s;
    }
`;

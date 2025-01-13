import React from 'react';
import styled from 'styled-components';

const EditFlashCard = () => {
return (
    <StyledWrapper>
    <button className="button">Edit Flash Cards</button>
    </StyledWrapper>
);
}

const StyledWrapper = styled.div`
.button {
    padding: 1em 2em;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
    color: #5e41de99;
    transition: all 1000ms;
    font-size: 15px;
    position: relative;
    overflow: hidden;
    outline: 2px solid #5e41de99;
    width: 250px;
}

button:hover {
    color: #ffffff;
    transform: scale(1.1);
    outline: 2px solid #5e41de99;
    box-shadow: 4px 5px 17px -4px #5e41de99;
}

button::before {
    content: "";
    position: absolute;
    left: -50px;
    top: 0;
    width: 0;
    height: 100%;
    background-color: #5e41de99;
    transform: skewX(45deg);
    z-index: -1;
    transition: width 1000ms;
}

button:hover::before {
    width: 250%;
}`;

export default EditFlashCard;

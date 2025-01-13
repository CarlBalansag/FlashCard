import React from 'react';
import styled from 'styled-components';

const Hamburger = () => {
return (
<StyledWrapper>
    <div className="background">
    <button className="menu__icon">
        <span />
        <span />
        <span />
    </button>
    </div>
</StyledWrapper>
);
}

const StyledWrapper = styled.div`
button {
border: none;
background: none;
padding: 0;
margin: 0;
cursor: pointer;
font-family: inherit;
}


/* <style for menu__icon> ======== */
.menu__icon {
width: 32px;
height: 32px;
padding: 4px;
}

.menu__icon span {
display: block;
width: 100%;
height: 0.125rem;
border-radius: 2px;
background-color: #000000;
box-shadow: 0 .5px 2px 0 hsla(0, 0%, 0%, .2);
transition: background-color .4s;
position: relative;
}

.menu__icon span+span {
margin-top: .375rem;
}

.menu__icon span:nth-child(1) {
animation: ease .8s menu-icon-top-2 forwards;
}

.menu__icon span:nth-child(2) {
animation: ease .8s menu-icon-scaled-2 forwards;
}

.menu__icon span:nth-child(3) {
animation: ease .8s menu-icon-bottom-2 forwards;
}

.menu__icon:hover span:nth-child(1) {
animation: ease .8s menu-icon-top forwards;
}

.menu__icon:hover span:nth-child(2) {
animation: ease .8s menu-icon-scaled forwards;
}

.menu__icon:hover span:nth-child(3) {
animation: ease .8s menu-icon-bottom forwards;
background-color: #000000;
}

@keyframes menu-icon-top {
0% {
    top: 0;
    transform: rotate(0);
}

50% {
    top: .5rem;
    transform: rotate(0);
}

100% {
    top: .5rem;
    transform: rotate(45deg);
}
}

@keyframes menu-icon-top-2 {
0% {
    top: .5rem;
    transform: rotate(45deg);
}

50% {
    top: .5rem;
    transform: rotate(0);
}

100% {
    top: 0;
    transform: rotate(0);
}
}

@keyframes menu-icon-bottom {
0% {
    bottom: 0;
    transform: rotate(0);
}

50% {
    bottom: .5rem;
    transform: rotate(0);
}

100% {
    bottom: .5rem;
    transform: rotate(135deg);
}
}

@keyframes menu-icon-bottom-2 {
0% {
    bottom: .5rem;
    transform: rotate(135deg);
}

50% {
    bottom: .5rem;
    transform: rotate(0);
}

100% {
    bottom: 0;
    transform: rotate(0);
}
}

@keyframes menu-icon-scaled {
50% {
    transform: scale(0);
}

100% {
    transform: scale(0);
}
}

@keyframes menu-icon-scaled-2 {
0% {
    transform: scale(0);
}

50% {
    transform: scale(0);
}

100% {
    transform: scale(1);
}
}`;

export default Hamburger;

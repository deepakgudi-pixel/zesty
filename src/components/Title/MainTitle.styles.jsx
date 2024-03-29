import styled from 'styled-components';

export const Title = styled.header`

`

export const Heading = styled.h1`
font-size: 10vw;
margin: 0 20px;
line-height: 1.4;

@media (max-width: 768px){
    font-size: 80px;
}

`;

export const Description = styled.h2`
bottom: 0;
position: fixed;
font-size: 24px;
line-height: 1.2;
margin: 0 20px 20px;
font-weight: normal;

@media (max-width: 768px){
    font-size: 20px;
    position: relative;
}

`;
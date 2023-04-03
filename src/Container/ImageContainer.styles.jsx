import styled from "styled-components";

export const ImageContainer = styled.figure`
  background-color: #fff;
  margin: 0;
  position: relative;
  width: 50vw;
  overflow: hidden;
`;

export const Caption = styled.figcaption`
  bottom: 0;
  color: #fff;
  font-size: 36px;
  position: absolute;
  text-align: center;
  width: 100%;
  z-index: 1;
  padding: 20px 0;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  object-position: center;
  transition: all 0.5s;
`;

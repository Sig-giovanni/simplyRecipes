import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Wrapper = styled.section`
  background: aliceblue;
  img {
    width: 200px;
  }
`;

const Images = () => {
  return (
    <Wrapper>
      <StaticImage
        src="../assets/images/big.jpg"
        alt="food"
        placeholder="blurred"
      />
      <h2>gatsby image</h2>
    </Wrapper>
  );
};

export default Images;

/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import styled from "styled-components";

import Box from "src/components/Box/Box";
import WelcomeBanner from "src/components/WelcomeBanner/WelcomeBanner";

import { pxToRem } from "src/styles/px-to-rem";
import { useLocalContent } from "src/lib/hooks/use-local-content";

import image from "src/assets/bdetails1.d8c3c8e3.jpg";

import * as S from "./LocalLandingPage.styled";

const Space = styled.div`
  height: ${pxToRem(80)};
`;

const LocalLandingPage = () => {
  const { country } = useLocalContent();

  return (
    <>
      <WelcomeBanner />

      <Box direction="row" className="px-12 lg:px-20 md:px-18 sm:px-16 my-20">
        <S.ContentContainer justifyContent="center">
          <S.Title>
            <span>Health insurance for</span> {country} <span>with great discount</span>
          </S.Title>

          <S.Content>Get coverage in 2 minutes. Cancel monthly.</S.Content>

          <S.ButtonContainer direction="row">
            <S.Button variant="primary">Get Covered</S.Button>
            <S.Button variant="secondary">Learn More</S.Button>
          </S.ButtonContainer>
        </S.ContentContainer>

        <S.Logo direction="row" justifyContent="flex-end" flex={1}>
          <img
            src={image.src}
            alt="logo"
            className="w-[777px] h-[500px] object-cover rounded-[8px]"
          />
        </S.Logo>
      </Box>
    </>
  );
};

export default LocalLandingPage;

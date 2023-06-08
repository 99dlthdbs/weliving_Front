import { FunctionComponent } from "react";
import styled, { keyframes } from "styled-components";
type BackgroundStarProps = {};

// 투명도 조절 키프레임
const starKeyFrame = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

const cloudKeyFrame1 = keyframes`
`;

const cloudKeyFrame2 = keyframes`
`;

const BackgroundStar: FunctionComponent<BackgroundStarProps> = () => {
  return (
    <BackgroundStarContainer>
      <ImageCloud1
        src="https://wliv.kr/img/onbording/section1-1.svg"
        style={{ bottom: "12px", right: "-220px", opacity: "60%" }}
      />
      <ImageCloud2
        src="https://wliv.kr/img/onbording/section1-2.svg"
        style={{ bottom: "400px", left: "-66px", opacity: "60%" }}
      />
      {/* 별 시작 */}
      <ImageStar1
        src="https://wliv.kr/img/onbording/will-star-2.svg"
        style={{
          width: "22px",
          height: "22px",
          top: "60px",
          left: "9%",
        }}
      />
      <ImageStar2
        src="https://wliv.kr/img/onbording/will-star-1.svg"
        style={{
          width: "26px",
          height: "26px",
          top: "40px",
          left: "20%",
        }}
      />
      <ImageStar3
        src="https://wliv.kr/img/onbording/will-star-2.svg"
        style={{
          width: "12px",
          height: "12px",
          top: "90px",
          left: "26%",
        }}
      />
      <ImageStar4
        src="https://wliv.kr/img/onbording/will-star-4.svg"
        style={{
          width: "22px",
          height: "22px",
          top: "35px",
          left: "35%",
        }}
      />
      <ImageStar5
        src="https://wliv.kr/img/onbording/will-star-1.svg"
        style={{
          width: "22px",
          height: "22px",
          top: "80px",
          left: "35%",
        }}
      />
      <ImageStar6
        src="https://wliv.kr/img/onbording/will-star-1.svg"
        style={{
          width: "22px",
          height: "22px",
          top: "125px",
          left: "30%",
        }}
      />
      <ImageStar7
        src="https://wliv.kr/img/onbording/will-star-2.svg"
        style={{
          width: "22px",
          height: "22px",
          top: "110px",
          left: "42%",
        }}
      />
      <ImageStar8
        src="https://wliv.kr/img/onbording/will-star-2.svg"
        style={{
          width: "22px",
          height: "22px",
          top: "60px",
          left: "46%",
        }}
      />
      <ImageStar9
        src="https://wliv.kr/img/onbording/will-star-3.svg"
        style={{
          width: "9px",
          height: "11px",
          top: "40px",
          left: "55%",
        }}
      />
      <ImageStar10
        src="https://wliv.kr/img/onbording/will-star-2.svg"
        style={{
          width: "12px",
          height: "12px",
          top: "70px",
          left: "60%",
        }}
      />
      <ImageStar11
        src="https://wliv.kr/img/onbording/will-star-4.svg"
        style={{
          width: "22px",
          height: "22px",
          top: "90px",
          left: "54%",
        }}
      />
      <ImageStar12
        src="https://wliv.kr/img/onbording/will-star-4.svg"
        style={{
          width: "13px",
          height: "13px",
          top: "125px",
          left: "60%",
        }}
      />
      <ImageStar13
        src="https://wliv.kr/img/onbording/will-star-4.svg"
        style={{
          width: "22px",
          height: "22px",
          top: "45px",
          left: "70%",
        }}
      />
      <ImageStar14
        src="https://wliv.kr/img/onbording/will-star-4.svg"
        style={{
          width: "22px",
          height: "22px",
          top: "55px",
          left: "80%",
        }}
      />
      <ImageStar15
        src="https://wliv.kr/img/onbording/will-star-1.svg"
        style={{
          width: "14px",
          height: "14px",
          top: "90px",
          left: "69%",
        }}
      />
      <ImageStar16
        src="https://wliv.kr/img/onbording/will-star-3.svg"
        style={{
          width: "12px",
          height: "12px",
          top: "85px",
          left: "88%",
        }}
      />
      <ImageStar17
        src="https://wliv.kr/img/onbording/will-star-3.svg"
        style={{
          width: "12px",
          height: "12px",
          top: "100px",
          left: "80%",
        }}
      />
      <ImageStar18
        src="https://wliv.kr/img/onbording/will-star-1.svg"
        style={{
          width: "14px",
          height: "14px",
          top: "130px",
          left: "88%",
        }}
      />
      <ImageStar19
        src="https://wliv.kr/img/onbording/will-star-4.svg"
        style={{
          width: "27px",
          height: "27px",
          top: "125px",
          left: "70%",
        }}
      />
      {/* 별 끝 */}
    </BackgroundStarContainer>
  );
};

export default BackgroundStar;

const firstKeyFrame = keyframes`
  0% { opacity: 0; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

const BackgroundStarContainer = styled.div`
  animation: ${firstKeyFrame} 6s ease-in;
`;

const ImageStar1 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 5s ease-in-out infinite;
`;

const ImageStar2 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 4s ease-in-out infinite;
`;

const ImageStar3 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 3s ease-in-out infinite;
`;

const ImageStar4 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 2s ease-in-out infinite;
`;

const ImageStar5 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 3s ease-in-out infinite;
`;

const ImageStar6 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 5s ease-in-out infinite;
`;

const ImageStar7 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 6s ease-in-out infinite;
`;

const ImageStar8 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 4s ease-in-out infinite;
`;

const ImageStar9 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 7s ease-in-out infinite;
`;

const ImageStar10 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 4s ease-in-out infinite;
`;

const ImageStar11 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 2s ease-in-out infinite;
`;

const ImageStar12 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 5s ease-in-out infinite;
`;

const ImageStar13 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 3s ease-in-out infinite;
`;

const ImageStar14 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 5s ease-in-out infinite;
`;

const ImageStar15 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 2s ease-in-out infinite;
`;

const ImageStar16 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 2s ease-in-out infinite;
`;

const ImageStar17 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 4s ease-in-out infinite;
`;

const ImageStar18 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 6s ease-in-out infinite;
`;

const ImageStar19 = styled.img`
  position: absolute;
  animation: ${starKeyFrame} 8s ease-in-out infinite;
`;

const ImageCloud1 = styled.img`
  position: absolute;
  animation: ${cloudKeyFrame1} 75s ease-in;
`;

const ImageCloud2 = styled.img`
  position: absolute;
  animation: ${cloudKeyFrame2} 95s ease-in;
`;

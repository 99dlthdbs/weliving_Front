import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Typewriter from "react-ts-typewriter";

// 부모 컴포넌트와 통신

interface MainContentSecondWordFirstProps {
  incrementSectionStep: () => void;
}

//

const MainContentSecondWordFirst: React.FC<MainContentSecondWordFirstProps> = ({
  incrementSectionStep,
}) => {
  // const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  // 모달창 클릭시

  const [isModalClick] = useState(false);
  const [, setIsModalClickSecond] = useState(0);

  useEffect(() => {
    if (isModalClick) {
      const timeout0 = setTimeout(() => {
        setCurrentStep(1);
      }, 4000);

      setTimeout(() => {
        setIsModalClickSecond(1);
      }, 3000);
      return () => clearTimeout(timeout0);
    }
  }, [isModalClick]);

  // 스크립트 춢력

  useEffect(() => {
    if (currentStep === 1) {
      const timeout2 = setTimeout(() => {
        setCurrentStep(2);
        setIsModalClickSecond(1);
      }, 3500);

      return () => clearTimeout(timeout2);
    }
  }, [currentStep]);

  useEffect(() => {
    if (currentStep === 2) {
      const timeout3 = setTimeout(() => {
        setCurrentStep(3);
      }, 3000);

      return () => clearTimeout(timeout3);
    }
  }, [currentStep]);

  useEffect(() => {
    if (currentStep === 3) {
      const timeout4 = setTimeout(() => {
        setCurrentStep(4);
      }, 500);

      return () => clearTimeout(timeout4);
    }
  }, [currentStep]);

  useEffect(() => {
    if (currentStep === 4) {
      const timeout4 = setTimeout(() => {
        setCurrentStep(5);
      }, 2500);

      return () => clearTimeout(timeout4);
    }
  }, [currentStep]);

  // 스크립트 춢력

  return (
    <BackgroundStarContainer>
      {/* 배경 출력 */}

      <FireContainer>
        <FireLeft>
          <div className="main-fire" />
          <div className="particle-fire" />
        </FireLeft>
        <FireCenter>
          <div className="main-fire" />
          <div className="particle-fire" />
        </FireCenter>
        <FireRight>
          <div className="main-fire" />
          <div className="particle-fire" />
        </FireRight>
        <FireBottom>
          <div className="main-fire" />
        </FireBottom>
        <ImageFire
          src="https://wliv.kr/img/onbording/section2-3.svg"
          style={{
            width: "168px",
            height: "180px",
            bottom: "-35px ",
            left: "-30px",
            opacity: "100%",
            zIndex: "-1",
          }}
        />
      </FireContainer>
      {/* 문자 첫 출력 */}
      <MainContentFirstContentContainer>
        {currentStep >= 1 && (
          <MainContentFirstMainContent
            className={currentStep === 1 ? "active" : ""}
            style={{
              opacity: currentStep === 1 ? 1 : 0.5,
              transition: "opacity 800ms, visibility 800ms",
            }}
          >
            우리는 종종 <br></br> 자신을 부정적으로 바라볼 때가 있어요.
          </MainContentFirstMainContent>
        )}
        {currentStep >= 2 && (
          <MainContentFirstMainContent
            className={currentStep === 2 ? "active" : ""}
            style={{
              opacity: currentStep >= 2 ? 1 : 0.5,
              transition: "opacity 800ms, visibility 800ms",
            }}
          >
            <Typewriter
              text={`하지만 지금 이 순간 만큼은 \n 당신이 가장 소중한 존재에요.`}
              cursor={false}
              speed={65}
            />
          </MainContentFirstMainContent>
        )}

        {currentStep >= 3 && (
          <MainContentFirstMainContent
            className={currentStep === 3 ? "active" : ""}
            style={{
              opacity: currentStep === 3 ? 1 : 1,
              transition: "opacity 800ms, visibility 800ms",
            }}
          ></MainContentFirstMainContent>
        )}
      </MainContentFirstContentContainer>
      {currentStep >= 4 && (
        <LogInSignUpContainer>
          <LogInButton
            className={currentStep === 4 ? "active" : ""}
            style={{
              opacity: currentStep === 4 ? 1 : 1,
              transition: "opacity 800ms, visibility 800ms",
            }}
            onClick={incrementSectionStep}
          >
            다음
          </LogInButton>
        </LogInSignUpContainer>
      )}
    </BackgroundStarContainer>
  );
};

export default MainContentSecondWordFirst;

const BackgroundStarContainer = styled.div``;

const MainContentFirstContentContainer = styled.div`
  padding: 0 5px;
  position: absolute;
  top: 180px;
`;

const fadeAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const MainContentFirstMainContent = styled.p`
  margin-bottom: 16px;

  font-weight: 700;
  font-size: 18px;
  line-height: 150%;

  span {
    margin-bottom: 16px;
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    white-space: pre-line;
  }

  &.active {
    animation: ${fadeAnimation} 1200ms ease-in-out;
  }
`;

const LogInSignUpContainer = styled.div`
  padding: 0 0px;
  position: absolute;
  bottom: 0;
  width: 90%;

  display: flex;
  flex-direction: column;
`;

const LogInButton = styled.button`
  width: 100%;
  height: 56px;

  margin-bottom: 12px;

  background-color: var(--main-color);
  border-radius: 4px;

  font-weight: 700;

  &.active {
    animation: ${fadeAnimation} 1200ms ease-in-out;
  }
`;

// const OptionsContainer = styled.span`
//   padding-bottom: 24px;
// `;

// 불 효과

const KeyFrameSection2_3 = keyframes`
`;

const ImageFire = styled.img`
  position: absolute;
  animation: ${KeyFrameSection2_3} 85s ease-in;
`;

const scaleUpDown = keyframes`
  0%,
  100% {
    transform: scaleY(1) scaleX(1);
  }
  50%,
  90% {
    transform: scaleY(1.1);
  }
  75% {
    transform: scaleY(0.95);
  }
  80% {
    transform: scaleX(0.95);
  }
`;

const shake = keyframes`
  0%,
  100% {
    transform: skewX(0) scale(1);
  }
  50% {
    transform: skewX(5deg) scale(0.9);
  }
`;

const particleUp = keyframes`
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    top: -100%;
    transform: scale(0.5);
  }
`;

const glow = keyframes`
  0%,
  100% {
    background-color: #FFA500;
  }
  50% {
    background-color: #DAA520;
  }
`;

const FireContainer = styled.div`
  position: absolute;
  top: calc(74% - 50px);
  left: calc(48% - 50px);
  width: 110px;
  height: 125px;
  background-color: transparent;
  margin-left: auto;
  margin-right: auto;
  z-index: 15;
`;

const FireCenter = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  animation: ${scaleUpDown} 3s ease-out infinite both;

  .main-fire {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(
      farthest-corner at 10px 0,
      #d43300 0%,
      #ef5a00 95%
    );
    transform: scaleX(0.8) rotate(45deg);
    border-radius: 0 40% 60% 40%;
    filter: drop-shadow(0 0 10px #d43322);
  }

  .particle-fire {
    position: absolute;
    top: 60%;
    left: 45%;
    width: 10px;
    height: 10px;
    background-color: #ef5a00;
    border-radius: 50%;
    filter: drop-shadow(0 0 10px #d43322);
    animation: ${particleUp} 2s ease-out infinite both;
  }
`;

const FireRight = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  animation: ${shake} 2s ease-out infinite both;

  .main-fire {
    position: absolute;
    top: 15%;
    right: 0%;
    width: 80%;
    height: 80%;
    background-color: #ef5a00;
    transform: scaleX(0.8) rotate(45deg);
    border-radius: 0 40% 60% 40%;
    filter: drop-shadow(0 0 10px #d43322);
  }

  .particle-fire {
    position: absolute;
    top: 45%;
    left: 50%;
    width: 15px;
    height: 15px;
    background-color: #ef5a00;
    transform: scaleX(0.8) rotate(45deg);
    border-radius: 50%;
    filter: drop-shadow(0 0 10px #d43322);
    animation: ${particleUp} 2s ease-out infinite both;
  }
`;

const FireLeft = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  animation: ${shake} 3s ease-out infinite both;

  .main-fire {
    position: absolute;
    top: 15%;
    left: 0%;
    width: 80%;
    height: 80%;
    background-color: #ef5a00;
    transform: scaleX(0.8) rotate(45deg);
    border-radius: 0 40% 60% 40%;
    filter: drop-shadow(0 0 10px #d43322);
  }

  .particle-fire {
    position: absolute;
    top: 10%;
    left: 20%;
    width: 10%;
    height: 10%;
    background-color: #ef5a00;
    border-radius: 50%;
    filter: drop-shadow(0 0 10px #d43322);
    animation: ${particleUp} 3s infinite ease-out both;
  }
`;

const FireBottom = styled.div`
  .main-fire {
    position: absolute;
    top: 30%;
    left: 20%;
    width: 75%;
    height: 75%;
    background-color: #ff7800;
    transform: scaleX(0.8) rotate(45deg);
    border-radius: 0 40% 100% 40%;
    filter: blur(10px);
    animation: ${glow} 2s ease-out infinite both;
  }
`;

import { FunctionComponent, useState } from "react";
import CommonContentContainer from "../Common/CommonContentContainer";
import styled, { css } from "styled-components";
import TheMoon from "./TheMoon";
import { useNavigate } from "react-router-dom";
import CheckBox from "../Common/CheckBox";
import { sendMessage } from "../../apis/users/sendMessage";
import { verifyMessage } from "../../apis/users/verifyMessage";

// type YourHelpProps = {};

const YourHelp: FunctionComponent = () => {
  /** 인증번호 발송 눌렀을 때 */
  const [isSended, setIsSended] = useState<boolean>(false);

  /** 버튼 활성화 */
  const [isActive, setIsActive] = useState<boolean>(false);
  const [phoneInput, setPhoneInput] = useState<string>("");
  const [verifyInput, setVerifyInput] = useState<string>("");

  const navigate = useNavigate();

  // text to format phone number 000-0000-0000
  const phoneConverter = (phoneNumber: string) => {
    const number = phoneNumber.trim().replace(/[^0-9]/g, "");

    if (number.length < 4) return number;
    if (number.length < 7) return number.replace(/(\d{3})(\d{1})/, "$1-$2");
    if (number.length < 11)
      return number.replace(/(\d{3})(\d{3})(\d{1})/, "$1-$2-$3");
    return number.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
  };

  const sendAuthNumber = () => {
    const phoneRegex = /^01([016789])-?([0-9]{3,4})-?([0-9]{4})$/;
    if (!phoneRegex.test(phoneInput)) {
      alert("휴대전화 번호를 정확히 입력해주세요.");
      return;
    }

    setIsSended(true);

    const result = sendMessage(phoneInput);
    console.log(result);
  };

  const verifyAuthNumber = () => {
    setIsActive(true);
    const result = verifyMessage(phoneInput, verifyInput);
    console.log(result);
  };

  const phoneInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phone = phoneConverter(e.target.value);
    setPhoneInput(phone);
  };

  const onChangeVerifyInputHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = e.target;
    setVerifyInput(value);
  };

  const buttonHandler = () => {
    navigate("/viewmyletter");
  };

  return (
    <CommonContentContainer
      topSpacing="0"
      yPadding="2rem"
      h="100%"
      xPadding="5%"
    >
      <YourHelpContainer>
        <YourHelpTopContainer>
          <ImageCloud1
            src="https://wliv.kr/img/getanswergpt/getanswergpt-background.svg"
            style={{
              width: "100%",
              height: "100%",
              top: "25px",
              rotate: "30deg",
              opacity: "60%",
            }}
          />
          <ImageCloud1
            src="https://wliv.kr/img/getanswergpt/getanswergpt-background.svg"
            style={{
              width: "100%",
              height: "100%",
              top: "-300px",
              rotate: "30deg",
            }}
          />
          <ImageCloud1
            src="https://wliv.kr/img/onbording/star-7.svg"
            style={{
              width: "165px",
              height: "43px",
              bottom: "206px",
              right: "-65px",
            }}
          />
          <ImageCloud1
            src="https://wliv.kr/img/onbording/star-7.svg"
            style={{
              width: "165px",
              height: "43px",
              bottom: "336px",
              left: "-25px",
            }}
          />
          <ImageCloud1
            src="https://wliv.kr/img/onbording/star-7.svg"
            style={{
              width: "134px",
              height: "34px",
              bottom: "226px",
              left: "60px",
            }}
          />
          <ImageCloud1
            src="https://wliv.kr/img/onbording/star-7.svg"
            style={{
              width: "265px",
              height: "66px",
              bottom: "296px",
              right: "-65px",
            }}
          />

          <TheMoonContainer>
            <TheMoon />
          </TheMoonContainer>
          <YourHelpTopTitle>당신에게 도움이 되고 싶어요</YourHelpTopTitle>
          <YourHelpTopDescription>
            연락처를 남겨주시면
            <br />
            글귀, 에세이와 같은 컨텐츠를 제공해드려요
          </YourHelpTopDescription>
          <YoutHelpForm>
            <YourHelpInputForm>
              <YourHelpInputBox>
                <YourHelpInput
                  onChange={phoneInputChangeHandler}
                  value={phoneInput}
                  maxLength={13}
                  type="text"
                  placeholder="휴대전화 번호 입력"
                />
              </YourHelpInputBox>
              <YourHelpInputButton onClick={sendAuthNumber}>
                인증번호 발송
              </YourHelpInputButton>
            </YourHelpInputForm>
          </YoutHelpForm>
          {isSended && (
            <YourHelpInputForm>
              <YourHelpInputBox>
                <YourHelpInput
                  onChange={onChangeVerifyInputHandler}
                  value={verifyInput}
                  type="number"
                  placeholder="인증번호 입력"
                />
              </YourHelpInputBox>
              {isActive ? (
                <YourHelpInputButtonFinish>인증완료</YourHelpInputButtonFinish>
              ) : (
                <YourHelpInputButton onClick={verifyAuthNumber}>
                  인증번호 확인
                </YourHelpInputButton>
              )}
            </YourHelpInputForm>
          )}
          {isActive && (
            <CheckBoxContainer>
              <CheckBox isChecked={true} />
              <CheckBoxText>인증성공!</CheckBoxText>
            </CheckBoxContainer>
          )}
        </YourHelpTopContainer>
        <ButtonGroupContainer>
          <ButtonGroupButtonOutline
            onClick={isActive ? buttonHandler : undefined}
            isActive={isActive}
          >
            안 받기
          </ButtonGroupButtonOutline>
          <ButtonGroupButtonFiiled
            onClick={isActive ? buttonHandler : undefined}
            isActive={isActive}
          >
            연락받기
          </ButtonGroupButtonFiiled>
        </ButtonGroupContainer>
      </YourHelpContainer>
    </CommonContentContainer>
  );
};

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 4px;
`;

const CheckBoxText = styled.span`
  font-size: 14px;
  font-weight: 300;
  margin-left: 8px;
  margin-top: -2px;
`;

const YourHelpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const TheMoonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonGroupContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;

const ButtonGroupButton = css`
  width: 100%;
  padding: 1rem;
  font-weight: bold;
`;

const YourHelpTopContainer = styled.div`
  padding-top: 5rem;
`;

const YourHelpTopTitle = styled.div`
  margin-top: 1.5rem;
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  text-align: center;
`;

const YourHelpTopDescription = styled.div`
  margin-top: 6px;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  text-align: center;
  color: #cbcbcb;
`;

const YoutHelpForm = styled.div`
  margin-top: 40px;
`;

const YourHelpInputForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const YourHelpInputBox = styled.div`
  border: 1px solid #db0fdb;
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-top-left-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem;
  background-color: #160118;
  z-index: 5;
`;

const YourHelpInput = styled.input`
  width: 100%;
  font-weight: 300;
`;

const YourHelpInputButton = styled.button`
  padding: 0rem;
  white-space: nowrap;
  background-color: #f3bcf2;
  color: black;
  border-top-right-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
  min-width: 30%;
  font-weight: 500;
  z-index: 5;
`;

const YourHelpInputButtonFinish = styled.button`
  padding: 1rem;
  white-space: nowrap;
  background-color: #db0fdb;
  color: white;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.3rem;
  min-width: 30%;
  font-weight: 500;
`;

interface ButtonGroupButtonProps {
  isActive: boolean;
}

const ButtonGroupButtonOutline = styled.button<ButtonGroupButtonProps>`
  border: 1px solid ${({ isActive }) => (isActive ? "#db0fdb" : "#5b2950")};
  color: ${({ isActive }) => (isActive ? "#db0fdb" : "#5b2950")};
  border-radius: 0.25rem;
  ${ButtonGroupButton};
`;

const ButtonGroupButtonFiiled = styled.button<ButtonGroupButtonProps>`
  color: ${({ isActive }) => (isActive ? "#ffffff" : "#ffffff50")};
  background-color: ${({ isActive }) => (isActive ? "#db0fdb" : "#5b2950")};
  border: none;
  border-radius: 0.25rem;
  ${ButtonGroupButton};
`;

const ImageCloud1 = styled.img`
  position: absolute;
  z-index: 0;
  pointer-events: none;
`;

export default YourHelp;

import { FunctionComponent } from "react";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isValidPostState } from "./atoms/isValidPostAtom";
type WriteLetterHeaderProps = {};

const WriteLetterHeader: FunctionComponent<WriteLetterHeaderProps> = () => {
  const navigate = useNavigate();
  const [isValidPost] = useRecoilState(isValidPostState);

  const onClickGoBackButtonHandler = () => {
    navigate("/");
  };

  return (
    <WriteLetterHeaderContainer>
      <GoBackButton onClick={onClickGoBackButtonHandler}>
        <img src="https://wliv.kr/img/arrow-left-icon.svg" alt="뒤로 가기" />
      </GoBackButton>
      <PostButtonGropContainer>
        <SaveButton isValidPost={isValidPost}>저장</SaveButton>
        <SubmitButton isValidPost={isValidPost}>등록</SubmitButton>
      </PostButtonGropContainer>
    </WriteLetterHeaderContainer>
  );
};

export default WriteLetterHeader;

const WriteLetterHeaderContainer = styled.header`
  height: 56px;
  position: relative;

  display: flex;
  align-items: center;
`;

const GoBackButton = styled.button`
  position: absolute;
  left: 0px;
`;

const PostButtonGropContainer = styled.div`
  position: absolute;
  right: 0px;

  width: 122px;
  display: flex;
  justify-content: space-between;
`;

interface IButtonTypes {
  isValidPost: boolean;
}

const SaveButton = styled.button<IButtonTypes>`
  width: 57px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: ${({ isValidPost }) =>
    isValidPost ? "1px solid var(--main-color)" : "1px solid #5B2950"};
  border-radius: 4px;

  font-weight: 700;
  font-size: 14px;
  color: ${({ isValidPost }) => (isValidPost ? "var(--white)" : "#867388")};
`;

const SubmitButton = styled.button<IButtonTypes>`
  width: 57px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  background-color: ${({ isValidPost }) =>
    isValidPost ? "var(--main-color)" : "#5B2950"};

  font-weight: 700;
  font-size: 14px;
  color: ${({ isValidPost }) => (isValidPost ? "var(--white)" : "#867388")};
`;
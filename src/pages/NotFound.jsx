import { styled } from "styled-components";
import { Wrap } from "../components/cmnStyle";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Wrap>
      <MiddleText>
        페이지를 찾지 못했습니다! <br />
        올바른 경로로 이동하세요.
      </MiddleText>
      <HomeButton type="HomeButton" onClick={() => navigate("/")}>
        홈으로
      </HomeButton>
    </Wrap>
  );
};

export default NotFound;

const MiddleText = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  color: #000;
  margin: 30px;
`;
const HomeButton = styled.button`
  margin-top: 25px;
  background: lightgray;
  padding: 6px 8px;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  border-radius: 6px;
`;

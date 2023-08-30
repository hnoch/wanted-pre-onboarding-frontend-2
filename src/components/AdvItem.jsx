import { styled } from "styled-components";

const AdvItem = () => {
  const clickAdv = () => {
    window.location.href = "https://www.wanted.co.kr/";
  };

  return (
    <AdvWrap onClick={clickAdv}>
      <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100" />
    </AdvWrap>
  );
};

export default AdvItem;

const AdvWrap = styled.div`
  cursor: pointer;
  background: aliceblue;
  border-radius: 6px;
  padding: 6px 0px;
  margin: 12px 0px;
`;

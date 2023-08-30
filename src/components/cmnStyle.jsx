import { styled } from "styled-components";

export const Layout = styled.div`
  height: 100vh;
`;

export const Inner = styled.div`
  margin: 0px auto;
  width: 420px;
  text-align: center;
  background-color: #fff;
  height: 100vh;

  div {
    color: #000;
  }
  padding: 0px 8px;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  padding: 80px 0px 40px;
`;

export const Header = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 16px;
  background-color: grey;
`;

export const ScrollBox = styled.div`
  overflow-y: auto;
  padding: 8px;
  border-radius: 10px;
  border: 2px solid grey;
  height: calc(100vh - 170px);
`;

export const RowBox = styled.div`
  display: flex;
  align-items: center;
`;

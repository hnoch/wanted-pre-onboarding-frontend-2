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
  font-size: 20px;
  font-weight: 700;
`;

export const Header = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 16px;
  background-color: grey;
`;

export const Wrap = styled.div`
  padding: 80px 0px 10px;
`;

export const LoadingWrap = styled.div`
  font-size: 14px;
  font-style: italic;
  text-align: center;
  padding: 20px 0px;
`;

export const RowBox = styled.div`
  display: flex;
  align-items: center;
`;

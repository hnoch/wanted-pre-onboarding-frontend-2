import { useEffect, useState } from "react";
import { getIssueListApi } from "../apis/gitApi";
import ListItem from "../components/ListItem";
import { styled } from "styled-components";
import { LoadingWrap, Wrap } from "../components/cmnStyle";
import AdvItem from "../components/AdvItem";

const IssueList = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [list, setList] = useState([]);

  useEffect(() => {
    getIssueListApi(props.param)
      .then(res => {
        if (res.status === 200) {
          setList(res.data);
          setIsLoading(false);
        }
      })
      .catch(err => {
        alert(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <Wrap>
      <ScrollBox>
        {isLoading ? (
          <LoadingWrap>Issue를 불러오고 있습니다...</LoadingWrap>
        ) : list.length !== 0 ? (
          list.map((item, idx) => {
            if ((idx + 1) % 5 === 0) {
              return <AdvItem key={"ad_" + idx} />;
            } else {
              return <ListItem key={idx} item={item} />;
            }
          })
        ) : (
          <LoadingWrap>Issue가 존재하지 않습니다.</LoadingWrap>
        )}
      </ScrollBox>
    </Wrap>
  );
};

export default IssueList;

export const ScrollBox = styled.div`
  overflow-y: auto;
  padding: 8px;
  border-radius: 10px;
  border: 2px solid grey;
  height: calc(100vh - 100px);
`;

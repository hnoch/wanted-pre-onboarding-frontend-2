import { useEffect, useRef, useState } from "react";
import ListItem from "../components/ListItem";
import { styled } from "styled-components";
import { InfoWrap, Wrap } from "../components/cmnStyle";
import AdvItem from "../components/AdvItem";
import useObserver from "../hooks/useObserver";
import useGetIssue from "../hooks/useGetIssue";

const IssueList = () => {
  const target = useRef(null);
  const { issueList, getIssueList, isLoading } = useGetIssue();
  const [page, setPage] = useState(1);

  const observeCallback = async entry => {
    if (entry.isIntersecting) {
      setPage(prev => prev + 1);
    }
  };

  const [observe, unobserve] = useObserver(observeCallback);

  useEffect(() => {
    if (target.current) {
      observe(target.current);
    }
    return () => {
      if (target.current) unobserve(target.current);
    };
  }, [target]);

  useEffect(() => {
    getIssueList(page);
  }, [page]);

  return (
    <Wrap>
      <ScrollBox>
        {issueList.length !== 0 && (
          <div>
            {issueList.map((item, idx) => {
              if ((idx + 1) % 5 === 0) {
                return <AdvItem key={"ad_" + idx} />;
              } else {
                return <ListItem key={idx} item={item} />;
              }
            })}
          </div>
        )}

        <TargetBox ref={target}></TargetBox>
        {isLoading && <InfoWrap>Issue를 불러오고 있습니다...</InfoWrap>}
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

export const TargetBox = styled.div`
  /* background-color: greenyellow;
  font-size: 16px;
  padding: 32px 0px; */
`;

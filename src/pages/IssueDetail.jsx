import { useEffect, useState } from "react";
import { getIssueDetailApi } from "../apis/gitApi";
import { useParams } from "react-router-dom";
import { LoadingWrap, RowBox, Wrap } from "../components/cmnStyle";
import { styled } from "styled-components";
import ListItem from "../components/ListItem";

const IssueDetail = () => {
  const { num } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [issue, setIssue] = useState();

  useEffect(() => {
    getIssueDetailApi({ owner: "facebook", repo: "react", issue_number: num })
      .then(res => {
        if (res.status === 200) {
          setIssue(res.data);
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
      {isLoading ? (
        <LoadingWrap>Issue를 불러오고 있습니다...</LoadingWrap>
      ) : (
        <DetailWrap>
          <RowBox>
            <ProfileImg src={issue.user.avatar_url} />
            <ListItem item={issue} disabled={true} />
          </RowBox>
          <ContentBox>{issue.body}</ContentBox>
        </DetailWrap>
      )}
    </Wrap>
  );
};

export default IssueDetail;

const DetailWrap = styled.div`
  padding: 4px;
`;

const ProfileImg = styled.img`
  border-radius: 6px;
  width: 40px;
  height: 40px;
  margin-right: 4px;
`;

const ContentBox = styled.div`
  font-size: 14px;
  padding: 10px 0px;
  text-align: left;
  white-space: break-spaces;
  overflow-y: auto;
  height: calc(100vh - 220px);
`;

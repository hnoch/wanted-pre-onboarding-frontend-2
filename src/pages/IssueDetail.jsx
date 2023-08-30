import { useEffect, useState } from "react";
import { getIssueDetailApi } from "../apis/gitApi";
import { useParams } from "react-router-dom";
import { LoadingWrap, Wrap } from "../components/cmnStyle";

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

  useEffect(() => {
    console.info("issue", issue);
  }, [issue]);

  return <Wrap>{isLoading ? <LoadingWrap>Issue를 불러오고 있습니다...</LoadingWrap> : <div>{issue.title}</div>}</Wrap>;
};

export default IssueDetail;

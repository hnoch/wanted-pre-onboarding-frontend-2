import { useEffect, useState } from "react";
import { getIssueDetailApi } from "../apis/gitApi";

const IssueDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [issue, setIssue] = useState();

  useEffect(() => {
    getIssueDetailApi({ owner: "facebook", repo: "react", issue_number: 13991 })
      .then(res => {
        console.info("res", res);
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
    // console.info("issue", issue);
  }, [issue]);

  return <div>{isLoading ? <div>Issue를 불러오고 있습니다...</div> : <div>{issue.title}</div>}</div>;
};

export default IssueDetail;

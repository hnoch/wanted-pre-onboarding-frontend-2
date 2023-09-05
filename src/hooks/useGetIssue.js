import { useState } from "react";
import { getIssueListApi } from "../apis/gitApi";

const useGetIssue = () => {
  const [issueList, setIssueList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getIssueList = async page => {
    setIsLoading(true);

    let listParam = {
      owner: "facebook",
      repo: "react",
      state: "open",
      sort: "comments",
      per_page: 20,
      page: page,
    };

    await getIssueListApi(listParam)
      .then(res => {
        if (res.status === 200) {
          setIsLoading(false);
          setIssueList(prev => prev.concat(res.data));

          return res.data;
        }
      })
      .catch(err => {
        alert(err);
      });
  };

  return { issueList, setIssueList, getIssueList, isLoading };
};

export default useGetIssue;

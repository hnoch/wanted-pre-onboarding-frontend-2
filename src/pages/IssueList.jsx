import { useEffect, useState } from "react";
import { getIssueListApi } from "../apis/gitApi";

const IssueList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [list, setList] = useState([]);

  useEffect(() => {
    getIssueListApi({ owner: "facebook", repo: "react", state: "open", sort: "comments", per_page: 100, page: 1 })
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

  useEffect(() => {
    // console.info("list", list);
  }, [list]);

  return (
    <div>
      {isLoading ? (
        <div>Issue를 불러오고 있습니다...</div>
      ) : list.length !== 0 ? (
        list.map((item, idx) => {
          return (
            <div key={idx}>
              <span>{item.title} </span>
              <br />
              <br />
            </div>
          );
        })
      ) : (
        <div>Issue가 존재하지 않습니다.</div>
      )}
    </div>
  );
};

export default IssueList;

import { useEffect, useState } from "react";
import { getIssueListApi } from "../apis/gitApi";
import { ScrollBox, Title } from "../components/cmnStyle";
import ListItem from "../components/ListItem";

const IssueList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [list, setList] = useState([]);
  const [listParam, setListParam] = useState({
    owner: "facebook",
    repo: "react",
    state: "open",
    sort: "comments",
    per_page: 100,
    page: 1,
  });

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
    console.info("list", list);
  }, [list]);

  return (
    <div>
      <Title>{listParam.owner + "/" + listParam.repo}</Title>

      <ScrollBox>
        {isLoading ? (
          <div>Issue를 불러오고 있습니다...</div>
        ) : list.length !== 0 ? (
          list.map((item, idx) => {
            if ((idx + 1) % 5 === 0) {
              return (
                <div key={"ad_" + idx}>
                  <span> ================= 광고 ================= </span>
                  <br />
                  <br />
                </div>
              );
            } else {
              return <ListItem key={idx} item={item} />;
            }
          })
        ) : (
          <div>Issue가 존재하지 않습니다.</div>
        )}
      </ScrollBox>
    </div>
  );
};

export default IssueList;

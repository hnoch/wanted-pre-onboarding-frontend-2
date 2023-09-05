import { styled } from "styled-components";
import { dateFormat } from "../utils/dateFormat";
import { useNavigate } from "react-router-dom";
import { RowBox } from "./cmnStyle";

const ListItem = props => {
  const navigate = useNavigate();
  return (
    <ListWrap
      type={"button"}
      onClick={() => navigate(`/detail/${props.item.number}`)}
      disabled={props.disabled ?? false}
    >
      <InfoBox>
        <div>
          #{props.item.number} &nbsp;
          <strong>{props.item.title}</strong>
        </div>
        <div>
          작성자 : {props.item.user.login}, 작성일 : {dateFormat(props.item.created_at)}
        </div>
        <LabalWrap>
          {props.item.labels.map((item, idx) => (
            <LabelItem key={idx}>{item.name}</LabelItem>
          ))}
        </LabalWrap>
      </InfoBox>
      <RightBox>
        <img src={"https://cdn2.iconfinder.com/data/icons/medical-healthcare-26/28/Chat-2-512.png"} />
        <div>{props.item.comments}</div>
      </RightBox>
    </ListWrap>
  );
};

export default ListItem;

const ListWrap = styled.button`
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 12px 6px;

  > div {
    font-size: 12px;
    text-align: left;
  }

  border-bottom: 1px solid #e0e0e0;
`;

const InfoBox = styled.div`
  font-size: 12px;
  text-align: left;
  flex: 1;
  margin-right: 8px;

  > :nth-child(2) {
    margin-top: 4px;
  }
`;

const LabalWrap = styled(RowBox)`
  flex-wrap: wrap;
  :nth-child(n) {
    margin: 4px 4px 0 0;
  }
`;

const LabelItem = styled.div`
  border-radius: 12px;
  border: 2px solid #e3b341;
  background: #f8e3a1;
  font-size: 8px;
  font-weight: 600;
  padding: 4px 8px;
`;

const RightBox = styled(RowBox)`
  > img {
    width: 16px;
    height: 16px;
  }
  > div {
    margin-left: 4px;
    font-size: 12px;
  }
`;

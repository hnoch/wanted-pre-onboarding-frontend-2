import { styled } from "styled-components";
import { dateFormat } from "../utils/dateFormat";
import { useNavigate } from "react-router-dom";

const ListItem = props => {
  const navigate = useNavigate();
  return (
    <ListWrap type={"button"} onClick={() => navigate(`/detail/${props.item.number}`)}>
      <InfoBox>
        <div>
          #{props.item.number} &nbsp;
          <strong>{props.item.title}</strong>
        </div>
        <div>
          작성자 : {props.item.user.login}, 작성일 : {dateFormat(props.item.created_at)}
        </div>
      </InfoBox>
      <div>코멘트 : {props.item.comments}</div>
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

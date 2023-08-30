import { styled } from "styled-components";
import { RowBox } from "./cmnStyle";

const ListItem = props => {
  return (
    <ListWrap>
      <div>{props.item.title}</div>
      <div></div>
    </ListWrap>
  );
};

export default ListItem;

const ListWrap = styled(RowBox)`
  width: 100%;
`;

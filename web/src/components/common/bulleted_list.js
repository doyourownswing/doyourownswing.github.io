import { List, ListItem } from "@mui/material";
import bulletedListStyles from "./bulleted_list.styles";

function BulletedList(props) {
  let newSx = { ...props.sx, ...bulletedListStyles.list };

  return <List sx={newSx}>{props.children}</List>;
}

function BulletedListItem(props) {
  let newSx = { ...props.sx, ...bulletedListStyles.listItem };

  return <ListItem sx={newSx}>{props.children}</ListItem>;
}

export { BulletedList, BulletedListItem };

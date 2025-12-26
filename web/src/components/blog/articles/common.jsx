import { Typography } from "@mui/material";
import articleStyles from "./common.styles";

function Header1(props) {
  return (
    <Typography variant="h4" sx={articleStyles.header1}>
      {props.children}
    </Typography>
  );
}

export { Header1 };

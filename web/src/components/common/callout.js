import { Box } from "@mui/material";
import calloutStyles from "./callout.styles";

export default function Callout(props) {
  return <Box sx={calloutStyles.container}>{props.children}</Box>;
}

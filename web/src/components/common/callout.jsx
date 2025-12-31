import { Box } from "@mui/material";
import calloutStyles from "./callout.styles";

export default function Callout(props) {
  let myProps = { ...props };

  // Provides default styling, but allows overriding.
  let newSx = { ...calloutStyles.container, ...myProps.sx };

  return <Box sx={newSx}>{props.children}</Box>;
}

import { Link } from "@mui/material";
import linkStyles from "./link.styles";

// TODO: replaces uses of the other link.

/** A better and styled link. Cuz Material UI link sucks. */
function DyosLink(props) {
  let myProps = { ...props };
  let openInNewTab = myProps.openInNewTab;

  // Remove the prop otherwise react complains
  delete myProps.openInNewTab;

  if (openInNewTab) {
    myProps.target = "__blank";
    myProps.rel = "noopener noreferrer";
  }

  // Provides better default link styling, but allows overriding.
  let newSx = { ...linkStyles, ...myProps.sx };

  // Allow propagation of all other props except sx, which has special handling.
  delete myProps.sx;

  return <Link sx={newSx} {...myProps}></Link>;
}

export default DyosLink;

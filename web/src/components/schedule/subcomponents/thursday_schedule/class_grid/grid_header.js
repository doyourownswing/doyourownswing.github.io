import { Grid, Typography } from "@mui/material";

// props should look like this:
// {
//   items: ["display text"],
//   itemSize: 4, // # of columns
//   breakpointStyles: { xs: "none", md: "block" }, // where the column should be hidden or shown
//   variant: "h4" // typography variant to display
// }

function GridHeader(props) {
  var gridItems = [...props.items];
  var itemSize = props.itemSize;
  var breakpointStyles = props.breakpointStyles;
  var variant = props.variant;
  return (
    <>
      {gridItems.map((x) => (
        <Grid item xs={itemSize} display={breakpointStyles}>
          <Typography variant={variant}>{x}</Typography>
        </Grid>
      ))}
    </>
  );
}

export default GridHeader;

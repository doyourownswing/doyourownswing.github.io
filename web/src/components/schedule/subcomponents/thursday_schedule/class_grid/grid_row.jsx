import { useTheme } from "@emotion/react";
import { Box, Grid, Typography } from "@mui/material";

// props should look like this:
// {
//   items: ["display text"],
//   itemSize: 4, // # of columns
//   title: "title text"
//   subtitle: "subtitle text"
// }

function GridRow(props) {
  const theme = useTheme();
  return (
    <>
      <Grid item xs={props.itemSize}>
        <Typography variant="h6" display={{ xs: "none", md: "block" }}>
          {props.title}
        </Typography>
        <Typography variant="h4" display={{ xs: "block", md: "none" }}>
          {props.title}
        </Typography>
        <Box color={theme.palette.text.subtitle}>{props.subtitle}</Box>
      </Grid>
      {props.items.map((x) => (
        <Grid item xs={props.itemSize}>
          <Box>{x}</Box>
        </Grid>
      ))}
    </>
  );
}

export default GridRow;

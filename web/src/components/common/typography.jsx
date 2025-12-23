import { Typography } from "@mui/material";

function Text(props) {
  return (
    <Typography {...props} display="inline">
      {props.children}
    </Typography>
  );
}

function Space(props) {
  return <Text {...props}>&nbsp;</Text>;
}

export { Text, Space };

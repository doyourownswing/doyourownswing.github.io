import { Avatar, Box, Typography } from "@mui/material";

function QuoteAttribution(props) {
  let attributionInfo = props.attributionInfo;

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Avatar sx={{ marginRight: "12px" }}>
        <Box
          component="img"
          src={attributionInfo.picture}
          sx={{ height: "40px", width: "40px" }}
        ></Box>
      </Avatar>
      <Typography>{attributionInfo.name}</Typography>
    </Box>
  );
}

export default QuoteAttribution;

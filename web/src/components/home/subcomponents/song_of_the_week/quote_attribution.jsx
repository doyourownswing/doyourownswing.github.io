import { Avatar, Box, Typography } from "@mui/material";
import quoteAttributionStyles from "./quote_attribution.styles";

function QuoteAttribution(props) {
  let attributionInfo = props.attributionInfo;

  return (
    <Box sx={quoteAttributionStyles.quoteAttributionContainer}>
      <Avatar sx={quoteAttributionStyles.avatar}>
        {!attributionInfo.picture ? (
          attributionInfo.name[0]
        ) : (
          <Box
            component="img"
            src={attributionInfo.picture}
            sx={quoteAttributionStyles.avatarImage}
          ></Box>
        )}
      </Avatar>
      <Typography>{attributionInfo.name}</Typography>
    </Box>
  );
}

export default QuoteAttribution;

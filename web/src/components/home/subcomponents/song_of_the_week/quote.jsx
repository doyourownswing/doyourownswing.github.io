import { Box, Typography } from "@mui/material";
import quoteStyles from "./quote.styles";
import QuoteAttribution from "./quote_attribution";

function Quote(props) {
  let songInfo = props.songInfo;

  if (!songInfo.quoteInfo) {
    // if there's no quote, don't show anything.
    return;
  }

  return (
    <Box sx={quoteStyles.quoteContainer}>
      <Typography variant="body1" sx={quoteStyles.quote}>
        "{songInfo.quoteInfo.quote}"
      </Typography>
      <QuoteAttribution
        attributionInfo={songInfo.quoteInfo.attributionInfo}
      ></QuoteAttribution>
    </Box>
  );
}

export default Quote;

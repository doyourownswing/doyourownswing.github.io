import { Box, Typography } from "@mui/material";
import songOfTheWeekStyles from "./song_of_the_week.styles";
import QuoteAttribution from "./quote_attribution";

function Quote(props) {
  let songInfo = props.songInfo;

  if (!songInfo.quoteInfo) {
    // if there's no quote, don't show anything.
    return;
  }

  return (
    <Box sx={songOfTheWeekStyles.quoteContainer}>
      <Typography variant="body1" sx={songOfTheWeekStyles.quote}>
        "{songInfo.quoteInfo.quote}"
      </Typography>
      <QuoteAttribution
        attributionInfo={songInfo.quoteInfo.attributionInfo}
      ></QuoteAttribution>
    </Box>
  );
}

export default Quote;

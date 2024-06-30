import { Box, Card, Container, Stack, Typography } from "@mui/material";
import songOfTheWeekStyles from "./song_of_the_week.styles";
import SongCard from "./song_card";
import getCurrentSong from "data/songs_of_the_week";
import messages from "./messages";
import QuoteAttribution from "./quote_attribution";
import { SECTION_MAX_WIDTH } from "common/constants";

function SongOfTheWeek() {
  let songInfo = getCurrentSong();

  // If there are no current songs, don't display this section.
  if (!songInfo) {
    return;
  }

  return (
    <Box sx={songOfTheWeekStyles.songOfTheWeekSection}>
      <Container>
        <Stack direction={songOfTheWeekStyles.songOfTheWeekFlexContainer}>
          <Box sx={songOfTheWeekStyles.quoteContainer}>
            <Typography variant="h4" sx={songOfTheWeekStyles.title}>
              {messages.title}
            </Typography>
            <Typography variant="body1" sx={songOfTheWeekStyles.quote}>
              "{songInfo.quoteInfo.quote}"
            </Typography>
            <QuoteAttribution
              attributionInfo={songInfo.quoteInfo.attributionInfo}
            ></QuoteAttribution>
          </Box>
          <Container sx={songOfTheWeekStyles.songCardContainer}>
            <Box sx={songOfTheWeekStyles.songCard}>
              <SongCard songInfo={songInfo}></SongCard>
            </Box>
          </Container>
        </Stack>
      </Container>
    </Box>
  );
}

export default SongOfTheWeek;

import { Box, Container, Stack, Typography } from "@mui/material";
import songOfTheWeekStyles from "./song_of_the_week.styles";
import SongCard from "./song_card";
import getCurrentSong from "@/data/songs_of_the_week";
import messages from "./messages";
import Quote from "./quote";
import DyosLink from "@/components/common/link";
import { HTML_IDS } from "../constants";

const dyosPlaylistLink =
  "https://open.spotify.com/playlist/4pI5RuxmGMy0uyANUqGAyE?si=411919e6ece04cc7";

function PlaylistCallout() {
  return (
    <Box>
      <Typography
        display="inline"
        variant="body1"
        sx={songOfTheWeekStyles.quotePlaceholder}
      >
        {messages.noQuoteText.wannaKnow}
      </Typography>
      <Typography
        display="inline"
        variant="body1"
        sx={songOfTheWeekStyles.quotePlaceholder}
      >
        <DyosLink href={dyosPlaylistLink} openInNewTab>
          {messages.noQuoteText.checkOut}
        </DyosLink>
      </Typography>
    </Box>
  );
}

function AbbreviatedPlaylistCallout() {
  return (
    <Box>
      <Typography display="inline" variant="body1">
        {messages.abbreviatedPlaylistCallout.wannaKnow}
      </Typography>
      <Typography display="inline" variant="body1">
        <DyosLink href={dyosPlaylistLink} openInNewTab>
          {messages.abbreviatedPlaylistCallout.checkOut}
        </DyosLink>
      </Typography>
    </Box>
  );
}

function SongOfTheWeek() {
  let songInfo = getCurrentSong();

  // If there are no current songs, don't display this section.
  if (!songInfo) {
    return;
  }

  let hasQuote = !!songInfo.quoteInfo;

  return (
    <Box id={HTML_IDS.SONG} sx={songOfTheWeekStyles.songOfTheWeekSection}>
      <Container>
        <Typography variant="h3" sx={songOfTheWeekStyles.title}>
          {messages.title}
        </Typography>
        <Stack
          direction={songOfTheWeekStyles.songOfTheWeekFlexContainer.direction}
          sx={songOfTheWeekStyles.songOfTheWeekFlexContainer.style}
        >
          <Box sx={songOfTheWeekStyles.leftContainer}>
            {hasQuote && <Quote songInfo={songInfo}></Quote>}
            {!hasQuote && <PlaylistCallout />}
          </Box>
          <Container sx={songOfTheWeekStyles.songCardContainer}>
            <Box sx={songOfTheWeekStyles.songCard}>
              <SongCard songInfo={songInfo}></SongCard>
            </Box>
          </Container>
        </Stack>

        {hasQuote && <AbbreviatedPlaylistCallout />}
      </Container>
    </Box>
  );
}

export default SongOfTheWeek;

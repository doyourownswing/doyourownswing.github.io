import { Box, Card, Container, Typography } from "@mui/material";
import songOfTheWeekStyles from "./song_of_the_week.styles";
import SongCard from "./song_card";
import getCurrentSong from "../../../../data/songs_of_the_week";
import messages from "./messages";

function SongOfTheWeek() {
  let songInfo = getCurrentSong();
  console.log(songInfo);

  // If there are no current songs, don't display this section.
  if (!songInfo) {
    return;
  }

  return (
    <div style={songOfTheWeekStyles.songOfTheWeekSection}>
      <Container>
        <Box sx={songOfTheWeekStyles.songOfTheWeekContainer}>
          <Box sx={songOfTheWeekStyles.quoteContainer}>
            <Typography variant="h4" sx={songOfTheWeekStyles.title}>
              {messages.title}
            </Typography>
            <Typography>"{songInfo.quoteInfo.quote}"</Typography>
            <Typography>- {songInfo.quoteInfo.attributor}</Typography>
          </Box>
          <Container sx={songOfTheWeekStyles.songCardContainer}>
            <Box sx={songOfTheWeekStyles.songCard}>
              <SongCard songInfo={songInfo}></SongCard>
            </Box>
          </Container>
        </Box>
      </Container>
    </div>
  );
}

export default SongOfTheWeek;

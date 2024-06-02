import { Box, Button, Card, Typography } from "@mui/material";
import songCardStyles from "./song_card.styles";
import messages from "./messages";

function SongCard(props) {
  let songInfo = props.songInfo;

  return (
    <Card sx={songCardStyles.songCardContainer}>
      <Box
        component="img"
        sx={songCardStyles.albumCoverImage}
        alt="Album cover"
        src={songInfo.songLinks.albumCoverImage}
      ></Box>
      <Box sx={songCardStyles.songCardRightContent}>
        <Box sx={songCardStyles.songInfoContainer}>
          <Typography variant="h6">{songInfo.songInfo.name}</Typography>
          <Typography variant="subtitle1">
            {songInfo.songInfo.artist} ・ {songInfo.songInfo.year}
          </Typography>
          <Typography variant="subtitle2">
            {songInfo.songInfo.songLength}
          </Typography>
        </Box>
        <Box sx={songCardStyles.linksContainer}>
          <Button
            sx={songCardStyles.link}
            href={songInfo.songLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
          >
            {messages.listenOnYoutube}
          </Button>
          <Button
            sx={songCardStyles.link}
            href={songInfo.songLinks.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            {messages.listenOnSpotify}
          </Button>
        </Box>
      </Box>
    </Card>
  );
}

export default SongCard;

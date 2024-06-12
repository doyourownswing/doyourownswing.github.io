import React from "react";
import { Box, Button, Card, Typography } from "@mui/material";
import songCardStyles from "./song_card.styles";
import messages from "./messages";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SpotifyIcon from "components/common/icons/spotify";

function SongLinkButton(props) {
  return (
    <Button
      variant="outlined"
      sx={props.sx}
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </Button>
  );
}

function SongCard(props) {
  let songInfo = props.songInfo;

  return (
    <Card sx={songCardStyles.songCardContainer}>
      <Box sx={songCardStyles.albumCoverContainer}>
        <Box
          component="img"
          sx={songCardStyles.albumCoverImage}
          alt="Album cover"
          src={songInfo.songLinks.albumCoverImage}
        ></Box>
      </Box>
      <Box sx={songCardStyles.songCardRightContent}>
        <Box sx={songCardStyles.songInfoContainer}>
          <Typography variant="h6" sx={songCardStyles.songName}>
            {songInfo.songInfo.name}
          </Typography>
          <Typography variant="subtitle2" sx={songCardStyles.songDetails}>
            {songInfo.songInfo.artist} ・ {songInfo.songInfo.year}
          </Typography>
        </Box>
        <Box sx={songCardStyles.linksContainer}>
          <SongLinkButton
            sx={songCardStyles.linkButton}
            href={songInfo.songLinks.youtube}
          >
            <YouTubeIcon sx={songCardStyles.youtubeIcon} />
            {messages.listenOnYoutube}
          </SongLinkButton>
          <SongLinkButton
            sx={songCardStyles.linkButton}
            href={songInfo.songLinks.spotify}
          >
            <SpotifyIcon style={songCardStyles.spotifyIcon}></SpotifyIcon>
            {messages.listenOnSpotify}
          </SongLinkButton>
        </Box>
      </Box>
    </Card>
  );
}

export default SongCard;
